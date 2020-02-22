import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from './Rows/NormalRow'
import CollapseRow from './Rows/CollapsibleRow'

const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
});

function DataGrid({rows, chartTitle}) {
	const classes = useStyles();
	const [collapsedRow, toggleCollapsedRow] = useState(null)
    return (
        <TableContainer component={Paper}>
      		<Table className={classes.table} aria-label="caption table">
        		<caption>Genes associated with lung carcinoma</caption>
				<TableHead>
					<TableRow data-testid={'title-tr'}>
						<TableCell></TableCell>
						<TableCell align="left">Symbol</TableCell>
						<TableCell align="left">Gene ID</TableCell>
						<TableCell align="left">Gene Name</TableCell>
						<TableCell align="left">Overall Association Score</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => [
						<Row key={`nr-${index}`} row={row} index={index} collapsedRow={collapsedRow} toggleCollapsedRow={toggleCollapsedRow}/>,
						<CollapseRow key={`cr-${index}`} chartTitle={chartTitle} row={row} index={index} collapsedRow={collapsedRow}/>
					])}
					</TableBody>
      	</Table>
    </TableContainer>
    )
}

export default DataGrid
