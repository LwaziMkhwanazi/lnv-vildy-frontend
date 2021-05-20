import { makeStyles, Table, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React, { useState } from 'react'
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


function useTable(records,headCells) {

    
    const classes = useStyles()
    const TblContainer = props =>(
        <Table className = {classes.table} >
            {props.children}
        </Table>
    )

const pages = [5,10,20]
const [page,setPage] = useState(0)
const [rowsPerPage,setRowsPerPage] = useState(pages[page])
 
const handleChange = (event,newPage) =>{
        setPage(newPage)
}
const handleRowsPerPageChange = (e) =>{
    setRowsPerPage(parseInt(e.target.value,10))
    setPage(0)
}
const TblPagination = () => {
    return <TablePagination
        component = "div"
        page = {page}
        rowsPerPage = {rowsPerPage}
        rowsPerPageOptions = {pages}
       count = {records.length}
       onChangePage = {handleChange}
       onChangeRowsPerPage = {handleRowsPerPageChange}
    />
}


    const TblHeader = props =>{

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map( headCell => ( <TableCell size = "small" align = "center" key = {headCell.id}>
                        {headCell.label}
                    </TableCell>
                    ))
                    }
                </TableRow>
            </TableHead>
        )

    }

    const recordsAfterPagingAndSorting = () =>{
        return records.slice(page*rowsPerPage,(page+1)*rowsPerPage)
    }

    return {
        TblContainer,
        TblHeader,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}

export default useTable
