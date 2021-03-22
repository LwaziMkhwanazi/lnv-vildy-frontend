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
        margin: '30px auto',
        padding:'20px 30px',
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
    {id:'id', label:'Customer Id'},
    {id:'name', label:'First Name'},
    {id:'phone', label:'Phone Number'},
]
 
function CustomerPage({customers,getCustomers}) {
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
const {TblContainer,TblHeader} = useTable(headCells)

useEffect(()=>{
    getCustomers()
},[getCustomers])

    return (
        <div>
            <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />} 
            title = "Customer Page" 
            subtitle = "Add and Delete Customer Details" />
            <Paper className = {classes.paper} >
                    <Grid container  justify = "flex-end">
                    <Button startIcon = {<AddIcon/>} className = {classes.button} 
                    variant = "outlined" size = "medium" onClick = {()=> setOpenPopup(true)} >Add New</Button>
                    </Grid>
                  <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             customers && customers.customers && customers.customers.map( customer =>(
                                        <TableRow key = {customer._id}>
                                            <TableCell>{customer._id}</TableCell>
                                            <TableCell>{customer.name}</TableCell>
                                            <TableCell>{customer.phone}</TableCell>
                                        
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 
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
