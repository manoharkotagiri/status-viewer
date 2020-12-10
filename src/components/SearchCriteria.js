import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Label from "kds-react/build/cjs/components/Label/Label";
import Button from "kds-react/build/cjs/components/Button/Button";
import Text from "kds-react/build/cjs/components/Text/Text";
import Dropdown from "./Dropdown";

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
                  <Dropdown/>

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