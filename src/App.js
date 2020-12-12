import React from 'react';
import SearchCriteria from "./components/SearchCriteria";
import SearchCriteriaModified from "./components/SearchCriteriaModified";
import Title from "./components/Title";

const App = () => {

    return (
        <div className="App">
            <Title />
{/*             <SearchCriteria />*/}
            <SearchCriteriaModified />
        </div>
    );
};

export default App;