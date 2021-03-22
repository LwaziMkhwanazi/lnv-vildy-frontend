import React,{useEffect,useState} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import AddIcon from '@material-ui/icons/Add';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {makeStyles, Paper, TableBody, TableRow,TableCell, Button,Grid} from '@material-ui/core';
import {connect} from "react-redux"
import { fetchCustomer} from '../../redux/customers/customerAsyncActions';
import useTable from '../../components/Table/useTable';
import PopUp from '../../components/MuiReusableComponents/PopUp';

import CustomersForm from './CustomersForm';

const useStyles = makeStyles( theme =>({
    paper:{
        margin: '20px auto',
        padding:'15px 30px',
        maxWidth:'1100px'
    },
    button:{
        backgroundColor:'#fff' ,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        textTransform:'none'
        
    }
}))

const headCells = [
    {id:'name', label:'Customer Name'},
    {id:'phone', label:'Phone Number'},
    {id:'isGold', label:'Is Gold'},
]
 
function CustomerPage({customers,getCustomers}) {
   const records =  customers && customers.customers
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)

useEffect(()=>{
    getCustomers()
},[getCustomers,openPopup])

    return (
        <div>
            <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />} 
            title = "Customer Page" 
            subtitle = "Add Delete Edit and Display Customers Details" />
            <Paper className = {classes.paper} >
                    <Grid container  justify = "flex-end">
                    <Button startIcon = {<AddIcon/>} className = {classes.button} 
                    variant = "outlined" size = "medium" onClick = {()=> setOpenPopup(true)} >Add New</Button>
                    </Grid>
                  <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( customer =>(
                                        <TableRow key = {customer._id}>
                                            <TableCell>{customer.name}</TableCell>
                                            <TableCell>{customer.phone}</TableCell>
                                            <TableCell>{customer.isGold}</TableCell>
                                        
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
            </Paper>
            <PopUp
            title = "Customer Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
            >
             <CustomersForm setOpenPopup = {setOpenPopup}/>
            </PopUp>
        </div>
    )
}

const mapStateToProps = state => {
        return{
          
            customers: state.customers
        }
}
const mapDispatchToProps = dispatch => {
    return{
        getCustomers: ()=> dispatch(fetchCustomer()),
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerPage)
