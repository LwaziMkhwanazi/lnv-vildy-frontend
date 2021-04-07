import React,{useEffect,useState} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import AddIcon from '@material-ui/icons/Add';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {makeStyles, Paper, TableBody, TableRow,TableCell, Button,Grid,Container} from '@material-ui/core';
import {connect} from "react-redux"
import { fetchCustomer,deleteCustomer} from '../../redux/customers/customerAsyncActions';
import useTable from '../../components/Table/useTable';
import PopUp from '../../components/MuiReusableComponents/PopUp';
import CustomersForm from './CustomersForm';
import ActionButton from '../../components/MuiReusableComponents/ActionButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import SearchEditDeleteForm from './SearchEditDeleteForm';


const useStyles = makeStyles( theme =>({
    container:{
        marginTop:theme.spacing(3),
        padding:'15px 30px',
    
    },
    button:{
        backgroundColor:'#fff' ,
        color: theme.palette.primary.main,
        textTransform:'none'
        
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
    {id:'isGold', label:'Is Gold'},
    {id:'actions', label:'Actions'},
]

 
function CustomerPage({customers,getCustomers,deleteCustomer}) {
   const records =  customers && customers.customers
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
    const [recordForEdit,setRecordForEdit] = useState(null)
    const editedCustomer = customers && customers.editCustomer
    const deletedCustomer = customers && customers.deletedCustomer
 
const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)

useEffect(()=>{
    getCustomers()
},[getCustomers,openPopup,editedCustomer,deletedCustomer])

const editCustomer = (customer) =>{
        setRecordForEdit(customer)
       
}

    return (
           <>
            <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />} 
            title = "Customer Page" 
            subtitle = "Add Delete Edit and Display Customers Details" />
            <Container>
            <Paper>
                    <Grid container className = {classes.container}  >
                       <Grid item xs = {10}>
                        <SearchEditDeleteForm   recordForEdit = {recordForEdit} setRecordForEdit = {setRecordForEdit} />
                       </Grid>
                        <Grid item container justify = "flex-end" alignContent = "center" xs = {2}>
                        <Button startIcon = {<AddIcon/>} className = {classes.button} 
                            variant = "outlined" size = "medium" onClick = {()=> setOpenPopup(true)} >Add New</Button>
                        </Grid>
                    </Grid>
                  <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( customer =>(
                                        <TableRow key = {customer._id}>
                                            <TableCell size = "small"  align = "center" >{customer.name}</TableCell>
                                            <TableCell  size = "small" align = "center" >{customer.phone}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{customer.isGold}</TableCell>
                                            <TableCell  size = "small" align = "center">
                                                <ActionButton
                                                    color = "primary"
                                                    onClick = {()=> editCustomer(customer)}
                                                >
                                                <EditOutlinedIcon fontSize = "small" />
                                                </ActionButton>
                                                <ActionButton
                                                    color = "secondary"
                                                >
                                                <DeleteIcon onClick = {()=> deleteCustomer(customer)} fontSize = "small"/>
                                                </ActionButton>
                                                   
                                            </TableCell>
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                 {customers && customers.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            </Paper>
            <PopUp
            title = "Customer Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
            >
             <CustomersForm 
              
             setOpenPopup = {setOpenPopup}
             />
            </PopUp>
           
        </Container>
       </> 
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
        deleteCustomer: (customer) => dispatch(deleteCustomer(customer))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerPage)
