import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Label from "kds-react/build/cjs/components/Label/Label";
import Button from "kds-react/build/cjs/components/Button/Button";
import Text from "kds-react/build/cjs/components/Text/Text";

class SearchCriteria extends React.Component {

    state = {term: ''}

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            <div className="appTitle">

                <h3 className="text-default-900" >VIP Hierarchy Status Viewer</h3>
                <br/><br/><br/>
                <Text className="text-default-900" size="m" bold>Hierarchy Roles</Text>
                <br/>

                <div className="criteria">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="container">
                            <Label className="text-default-900" size="s">Published GTIN </Label>
                            <select className="text-default-900" type="search" name="operators1" id="operators1" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="pubgtin" name="pubgtin"/>

                            <Label className="text-default-900" size="s">Inner Pack Item ID </Label>
                            <select className="text-default-900" type="search" name="operators2" id="operators2" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="innerPack" name="innerPack"/>

                            <Label className="text-default-900" size="s">Sales Variant (SV) Item ID </Label>
                            <select className="text-default-900" type="search" name="operators3" id="operators3" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="salesVariant" name="salesVariant"/>

                            <Label className="text-default-900" size="s">Item Hierarchy Status </Label>
                            <select className="text-default-900" type="search" name="operators4" id="operators4" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="itemHierarchyStatus" name="itemHierarchyStatus"/>

                            <Label className="text-default-900" size="s">Role Update Date and Time </Label>
                            <select className="text-default-900" type="search" name="operators5" id="operators5" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="roleUpdateDateAndTime" name="roleUpdateDateAndTime"/>

                            <Label className="text-default-900" size="s">Venus IMF Number </Label>
                            <select className="text-default-900" type="search" name="operators6" id="operators6" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="venusIMFNumber" name="venusIMFNumber"/>

                            <Label className="text-default-900" size="s">Venus Reason Code </Label>
                            <select className="text-default-900" type="search" name="operators7" id="operators7" >
                                <option id="stringEQ" selected value="eq">equals</option>
                                <option id="stringNE" value="ne">not equals</option>
                                <option id="stringID" value="id">is defined</option>
                                <option id="stringND" value="nd">is not defined</option>
                                <option id="stringSW" value="sw">starts with</option>
                                <option id="stringEW" value="ew">ends with</option>
                                <option id="stringIN" value="in">in</option>
                            </select>
                            <input className="text-default-900" id="venusReasonCode" name="venusReasonCode"/>
                        </div>

                        <div className="history">
                            <Label className="text-default-900" size="s">Show History</Label>
                            <input className="text-default-900" type="checkbox" id="showHistory" name="showHistory"/>
                        </div>
                        <br/>
                        <div className="search">
                            <Button className="bg-brand-primary" compact type="submit" >Search</Button>
                            <Button className="bg-brand-primary" compact type="reset"> Clear</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchCriteria;