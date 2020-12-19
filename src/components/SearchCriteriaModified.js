import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Label from "kds-react/build/cjs/components/Label/Label";
import Button from "kds-react/build/cjs/components/Button/Button";
import Text from "kds-react/build/cjs/components/Text/Text";
import Form from "kds-react/build/cjs/components/Form/Form";
import Divider from "@material-ui/core/Divider";
import service from "../apis/service";
import Grid from "./Grid";

const dropDownElements = [
    {value: "equals", label: "equals"},
    {value: "not equals", label: "not equals"},
    {value: "in", label: "in"},
    {value: "like", label: "like"},
    {value: "not like", label: "not like"},
    {value: "starts with", label: "starts with"},
    {value: "ends with", label: "ends with"},
    {value: "is defined", label: "is defined"},
    {value: "is not defined", label: "is not defined"}
]

class SearchCriteriaModified extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            publishedGtinValue: "", publishedGtinCriteria: "equals",
            innerPackGtinValue: "", innerPackGtinCriteria: "equals",
            svGtinValue: "", svGtinCriteria: "equals",
            hierarchyStatusValue: "", hierarchyStatusCriteria: "equals",
            roleUpdateDatetimeValue: "", roleUpdateDatetimeCriteria: "equals",
            venusImfNumberValue: "", venusImfNumberCriteria: "equals",
            venusReasonCodeValue: "", venusReasonCodeCriteria: "equals",
            pageNumber: 0, pageSize: 10, sortAscending: true, responseData: null, queriesInState:[], finalJsonInState:null
        }
    }

    onSubmit =() => {

        let searchList = []

        if (this.state.publishedGtinValue !== "" || this.state.publishedGtinCriteria === "is defined" || this.state.publishedGtinCriteria === "is not defined") {
            const publishedGtinObject = {
                queryField: "publishedGtin",
                queryValue: this.state.publishedGtinValue,
                searchCriteria: this.state.publishedGtinCriteria
            }
            searchList.push(publishedGtinObject)
        }

        if (this.state.innerPackGtinValue !== "" || this.state.innerPackGtinCriteria === "is defined" || this.state.innerPackGtinCriteria === "is not defined") {
            const innerPackGtinObject = {
                queryField: "innerPackGtin",
                queryValue: this.state.innerPackGtinValue,
                searchCriteria: this.state.innerPackGtinCriteria
            }
            searchList.push(innerPackGtinObject)
        }

        if (this.state.svGtinValue !== "" || this.state.svGtinCriteria === "is defined" || this.state.svGtinCriteria === "is not defined") {
            const svGtinObject = {
                queryField: "svGtin",
                queryValue: this.state.svGtinValue,
                searchCriteria: this.state.svGtinCriteria
            }
            searchList.push(svGtinObject)
        }

        if (this.state.hierarchyStatusValue !== "" || this.state.hierarchyStatusCriteria === "is defined" || this.state.hierarchyStatusCriteria === "is not defined") {
            const hierarchyStatusObject = {
                queryField: "hierarchyStatus",
                queryValue: this.state.hierarchyStatusValue,
                searchCriteria: this.state.hierarchyStatusCriteria
            }
            searchList.push(hierarchyStatusObject)
        }

        if (this.state.roleUpdateDatetimeValue !== "" || this.state.roleUpdateDatetimeCriteria === "is defined" || this.state.roleUpdateDatetimeCriteria === "is not defined") {
            const roleUpdateDatetimeObject = {
                queryField: "roleUpdateDatetime",
                queryValue: this.state.roleUpdateDatetimeValue,
                searchCriteria: this.state.roleUpdateDatetimeCriteria
            }
            searchList.push(roleUpdateDatetimeObject)
        }

        if (this.state.venusImfNumberValue !== "" || this.state.venusImfNumberCriteria === "is defined" || this.state.venusImfNumberCriteria === "is not defined") {
            const venusImfNumberObject = {
                queryField: "venusImfNumber",
                queryValue: this.state.venusImfNumberValue,
                searchCriteria: this.state.venusImfNumberCriteria
            }
            searchList.push(venusImfNumberObject)
        }

        if (this.state.venusReasonCodeValue !== "" || this.state.venusReasonCodeCriteria === "is defined" || this.state.venusReasonCodeCriteria === "is not defined") {
            const venusReasonCodeObject = {
                queryField: "venusReasonCode",
                queryValue: this.state.venusReasonCodeValue,
                searchCriteria: this.state.venusReasonCodeCriteria
            }
            searchList.push(venusReasonCodeObject)
        }

        const finalJson = {
            queries: searchList,
            pageRequest: {
                "pageNumber": this.state.pageNumber,
                "pageSize": this.state.pageSize,
                "sortAscending": this.state.sortAscending
            }
        }

        this.setState({finalJsonInState: finalJson})
    };

    render() {

        let dropDownOptions = dropDownElements.map((element, i) => {
            return (
                <option key={i} value={element.value}>{element.label}</option>
            )
        })

        return (
            <div className="appTitle">

                <h3 className="text-default-900">VIP Hierarchy Status Viewer</h3>
                <br/><br/>
                <Text className="text-default-900" size="m" bold>Hierarchy Roles</Text>
                <Divider/>
                <br/>

                <div className="criteria">
                    <Form onSubmit={this.onSubmit} className="kds-Form">
                        <div className="container">

                            {/*Published GTIN: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Published GTIN</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.publishedGtinCriteria}
                                    onChange={e => this.setState({publishedGtinCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.publishedGtinValue}
                                   onChange={e => this.setState({publishedGtinValue: e.target.value})}/>

                            {/*Inner Pack Item ID: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Inner Pack Item ID</Label>
                            <select className="text-default-900" type="search" name="operators2" id="operators2"
                                    value={this.state.innerPackGtinCriteria}
                                    onChange={e => this.setState({innerPackGtinCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.innerPackGtinValue}
                                   onChange={e => this.setState({innerPackGtinValue: e.target.value})}/>

                            {/*Sales Variant Item ID: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Sales Variant Item ID</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.svGtinCriteria}
                                    onChange={e => this.setState({svGtinCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.svGtinValue}
                                   onChange={e => this.setState({svGtinValue: e.target.value})}/>

                            {/*Item Hierarchy Status: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Item Hierarchy Status</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.hierarchyStatusCriteria}
                                    onChange={e => this.setState({hierarchyStatusCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.hierarchyStatusValue}
                                   onChange={e => this.setState({hierarchyStatusValue: e.target.value})}/>


                            {/*Role Update Date and Time: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Role Update Date and Time</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.roleUpdateDatetimeCriteria}
                                    onChange={e => this.setState({roleUpdateDatetimeCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.roleUpdateDatetimeValue}
                                   onChange={e => this.setState({roleUpdateDatetimeValue: e.target.value})}/>

                            {/*Venus IMF Number: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Venus IMF Number</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.venusImfNumberCriteria}
                                    onChange={e => this.setState({venusImfNumberCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.venusImfNumberValue}
                                   onChange={e => this.setState({venusImfNumberValue: e.target.value})}/>

                            {/*Venus Reason Code: label, dropdown and text input*/}
                            <Label className="text-default-900" size="s">Venus Reason Code</Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1"
                                    value={this.state.venusReasonCodeCriteria}
                                    onChange={e => this.setState({venusReasonCodeCriteria: e.target.value})}>
                                {dropDownOptions}
                            </select>
                            <input className="text-default-900" type="text" ref={this.state.venusReasonCodeValue}
                                   onChange={e => this.setState({venusReasonCodeValue: e.target.value})}/>

                        </div>
                        {/*Show History: label, checkbox*/}
                        <div className="history">
                            <Label className="text-default-900" size="s">Include History</Label>
                            <input className="text-default-900" type="checkbox" id="showHistory" name="showHistory"/>
                        </div>
                        <br/>

                        {/*Submit and Clear buttons*/}
                        <div className="search">
                            <Button className="bg-brand-primary" compact type="submit">Search</Button>
                            <Button className="bg-brand-primary" compact type="reset"> Clear</Button>
                        </div>
                    </Form>
                </div>
                <Grid girdJson={this.state.finalJsonInState}/>
            </div>
        );
    }
}

export default SearchCriteriaModified;