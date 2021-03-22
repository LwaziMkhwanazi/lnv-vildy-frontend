import React from 'react'
import {Form,Formik} from "formik"
import {Grid,makeStyles,Button} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';
import {postCustomer} from "../../redux/customers/customerAsyncActions"
import {connect} from "react-redux"
import * as Yup from "yup"

const useStyles = makeStyles( theme =>({
    form:{
        '& .MuiFormControl-root':{
            width:'90%',
            margin: theme.spacing(1)
        } 
     },
  
}))



function CustomersForm({setOpenPopup,postCustomer}) {

    const isGold = [
        {key:'Yes',value:'Yes'},
        {key:'No',value:'No'}
      
    ]

    const initialValues = {
        name: '',
        phone:'',
        isGold:''
       
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is Required').min(5).max(50),
        phone: Yup.number('Invalid Nmber').required('Phone number is requires'),
        isGold: Yup.string().required('Gold is required')
    })

   const onSubmit = values =>{
     postCustomer(values)
     setOpenPopup(false)
   }

    const classes = useStyles()
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            {
               (formik) =>{
                   return <Form className = {classes.form}>
                            <Grid container>
                                <Grid item xs = {6}>
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "name"
                                        label = "Name"
                                    />

                                    <FormikControl
                                        control = "MuiRadio"
                                        name = "isGold"
                                        label = "Is Gold"
                                        error = {formik.errors.isGold}
                                        touched = {formik.touched.isGold}
                                        options = {isGold}
                                    />
                                
                                </Grid>
                                <Grid item xs = {6}>
                                <FormikControl
                                        control = "MuiInput"
                                        name = "phone"
                                        label = "Phone Number"

                                    />
                                    <Button style = {{marginRight:'8px',marginLeft:'8px'}} variant = "contained" type = "reset">Reset</Button>
                                        <Button disabled = {!formik.isValid} color = "primary" type = "submit" variant = "contained" >Submit</Button>
                                  
                                </Grid>
                            </Grid>
                   </Form>
               } 
            }
        </Formik>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        postCustomer: (customer)=> dispatch(postCustomer(customer))
    }
}
export default connect(null,mapDispatchToProps)(CustomersForm)
