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

    /*    const first = <svg
            focusable="false" fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 16 16"
            data-name="Icon" data-testid="caret-left.svg">
            <path d="M9.76 12.825a.574.574 0 01-.406-.169L5.812 9.113a1.576 1.576 0 010-2.227l3.542-3.543a.575.575 0 01.814.813L6.625 7.699a.426.426 0 000 .602l3.543 3.543a.575.575 0 01-.407.981z"></path>
        </svg>;
        const back = <svg
            focusable="false" fill="currentColor" width="2em" height="2em" viewBox="0 0 16 16"
            data-name="Icon" data-testid="skip-to-start.svg">
            <path d="M3.43 4.35a.38.38 0 01.38.37v6.56a.38.38 0 01-.38.37.37.37 0 01-.37-.37V4.72a.37.37 0 01.37-.37zM12.58 4.35a.39.39 0 01.27.1.37.37 0 010 .53l-2.75 2.8a.38.38 0 000 .53L12.83 11a.38.38 0 010 .53.37.37 0 01-.53 0L9.57 8.84a1.12 1.12 0 010-1.58l2.76-2.8a.34.34 0 01.25-.11zM8.48 4.35a.39.39 0 01.27.1.37.37 0 010 .53L6 7.78a.38.38 0 000 .53L8.73 11a.38.38 0 010 .53.37.37 0 01-.53 0L5.47 8.84a1.13 1.13 0 010-1.59l2.75-2.79a.34.34 0 01.26-.11z"></path>
        </svg>

        const next = <svg
            focusable="false" fill="currentColor" width="1.5em" height="1.5em" viewBox="0 0 16 16"
            data-name="Icon" data-testid="caret-right.svg">
            <path d="M6.291 12.825a.575.575 0 01-.406-.982L9.428 8.3a.426.426 0 000-.6L5.885 4.157a.575.575 0 01.812-.814l3.543 3.543a1.577 1.577 0 010 2.228l-3.543 3.543a.572.572 0 01-.406.168z"></path>
        </svg>
        const last =<svg
            focusable="false" fill="currentColor" width="2em" height="2em" viewBox="0 0 16 16"
            data-name="Icon" data-testid="skip-to-end.svg">
            <path d="M12.58 11.65a.37.37 0 01-.38-.37V4.72a.38.38 0 01.75 0v6.56a.37.37 0 01-.37.37zM3.42 11.65a.37.37 0 01-.26-.65l2.75-2.8a.39.39 0 000-.53L3.18 5a.37.37 0 11.53-.53l2.72 2.7a1.11 1.11 0 010 1.58l-2.75 2.8a.35.35 0 01-.26.1zM7.52 11.65a.37.37 0 01-.26-.65L10 8.22a.39.39 0 000-.53L7.28 5a.37.37 0 11.53-.53l2.72 2.7a1.12 1.12 0 010 1.59l-2.74 2.78a.35.35 0 01-.27.11z"></path>
        </svg>;*/
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
            console.log("Grid useEffect response:",response)
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
                            <Table.HeaderCell>Inner Pack Item ID</Table.HeaderCell>
                            <Table.HeaderCell>Sales Variant Item ID</Table.HeaderCell>
                            <Table.HeaderCell>Item Hierarchy Status</Table.HeaderCell>
                            <Table.HeaderCell>Role Update Date and Time</Table.HeaderCell>
                            <Table.HeaderCell name="reasonCode">Venus Reason Code</Table.HeaderCell>
                            <Table.HeaderCell>Venus IMF Number</Table.HeaderCell>
                            <Table.HeaderCell name="version">Version <svg
                                focusable="false" fill="currentColor" width="1.2em" height="1.2em" viewBox="-2 -2 16 16"
                                data-name="Icon" data-testid="sort.svg">
                                <path
                                    d="M8.003 13.992a1.171 1.171 0 01-.831-.344l-3.174-3.174a.425.425 0 11.602-.6l3.173 3.174a.326.326 0 00.46 0L11.4 9.88a.425.425 0 11.602.6l-3.168 3.168a1.171 1.171 0 01-.831.344zM4.3 6.248a.425.425 0 01-.301-.726l3.17-3.17a1.176 1.176 0 011.663 0l3.169 3.17a.425.425 0 11-.602.6L8.23 2.952a.326.326 0 00-.459 0l-3.17 3.172a.426.426 0 01-.301.124z"></path>
                            </svg></Table.HeaderCell>
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
                                    <Table.Cell name="reasonCode">{post.venusReasonCode}</Table.Cell>
                                    <Table.Cell>{post.venusImfNumber}</Table.Cell>
                                    <Table.Cell>{post.version}</Table.Cell>
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
                    <select className="itemPage" type="search" name="operators111" id="operators111" onChange={itemsPerPageHandler}>
                        <option id="10" selected value="10">10</option>
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