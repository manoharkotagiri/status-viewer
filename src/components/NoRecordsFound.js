import React from 'react'
import "../resultsGrid.css"
import {Table} from "semantic-ui-react";

function NoRecordsFound() {
    return (
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
                        <Table.Row >
                            <Table.Cell colSpan="99">No Records Found</Table.Cell>
                        </Table.Row>
            </Table.Body>
        </Table>
    )
}
export default NoRecordsFound