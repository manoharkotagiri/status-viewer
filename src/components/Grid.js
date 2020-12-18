import React, {useState} from 'react';
import {Table} from "semantic-ui-react";

const Grid = (gridData) => {

    console.log(gridData)

    return (
        <div>
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

                    {gridData.gridData.results.map((post) => {
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
        </div>
    );

};

export default Grid;