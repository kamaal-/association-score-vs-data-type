import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Collapse from "@material-ui/core/Collapse";
import Tabs from '../ChartContainer'

function CollapsibleRow({row, index, collapsedRow, chartTitle}) {
    return (
        <TableRow data-testid={'collapsible-tr'} key={row.calories + 'name-q'}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                <Collapse
                    in={collapsedRow === index}
                    timeout="auto"
                    unmountOnExit
                >
                    <Tabs chartTitle={chartTitle} row={row}/>	
                </Collapse>
            </TableCell>
	    </TableRow>
    )
}

export default CollapsibleRow
