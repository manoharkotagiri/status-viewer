import React from 'react';
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import Button from "kds-react/build/cjs/components/Button/Button";
import service from "../apis/service";

class SearchCall extends React.Component {

    onSearchSubmit = async () => {
        const response = await service.get('/getHierarchyStatus');
        console.log(response)
    };

    render() {
        return (
            <div className="criteria">
                <div className="search">
                    <Button
                        onClick={this.onSearchSubmit}
                        className="bg-brand-primary"
                        compact type="submit"
                    >Search</Button>
                </div>
            </div>
        );
    }
}

export default SearchCall;