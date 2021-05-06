import React,{useEffect} from 'react'
import useTable from '../../components/Table/useTable';
import {fetchRentals} from "../../redux/rentals/rentalAsyncActions"
import {useDispatch,useSelector	} from "react-redux"
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles, Paper, TableBody, TableRow,TableCell,Container} from '@material-ui/core';
import moments from "moment"
import Box from '@material-ui/core/Box';
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
    {id:'dateRetuned', label:'Date Returned'},
    {id:'rentalDays', label:'Rental Days'},
    {id:'rentalFee', label:'Rental Fee'},
   
]


function SingleReturns() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const rental = useSelector(state => state.closeRental)
    const completedRental = rental && rental.rental
      
    const {TblContainer,TblHeader} = useTable(headCells)
 
    console.log(completedRental)

    useEffect(()=>{
        dispatch(fetchRentals())
    },[dispatch])

  


    if(completedRental === undefined) return <CircularProgress className = {classes.progress} size = "2rem"/>
    if(completedRental === undefined) return <CircularProgress className = {classes.progress} size = "2rem"/>
    return (
        <div>
        <Container className = {classes.container}>
          <Paper>
            <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                              
                                         <TableRow  key = {completedRental._id}>
                                            <TableCell size = "small"  align = "center" >{completedRental.customer.name}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{completedRental.movie.title}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{"SZL "+completedRental.movie.dailyRentalRate}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(completedRental.dateOut).format('DD MMM YYY')}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{completedRental.dateReturned ? <Box bgcolor="secondary.main" color="primary.contrastText">closed</Box>: <Box bgcolor="primary.main" color="primary.contrastText">On rent</Box>}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(completedRental.dateReturned).format('DD MMM YYY')}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{completedRental.rentalDays}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{completedRental.rentalFee}</TableCell>
                                        </TableRow>
                            
                            }
                        </TableBody>
                  </TblContainer>
                
                 {rental && rental.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            </Paper>   
         
          </Container>
         
        </div>
    )
}

export default SingleReturns