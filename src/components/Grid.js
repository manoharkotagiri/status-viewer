import React, {useState, useEffect} from 'react';
import {Table} from "semantic-ui-react";
import "../resultsGrid.css"
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import service from "../apis/service";

const Grid = (props) => {

    const first = "<<";
    const back = "<";
    const next = ">";
    const last = ">>";
    let backButton = null;
    let firstButton = null;
    let lastPageBtn = null;
    let nextButton = null;
    let pgLast = ''


    const [gridData, setGridData] = useState(null);
    const [gridHook, setGridHook] = useState({});
    const [activePage, setActivePage] = useState(null);
    const [pgNbr, setPgNbr] = useState(1);

    useEffect(() => {

        setGridHook({...props.girdJson})
        console.log("In use effect setting the hook")
        console.log(gridHook)

        const fetchPosts = async () => {
            const response = await service.post('/hierarchyRoles', props.girdJson);
            setGridData(response.data)
            setPgNbr(response.data.pageRequest.pageNumber)
        }
        fetchPosts();

    }, [props.girdJson]);

    const changePage = (direction) => {
        if (direction === 'back') {
            setActivePage(activePage - 1)
        } else if (direction === 'next') {
            setActivePage(activePage + 1)
        } else if (direction === 'first') {
            setActivePage(1)
        } else if (direction === 'last') {
            setActivePage(Math.ceil(gridData.totalPages / gridData.numberOfElements))
        }

        if (activePage > 1) {
            backButton = <li><a onClick={() => changePage('back')}>{back}</a></li>
            firstButton = <li><a onClick={() => changePage('first')}>{first}</a></li>
        }
        if (gridData.totalElements - 1 > activePage * gridData.numberOfElements) {
            nextButton = <li><a onClick={() => changePage('next')}>{next}</a></li>
            lastPageBtn = <li><a onClick={() => changePage('last')}>{last}</a></li>
        }
    }

    const pageSelectHandler = (e) =>{

        console.log("e.target.value",e.target.value);
        setPgNbr(e.target.value);
        pgLast = gridData.totalPages;

        if(pgNbr > pgLast){
            setPgNbr(1);
            setActivePage(1);
        }
        if (gridData.totalElements > 0 && pgNbr<= pgLast) {
            setActivePage(pgNbr);
        }

        //props.gridJson.pageRequest.pageNumber === activePage
        //fetchPo
    }

    return (
        <div>
            {(props.girdJson !== null && gridData !== null && gridData.results.length > 0) ?

                <Table singleLine>
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
                        {gridData.results.map((post) => {
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
                        })
                        }
                    </Table.Body>
                </Table>
                : null
            }

            {(props.girdJson !== null && gridData !== null && gridData.results.length > 0) ?
                <div className="footerTitle">
                    Items/Page
                    <select className="itemPage" type="search" name="operators111" id="operators111">
                        <option id="10" selected value="10">10</option>
                        <option id="20" value="20">20</option>
                        <option id="50" value="50">50</option>
                        <option id="100" value="100">100</option>
                    </select>
                    {firstButton}
                    {backButton}
                    <input type='text' className="pg-txt" value={pgNbr} onChange={pageSelectHandler} /> of {gridData.totalPages}
                    {nextButton}
                    {lastPageBtn}
                </div>
                : null
            }
        </div>
    );
};

export default Grid;