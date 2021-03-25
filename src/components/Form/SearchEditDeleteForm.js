
import React,{useEffect} from 'react'
import {Grid, makeStyles,} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import ActionButton from '../MuiReusableComponents/ActionButton';
import {Formik,Form} from "formik";
import * as Yup from "yup";
import SaveIcon from '@material-ui/icons/Save';
import FormikControl from './FormikControl';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import DeleteIcon from '@material-ui/icons/Delete';
import {editCustomer} from "../../redux/customers/customerAsyncActions"
import {connect} from "react-redux"
const useStyles = makeStyles( theme => ({
    searchButton:{
        backgroundColor:theme.palette.primary.main ,
        color: theme.palette.common.white,
    
        textTransform:'none'
    },
    form:{
        '& .MuiFormControl-root':{
                width:'90%',
            marginBottom:theme.spacing(1.5)

        }  
    }
}))

const isGoldOptions = [
        {value: 'Yes',  label:'Yes',key: 'Yes' },
          {value: 'No',label: 'No',key:'No'    },
]

const initialVales = {
    name:'',
    phone:'',
    isGold:''
}
function SearchEditDeleteForm({recordForEdit,setRecordForEdit,customers, editCustomer}) {
    const classes = useStyles()
    const editedCustomer = customers && customers.editCustomer
 

   const validationSchema = Yup.object({
        name: Yup.string().min(5).max(50).required(),
        phone: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(8, 'Must be exactly 8 digits').max(8, 'Must be exactly 8 digits').required(),
        isGold:Yup.string().required('Is Gold is Required')
   })

   const handleSubmit = values =>{
        editCustomer(values)
   }

   useEffect(()=>{
        setRecordForEdit(null)
   },[setRecordForEdit,editedCustomer])


    return (
       <Formik
        initialValues = {  recordForEdit|| initialVales}
        validationSchema = {validationSchema}
        enableReinitialize
        onSubmit = {handleSubmit}
       >
           {
               (formik) => {
                   return  <Form className = {classes.form}>
            <Grid container direction = "row" justify = "center" alignItems = "center" spacing = {1} >
            <Grid item xs = {3}>
                 <FormikControl
                    control = "MuiInput"
                        name = "phone"
                     fullWidth
                    variant = "standard"
                    label = "Enter phone number"
                    InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>,
                        }}
                    
                 />
                
                </Grid>
                <Grid item xs = {3}>
                 <FormikControl
                        control = "MuiInput"
                        name = "name"
                         fullWidth
                    variant = "standard"
                    label = "Name"
                   
                    />
                </Grid>
                <Grid item xs = {3}>
                 <FormikControl
                    control = "MuiSelect"
                    name = "isGold"
                     fullWidth
                    variant = "standard"
                    label = "Is Gold"
                    error = {formik.errors.isGold}
                    touched = {formik.touched.isGold}
                    options = {isGoldOptions}
                    />
                </Grid>
                <Grid  item  >
                  <Grid container>
                  <Grid item>
                     <ActionButton variant = "outlined" type = "reset" onClick = {()=>setRecordForEdit(null)} >
                         <ClearAllIcon color = "primary" />
                         </ActionButton>
                    </Grid>
                      
                  <Grid item>
                    <ActionButton  color = "secondary">
                        <SearchIcon/>
                        </ActionButton>
                  </Grid>
                 
                    <Grid item>
                     <ActionButton color = "primary" type = "submit" >
                         <SaveIcon/>
                         </ActionButton>
                    </Grid>
                    <Grid item>
                     <ActionButton color = "secondary" type = "submit" >
                         <DeleteIcon/>
                         </ActionButton>
                    </Grid>

                      </Grid>  
                 
                </Grid>
            </Grid>
        </Form>
               }
           }
       </Formik>
    )
}

const mapStateToProps = state =>{
    return {
        customers: state.customers
    }
}

const mapDispatchedToProps = dispatch =>{
    return{
        editCustomer: (customer) => dispatch(editCustomer(customer))
    }
}
export default connect(mapStateToProps,mapDispatchedToProps)(SearchEditDeleteForm)
