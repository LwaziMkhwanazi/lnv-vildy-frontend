import React from 'react'
import {Form,Formik} from "formik";
import { Button, Grid, makeStyles } from '@material-ui/core';
import FormikControl from '../../components/Form/FormikControl';


import * as Yup from "yup";



    const useStyles = makeStyles( theme => ({
        form:{
           '& .MuiFormControl-root':{
               width:'80%',
               margin: theme.spacing(1)
           } 
        },
        button:{
            width:'40%'
        },
        resert:{
            width:'40%'
        },
        buttonDiv:{
            marginTop: theme.spacing(1)
        }
    }))

function CustomerForm({setOpenPopup}) {
   
    
    
    const isGold = [
        {key:'Yes',value:'yes'},
      
    ]

    const initialValues = {
        name:'',
        mobile:'',
        isGold:[''],
      
    }

    const handleSubmit = values => {
        console.log(values)
        setOpenPopup(false)
     
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().min(5).max(50).required('First name is required'),
        mobile: Yup.number('Invalid Phone number').required('Phone number is required'),
        isGold: Yup.string()
    })

    const classes = useStyles()
    return (
        <Formik
            initialValues = {initialValues}
            onSubmit = {handleSubmit}
            validationSchema = {validationSchema}
        >
            {
              formik => {
                  return <Form className = {classes.form} autoComplete = "off" >
                        <Grid container>
                            <Grid item xs = {6}>
                              <FormikControl
                                control = "Muiinput"
                                name = "name"
                                label = "Customer Name"
                              /> 
                              
                            </Grid>
                            <Grid item xs = {6}>
                          
                          

                              
                              
                            </Grid>
                            
                        </Grid>
                         
                            <div >
                             <Button className = {classes.button}  
                              style ={{marginLeft:'8px'}} variant = "contained" 
                              color = "primary" type = "submit" >Submit</Button>
                            <Button className = {classes.resert} variant = "contained" type = "reset" >Reset</Button>
                            </div>
                  </Form>
              }  
            }
        </Formik>
    )
}

export default CustomerForm
