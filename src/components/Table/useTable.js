import { makeStyles, Table, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles( theme => ({
    table:{
        
            '& thead th':{
                fontWeight: '600',
                color: '#fff',
                backgroundColor: theme.palette.primary.light
            },
            '& tbody td':{
                fontWeight:'300'
            },
            '& tbody tr:hover':{
                backgroundColor:'#fffbf2',
                cursor: 'pointer'
            }
    }
}))
function useTable(headCells) {
    const classes = useStyles()
    const TblContainer = props =>(
        <Table className = {classes.table} >
            {props.children}
        </Table>
    )

    const TblHeader = props =>{

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map( headCell => ( <TableCell key = {headCell.id}>
                        {headCell.label}
                    </TableCell>
                    ))
                    }
                </TableRow>
            </TableHead>
        )

    }
    return {
        TblContainer,
        TblHeader
    }
}

export default useTable
