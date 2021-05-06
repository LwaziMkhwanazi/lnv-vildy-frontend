import React,{useEffect,useState,useRef} from 'react'
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
import Notification from "../../components/MuiReusableComponents/Notifications";
import ConfirmDialog  from "../../components/MuiReusableComponents/ConfirmDialog"


const useStyles = makeStyles( theme =>({
    container:{
        marginTop:theme.spacing(3),
        padding:'8px 10px',
    
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
    const postCustomer = customers && customers.customerSuccess
    const deletedCustomer = customers && customers.deletedCustomer
    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
    const editInitialRender = useRef(true);
    const addInitialRender = useRef(true);
    const deletedInitialRender = useRef(true);

    const [confirmDialog,setConfirmDialog] = useState({isOpen:false,title:'',subTitle:''})
   

     // Delete

    useEffect(() => {
        if (deletedInitialRender.current) {
          deletedInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Customer Deleted successfully',
                type:'error'   
            })
        }
      }, [deletedCustomer]);


 //Edit Notification
    useEffect(() => {
        if (editInitialRender.current) {
          editInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Customer edited successfully',
                type:'success'   
            })
        }
      }, [editedCustomer]);

    //add Notification
      useEffect(() => {
        if (addInitialRender.current) {
          addInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Customer added successfully',
                type:'success'   
            })
        }
      }, [postCustomer]);

 
 
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
            <Container  >
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
                                                    onClick = {()=> setConfirmDialog({
                                                                isOpen:true,
                                                                title:'Are you sure you to delete this User ?',
                                                                subTitle:"You can't undo this operation",
                                                                onConfirm: ()=> {deleteCustomer(customer)}
                                                                 })}
                                                >
                                                <DeleteIcon  
                                                    fontSize = "small"/>
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
             width = "md"
            >
             <CustomersForm 
              
             setOpenPopup = {setOpenPopup}
             />
            </PopUp>
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />
        </Container>
        <ConfirmDialog
             confirmDialog = {confirmDialog}
            setConfirmDialog = {setConfirmDialog}
            />
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
