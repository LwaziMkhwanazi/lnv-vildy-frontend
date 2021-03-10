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

function CustomerForm() {
    const genderItems = [
        {key:'Male',value:'Male'},
        {key: 'Female', value: 'Female'}
    ]
    const skills = [
        {key:'React',value:'React'},
        {key: 'Angular', value: 'Angular'}
    ]
    const backend = [
        {key:'Nodejs',value:'Nodejs'},
        {key: 'Mongodb', value: 'Mongodb'}
    ]

    const initialValues = {
        firstname:'',
        gender:'',
        skills: '',
        mobile:'',
        backend:[''],
        registrationDate: new Date()
    }

    const handleSubmit = values => {
        console.log('Value', values)
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().min(5).max(50).required('First name is required'),
        skills: Yup.string().required('Skill is requred'),
        gender: Yup.string().required('Gender is required'),
        mobile: Yup.number('Invalid Phone number').required('Phone number is required'),
        backend: Yup.array().required('Backend is required')
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
                                    control = "MuiInput"
                                    name = "firstname"
                                    label = " Name"
                                    autoFocus = {true}
                                />
                              
                                <FormikControl
                                    control = "MuiInput"
                                    name ="mobile"
                                    label = "Mobile number"
                                />
                                <FormikControl
                                    control = "MuiRadio"
                                    label = "Gender"
                                    name = "gender"
                                    error = {formik.errors.gender}
                                    touched = {formik.touched.gender}
                                    options = {genderItems}
                               />
                            </Grid>
                            <Grid item xs = {6}>
                          
                                <FormikControl
                                    control = "MuiSelect"
                                    name = "skills"
                                    label = "Skills"
                                    error = {formik.errors.skills}
                                    touched = {formik.touched.skills}
                                    options = {skills}
                                />
                                <FormikControl
                                    control = "MuiDatePicker"
                                    name = "registrationDate"
                                    label = "Registration Date"
                                   
                                />
                                <FormikControl
                                    control = "MuiCheckbox"
                                    name = "backend"
                                    label = "Backend"
                                    error = {formik.errors.backend}
                                    options = {backend}
                                />
                               
                               <div className = {classes.buttonDiv} >
                             <Button className = {classes.button} disabled = {!formik.isValid}  style ={{marginRight:'8px'}} variant = "contained" color = "primary" type = "submit" >Submit</Button>
                            <Button className = {classes.resert} variant = "contained" type = "reset" >Reset</Button>
                            </div>
                            </Grid>
                            
                        </Grid>
                        
                  </Form>
              }  
            }
        </Formik>
    )
}

export default CustomerForm
