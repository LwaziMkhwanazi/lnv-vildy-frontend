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
        lastname:'',
        gender:'',
        skills: '',
        backend:[],
        registrationDate: new Date()
    }

    const handleSubmit = values => {
        console.log('Value', values)
    }

    const validationSchema = Yup.object({
        firstname:Yup.string().required('First name is required'),
        lastname:Yup.string().required('Last name is required'),
        gender: Yup.string().required('Gender required'),
        skills: Yup.string().required('Skill is required'),
        backend:[],
        registrationDate: new Date()
    })

    const classes = useStyles()
    return (
        <Formik
            initialValues = {initialValues}
            onSubmit = {handleSubmit}
            validationSchema = {validationSchema}
        >
            {
              (formik) => {
                  return <Form className = {classes.form} autoComplete = "off" >
                        <Grid container>
                            <Grid item xs = {6}>
                                <FormikControl
                                    control = "MuiInput"
                                    name = "firstname"
                                    label = "First Name"
                                />
                                <FormikControl
                                    control = "MuiInput"
                                    name = "lastname"
                                    label = "Last Name"
                                />
                               
                                <FormikControl
                                    control = "MuiRadio"
                                    label = "Gender"
                                    name = "gender"
                                    options = {genderItems}
                               />
                            </Grid>
                            <Grid item xs = {6}>
                          
                                <FormikControl
                                    control = "MuiSelect"
                                    name = "skills"
                                    label = "Skills"
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
                                    options = {backend}
                                />
                               
                               <div >
                             <Button className = {classes.button} style ={{marginRight:'8px'}} variant = "contained" color = "primary" type = "submit" >Submit</Button>
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
