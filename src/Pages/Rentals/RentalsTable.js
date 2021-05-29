import React,{useEffect,useState} from 'react'
import useTable from '../../components/Table/useTable';
import {fetchRentals} from "../../redux/rentals/rentalAsyncActions"
import {useDispatch,useSelector	} from "react-redux"
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles, Paper, TableBody, TableRow,TableCell,Container} from '@material-ui/core';
import moments from "moment"
import ReturnRentalForm from "./ReturnRentalForm"
import PopUp from "../../components/MuiReusableComponents/PopUp"
import Box from '@material-ui/core/Box';
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
    {id:'status', label:'Status'},
   
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

    const [rentalRecord,setRentalRecord] = useState(null)
    const [openPopup,setOpenPopup] = useState(false)

    const handleClick = (rental) =>{
        const values = {
            customerId:rental.customer._id,
            movieId:rental.movie._id,
            title:rental.movie.title,
            dailyRentalRate:rental.movie.dailyRentalRate.toFixed(2),
            name: rental.customer.name,
            phone:rental.customer.phone,
            isGold:rental.customer.isGold, 
            dateOut:moments(rental.dateOut).calendar()
        }
        setRentalRecord(values)
        setOpenPopup(true)
    }

    if(records === undefined) return <CircularProgress className = {classes.progress} size = "2rem" />
    return (
        <div>
        <Container className = {classes.container}>
          <Paper>
            <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( rental =>(
                                        <TableRow onClick = {()=>handleClick(rental)} key = {rental._id}>
                                            <TableCell size = "small"  align = "center" >{rental.customer.name}</TableCell>
                                            <TableCell  size = "small" align = "center" >{rental.customer.phone}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.movie.title}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{"SZL "+ parseFloat(rental.movie.dailyRentalRate).toFixed(2)}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{moments(rental.dateOut).format('DD MMM YYY')}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{rental.dateReturned ? <Box bgcolor="secondary.main" color="primary.contrastText"> Closed</Box>: <Box bgcolor="primary.main" color="primary.contrastText">On rent</Box>}</TableCell>
                                        </TableRow>
                                ))
                            }
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                 {rentals && rentals.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            </Paper>   
         
          </Container>
          <PopUp
            title = "Close Rental Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
             width = "md"
            >
             <ReturnRentalForm 
                 rentalRecord = {rentalRecord}         
                 setOpenPopup = {setOpenPopup}
             />
            </PopUp>
        </div>
    )
}

export default RentalsTable
