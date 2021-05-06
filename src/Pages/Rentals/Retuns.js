import React,{useEffect} from 'react'
import {useDispatch,useSelector	} from "react-redux"
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles,Container} from '@material-ui/core';
import moments from "moment"
import useTable from '../../components/Table/useTable';
import { Paper, TableBody, TableRow,TableCell,Box} from '@material-ui/core';
import {closedRentals} from "../../redux/closeRental/closedAync"


const useStyles = makeStyles( theme =>({
    container:{
        padding:'5px 10px',
        marginTop:theme.spacing(2)
    
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
  
  
}))

const headCells = [
    {id:'name', label:'Customer Name'},
    {id:'title', label:'Movie Title'},
    {id:'rate', label:'Daily Rate'},
    {id:'dateout', label:'Date Out'},
    {id:'status', label:'Status'},
    {id:'datereturned', label:'Date Returned'},
    {id:'rentaldays', label:'Rental Days'},
    {id:'rentalfee', label:'Rental Fee'},
   
]



function Returns() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const rentals = useSelector(state => state.closedRentals)
    const records = rentals && rentals.closedRentals
   

    const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)
   
    
    useEffect(()=>{
        dispatch(closedRentals())
    },[dispatch])

    if(records === undefined) return <CircularProgress  className = {classes.progress} size = "2rem" />

return(
     <div>
        <Container className = {classes.container}>
        <Paper>
            <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().filter( rental => rental.dateReturned).map( rental =>(
                                        <TableRow  key = {rental._id}>
                                            <TableCell size = "small"  align = "center" >{rental.customer.name}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.movie.title}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{"SZL "+parseFloat(rental.movie.dailyRentalRate).toFixed(2)}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(rental.dateOut).format('DD MMM YYY')}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.dateReturned ? <Box bgcolor="secondary.main" color="primary.contrastText">closed</Box>: <Box bgcolor="primary.main" color="primary.contrastText">On rent</Box>}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(rental.dateReturned).format('DD MMM YYY')}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.rentalDays}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{"SZL "+parseFloat(rental.rentalFee).toFixed(2)}</TableCell>
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                 {rentals && rentals.loading? <CircularProgress /> : null}
            </Paper>   
          </Container>
         
        </div>
)
   
}

export default Returns