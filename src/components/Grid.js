import React, {useState, useEffect} from 'react';
import {Table} from "semantic-ui-react";
import "../resultsGrid.css"
import "kds-react/kds-reset.css"
import "kds-react/kds-styles.css"
import "kds-react/kds-utils.css"
import service from "../apis/service";
import NoRecordsFound from "./NoRecordsFound";

const Grid = (props) => {

    const first = "<<";
    const back = "<";
    const next = ">";
    const last = ">>";

    let backButton;
    let firstButton;
    let lastPageBtn;
    let nextButton;
    let pgLast = ''
    let totalPages = ''


    const [gridData, setGridData] = useState(null);
    const [gridHook, setGridHook] = useState({});
    const [activePage, setActivePage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    if(gridData !== null && gridData.totalPages !== ''){
        totalPages = gridData.totalPages;
    }

    useEffect(() =>{
        setGridHook({...props.girdJson})
    },[props.girdJson])

    useEffect(() =>{
        setPostsPerPage(postsPerPage)
    },[postsPerPage])

    useEffect(() => {

        const fetchPosts = async () => {
            const response = await service.post('/hierarchyRoles', gridHook);
            //console.log("Grid useEffect response:",response)
            setGridData(response.data)
            setActivePage(response.data.pageRequest.pageNumber)
        }
        fetchPosts();

    }, [gridHook]);

    const changePage = (direction) => {
        let newPage = 1
        if (direction === 'back') {
            newPage = Math.ceil(activePage - 1)
        } else if (direction === 'next') {
            newPage = Math.ceil(activePage + 1)
        } else if (direction === 'first') {
            newPage = 1
        } else if (direction === 'last') {
            newPage = gridData.totalPages
        }
        setActivePage(newPage)
        let pageRequestChangePage= {
            "pageNumber": newPage,
            "pageSize": postsPerPage
        }

        //console.log("In changePage set timeout:: new pageRequest:",pageRequestChangePage)
        setGridHook({...gridHook,pageRequest:pageRequestChangePage});
    }

    const pageSelectHandler = (e) =>{
        pgLast = gridData.totalPages;

        if(e.target.value > pgLast){
            setActivePage(1);
        }
        else if (e.target.value<= pgLast) {
            setActivePage(e.target.value);
        }

        let pageRequestSelect= {
            "pageNumber": e.target.value,
            "pageSize": postsPerPage
        }
        //console.log("In pageSelectHandler:: new pageRequest:", pageRequestSelect)
        setGridHook({...gridHook,pageRequest:pageRequestSelect});
        setActivePage(e.target.value);
    }

    const itemsPerPageHandler =(e)=>{
        if(activePage > totalPages){
            setActivePage(1);
        }else{
            setActivePage(activePage);
        }

        setPostsPerPage(e.target.value);

        let pageRequest= {
            "pageNumber": activePage,
            "pageSize": e.target.value
        }
        //console.log("itemsPerPageHandler:: new pageRequest:", pageRequest)
        setGridHook({...gridHook,pageRequest:pageRequest});
    }

    if (activePage > 1) {
        backButton = <p onClick={() => changePage('back')}>{back}</p>
        firstButton = <p onClick={() => changePage('first')}>{first}</p>

    } else {
        backButton = <p onClick={ (event) => event.preventDefault()} >{back}</p>
        firstButton = <p onClick={ (event) => event.preventDefault()}>{first}</p>
    }
    if (gridData !== null && gridData.totalElements - 1 > activePage * gridData.numberOfElements) {
        nextButton = <p onClick={() => changePage('next')}>{next}</p>
        lastPageBtn = <p onClick={() => changePage('last')}>{last}</p>

    } else {
        nextButton = <p onClick={ (event) => event.preventDefault()}>{next}</p>
        lastPageBtn = <p onClick={ (event) => event.preventDefault()}>{last}</p>
    }

    return (
        <div>
            {(props.girdJson !== null && gridData !== null && gridData.results.length > 0) ?

                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell name="pubGtin">Published GTIN <svg
                                focusable="false" fill="currentColor" width="1.2em" height="1.2em" viewBox="-2 -2 16 16"
                                data-name="Icon" data-testid="sort.svg">
                                <path
                                    d="M8.003 13.992a1.171 1.171 0 01-.831-.344l-3.174-3.174a.425.425 0 11.602-.6l3.173 3.174a.326.326 0 00.46 0L11.4 9.88a.425.425 0 11.602.6l-3.168 3.168a1.171 1.171 0 01-.831.344zM4.3 6.248a.425.425 0 01-.301-.726l3.17-3.17a1.176 1.176 0 011.663 0l3.169 3.17a.425.425 0 11-.602.6L8.23 2.952a.326.326 0 00-.459 0l-3.17 3.172a.426.426 0 01-.301.124z"></path>
                            </svg>
                            </Table.HeaderCell>
                            <Table.HeaderCell className="idColumns">Inner Pack Item ID</Table.HeaderCell>
                            <Table.HeaderCell className="idColumns">Sales Variant Item ID</Table.HeaderCell>
                            <Table.HeaderCell className="statusAndTime">Item Hierarchy Status</Table.HeaderCell>
                            <Table.HeaderCell className="statusAndTime">Role Update Date and Time</Table.HeaderCell>
                            <Table.HeaderCell name="reasonCode">Venus Reason Code</Table.HeaderCell>
                            <Table.HeaderCell className="idColumns">Venus IMF Number</Table.HeaderCell>
                            <Table.HeaderCell name="version">Version <svg
                                focusable="false" fill="currentColor" width="1.2em" height="1.2em" viewBox="-2 -2 16 16"
                                data-name="Icon" data-testid="sort.svg">
                                <path
                                    d="M8.003 13.992a1.171 1.171 0 01-.831-.344l-3.174-3.174a.425.425 0 11.602-.6l3.173 3.174a.326.326 0 00.46 0L11.4 9.88a.425.425 0 11.602.6l-3.168 3.168a1.171 1.171 0 01-.831.344zM4.3 6.248a.425.425 0 01-.301-.726l3.17-3.17a1.176 1.176 0 011.663 0l3.169 3.17a.425.425 0 11-.602.6L8.23 2.952a.326.326 0 00-.459 0l-3.17 3.172a.426.426 0 01-.301.124z"></path>
                            </svg></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {gridData.results.map((post, i) => {
                            return (
                                <Table.Row key={i}>
                                    <Table.Cell>{post.publishedGtin}</Table.Cell>
                                    <Table.Cell>{post.innerPackItemId}</Table.Cell>
                                    <Table.Cell><div className="salesVariant">{post.salesVariantItemIdList.join(' ')}</div></Table.Cell>
                                    <Table.Cell>{post.itemHierarchyStatus}</Table.Cell>
                                    <Table.Cell>{post.roleUpdateDateAndTime}</Table.Cell>
                                    <Table.Cell>{post.venusReasonCode}</Table.Cell>
                                    <Table.Cell>{post.venusImfNumber}</Table.Cell>
                                    <Table.Cell>{post.version}</Table.Cell>
                                </Table.Row>
                            )
                        })
                        }
                    </Table.Body>
                </Table>
                /*If 0 results are returned, display No Records Found grid*/
                : <NoRecordsFound />
            }

            {(props.girdJson !== null && gridData !== null && gridData.results.length > 0) ?
                <div className="footerTitle">
                    Items/Page
                    <select className="itemPage" type="search" name="operators111" id="operators111" onChange={itemsPerPageHandler}>
                        <option id="10" value="10">10</option>
                        <option id="20" value="20">20</option>
                        <option id="50" value="50">50</option>
                        <option id="100" value="100">100</option>
                    </select>

                    {firstButton}
                    {backButton}
                    Page
                    <input type='currentPage' className="pg-txt" value={activePage} onChange={(e)=>pageSelectHandler(e)} /> of {totalPages}
                    {nextButton}
                    {lastPageBtn}
                </div>
                : null
            }
        </div>
    );
};

export default Grid;