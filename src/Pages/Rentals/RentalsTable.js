import React,{useEffect} from 'react'
import useTable from '../../components/Table/useTable';
import {fetchRentals} from "../../redux/rentals/rentalAsyncActions"
import {useDispatch,useSelector	} from "react-redux"
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles, Paper, TableBody, TableRow,TableCell,Container} from '@material-ui/core';
import moments from "moment"
const useStyles = makeStyles( theme =>({
    container:{
        padding:'15px 30px',
    
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
  
  
}))
const headCells = [
    {id:'name', label:'Customer Name'},
    {id:'phone', label:'Phone Number'},
    {id:'title', label:'Movie Title'},
    {id:'rate', label:'Daily Rate'},
    {id:'dateout', label:'Date Out'},
   
]


function RentalsTable() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const rentals = useSelector(state => state.rentals)
    const records = rentals && rentals.rentals
    const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)

    
    useEffect(()=>{
        dispatch(fetchRentals())
    },[dispatch])
    return (
        <div>
        <Container className = {classes.container}>
          <Paper>
            <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( rental =>(
                                        <TableRow onClick = {()=>console.log('Hi')} key = {rental._id}>
                                            <TableCell size = "small"  align = "center" >{rental.customer.name}</TableCell>
                                            <TableCell  size = "small" align = "center" >{rental.customer.phone}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.movie.title}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{"SZL "+rental.movie.dailyRentalRate}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(rental.dateOut).calendar()}</TableCell>
                                            
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                 {rentals && rentals.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            </Paper>   
         
          </Container>
        </div>
    )
}

export default RentalsTable
