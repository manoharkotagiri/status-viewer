import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Label from "kds-react/build/cjs/components/Label/Label";
import Button from "kds-react/build/cjs/components/Button/Button";
import Text from "kds-react/build/cjs/components/Text/Text";
import service from "../apis/service";

class SearchCriteriaModified extends React.Component {

    constructor(props) {
        super(props);
        console.log("Props:: " + props)
        this.state = { queryField: "publishedGtin", queryValue: "", searchCriteria: "",
            queryFieldInner: "innerPackGtin", queryValueInner: "", searchCriteriaInner: "" }

    }

    onChangeHandler=(field ,e) => {
        this.setState({ field: e.target.value })
}

    onSubmit = async () => {

        let searchList = []

        const searchObject = {
            queryField: this.state.queryField,
            queryValue: this.state.queryValue,
            searchCriteria: this.state.searchCriteria
        }

        const searchObjectInner = {
            queryField: this.state.queryFieldInner,
            queryValue: this.state.queryValueInner,
            searchCriteria: this.state.searchCriteriaInner
        }

        if(this.state.queryValue !== ""){
            searchList.push(searchObject)
        }

        if(this.state.queryValueInner !== ""){
            searchList.push(searchObjectInner)
        }

        const finalJson = {
            queries: searchList
        }

        console.log("Search list")
        console.log(searchList)

        console.log("Final Json is here")
        console.log(finalJson)

        const response = await service.post('/hierarchyRoles', finalJson);
        console.log(response)
    };

    render() {
        return (
            <div className="appTitle">

            <h3 className="text-default-900" >VIP Hierarchy Status Viewer</h3>
            <br/><br/><br/>
                <Text className="text-default-900" size="m" bold>Hierarchy Roles</Text>
            <br/>

            <div className="criteria">

                    <div className="container">
                        <Label className="text-default-900" size="s">Published GTIN </Label>
                        <select className="text-default-900"
                                type="search"
                                name="operators1"
                                id="operators1"
                                value={this.state.searchCriteria}
                                onChange={e => this.setState({ searchCriteria: e.target.value })}
                        >
                            <option id="stringEQ" selected value="equals">equals</option>
                            <option id="stringNE" value="not equals">not equals</option>
                            <option id="stringIN" value="in">in</option>
                            <option id="stringLK" value="like">like</option>
                            <option id="stringNL" value="not like">not like</option>
                            <option id="stringSW" value="starts with">starts with</option>
                            <option id="stringEW" value="ends with">ends with</option>
                            <option id="stringID" value="is defined">is defined</option>
                            <option id="stringND" value="is not defined">is not defined</option>
                        </select>
                        <input className="text-default-900" id="pubgtin" name="pubgtin" type="text" ref={this.state.queryValue}
                               onChange={e => this.setState({ queryValue: e.target.value })}/>

                        <Label className="text-default-900" size="s">Inner Pack Item ID </Label>
                        <select className="text-default-900"
                                type="search"
                                name="operators2"
                                id="operators2"
                                value={this.state.searchCriteriaInner}
                                onChange={e => this.setState({ searchCriteriaInner: e.target.value })}
                        >
                            <option id="stringEQ" selected value="equals">equals</option>
                            <option id="stringNE" value="not equals">not equals</option>
                            <option id="stringIN" value="in">in</option>
                            <option id="stringLK" value="like">like</option>
                            <option id="stringNL" value="not like">not like</option>
                            <option id="stringSW" value="starts with">starts with</option>
                            <option id="stringEW" value="ends with">ends with</option>
                            <option id="stringID" value="is defined">is defined</option>
                            <option id="stringND" value="is not defined">is not defined</option>
                        </select>
                        <input className="text-default-900" id="pubgtin" name="pubgtin" type="text" ref={this.state.queryValueInner}
                               onChange={e => this.setState({ queryValueInner: e.target.value })}/>

                    </div>

                    <div className="history">
                      <Label className="text-default-900" size="s">Show History</Label>
                      <input className="text-default-900" type="checkbox" id="showHistory" name="showHistory"/>
                    </div>

                    <div className="search">
                        <Button className="bg-brand-primary"
                                compact type="submit"
                                onClick={this.onSubmit}

                        >Search</Button>
                        <Button className="bg-brand-primary" compact type="reset"> Clear</Button>
                    </div>

            </div>
        </div>
        );
    }
}

export default SearchCriteriaModified;