import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
    table: {
      minWidth: 350,
    },
});

function NormalRow({row, toggleCollapsedRow, index, collapsedRow}) {
    const classes = useStyles();
    return (
        <TableRow 
            data-testid={'actual-tr'}
            key={row.calories + 'name'}>
            <TableCell small={'small'} component="th" scope="row">
            <IconButton
                data-testid={'collapse-btn'}
                onClick={() => {
                    const _index = collapsedRow !== null ? (collapsedRow !== index ? index : null) : index;
                    toggleCollapsedRow(_index )
                }}
            aria-label="delete" className={classes.margin}>
                {collapsedRow === index ? <RemoveIcon fontSize="small"/> : <AddIcon fontSize="small" /> }
            </IconButton>
            </TableCell>
            <TableCell align="left">{row.symbol}</TableCell>
            <TableCell align="left">{row.geneId}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row.overallScore}</TableCell>
        </TableRow>
    )
}

export default NormalRow
