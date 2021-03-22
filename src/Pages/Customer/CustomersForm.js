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
        {key:'Yes',value:'yes'},
      
    ]

    const initialValues = {
        name: '',
        phone:'',
        isGold: []
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is Required').min(5).max(50),
        phone: Yup.number('Invalid Nmber').required('Phone number is requires'),
        isGold: Yup.array()
    })

    const handleSubmit = values => {
        console.log(values)
    }

    const classes = useStyles()
    return (
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {handleSubmit}
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
                                        control = "MuiCheckbox"
                                        name = "isGold"
                                        label = "isGold"
                                        options = {isGold}
                                    />
                                </Grid>
                                <Grid item xs = {6}>
                                <FormikControl
                                        control = "MuiInput"
                                        name = "phone"
                                        label = "Phone Number"

                                    />
                                  
                                    <Button style = {{marginLeft:'5px'}} variant = "contained" type = "reset" >Reset</Button>
                                    <Button onClick = {handleSubmit} className = {classes.button}   
                                    style ={{marginLeft:'8px'}} variant = "contained"
                                     color = "primary" type = "submit" disabled = {!formik.isValid} >Submit</Button>
                                  
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
