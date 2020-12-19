import React, {useState, useEffect} from 'react';
import {Table} from "semantic-ui-react";
import "../resultsGrid.css"
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import axios from 'axios'

const Grid = (props) => {

    const first = "<<";
    const back = "<";
    const next = ">";
    const last = ">>";
    let backButton = null;
    let firstButton = null;
    let lastPageBtn = null;
    let nextButton = null;

    console.log("In Grid")
    console.log(props.girdJson)

    const [gridData, setGridData] = useState([]);
    const [gridJsonHook, setGridJsonHook] = useState(null);


    useEffect(() => {

        axios.post ("https://eis-hierarchy-status-service-dev.cfcdcinternaltest.kroger.com/hierarchyRoles", props.girdJson).then((response)=> {
            setGridData(response.data)
            console.log("RESPONSE from display", response.data)

            console.log("Grid data")
            console.log(gridData)

            console.log("Grid data total elements")
            console.log(gridData.numberOfElements)
        } );

    }, [props.girdJson]);
    /*    const changePage= (direction) => {
            if (direction === 'back') {
                setActivePage(activePage - 1)
            }
            else if (direction === 'next') {
                setActivePage(activePage + 1)
            }
            else if (direction === 'first') {
                setActivePage(1)
            }
            else if (direction === 'last') {
                setActivePage(Math.ceil(posts.length/postsPerPage))
            }

        }

        if(activePage > 1){

            backButton =  <li><a onClick={() => changePage('back')}>{back}</a></li>
            firstButton =<li><a onClick={() => changePage('first')}>{first}</a></li>
        }
        if( totalPosts -1 > activePage * postsPerPage){
            nextButton =<li><a onClick={() => changePage('next')} >{next}</a></li>
            lastPageBtn = <li><a onClick={() => changePage('last')}>{last}</a></li>
        }*/


    return (
        <div>
            {/*<Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Published GTIN</Table.HeaderCell>
                        <Table.HeaderCell>Inner Pack Item ID</Table.HeaderCell>
                        <Table.HeaderCell>Sales Variant (SV) Item ID</Table.HeaderCell>
                        <Table.HeaderCell>Item Hierarchy Status</Table.HeaderCell>
                        <Table.HeaderCell>Role Update Date and Time</Table.HeaderCell>
                        <Table.HeaderCell>Venus Reason Code</Table.HeaderCell>
                        <Table.HeaderCell>Venus IMF Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {gridData.results !== null ?gridData.results.map((post) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{post.publishedGtin}</Table.Cell>
                                <Table.Cell>{post.innerPackItemId}</Table.Cell>
                                <Table.Cell>{post.salesVariantItemIdList.join(',')}</Table.Cell>
                                <Table.Cell>{post.itemHierarchyStatus}</Table.Cell>
                                <Table.Cell>{post.roleUpdateDateAndTime}</Table.Cell>
                                <Table.Cell>{post.venusReasonCode}</Table.Cell>
                                <Table.Cell>{post.venusImfNumber}</Table.Cell>
                            </Table.Row>
                        )
                    }) : null
                    }
                </Table.Body>
            </Table>*/}
            {/*            <div className="footerTitle">
                Items/Page
                <select className="itemPage" type="search" name="operators111" id="operators111">
                    <option id="10" selected value="10">10</option>
                    <option id="20" value="20">20</option>
                    <option id="50" value="50">50</option>
                    <option id="100" value="100">100</option>
                </select>
                {firstButton}
                {backButton}
                Page 1 of 157
                {nextButton}
                {lastPageBtn}
            </div>*/}
        </div>
    );
};

export default Grid;