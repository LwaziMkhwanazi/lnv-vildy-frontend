import React from 'react'
import {Form,Formik} from "formik"
import {Grid,makeStyles,Button} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';
import {postUser} from "../../redux/users/userAysncAction"
import {useDispatch} from "react-redux"


import * as Yup from "yup"

const useStyles = makeStyles( theme =>({
    form:{
        margin:theme.spacing(3),
        '& .MuiFormControl-root':{
            width:'90%',
            margin: theme.spacing(1)
        } 
     },
     buttons:{
         margin: theme.spacing(1),
         width:'43%'
     },
    isAdim:{
        paddingLeft:theme.spacing(1)
    }
  
}))


function UserForm({setOpenPopup}) {

const dispatch = useDispatch()

    let initialValues = {
        name: '',
        email:'',
        password:"",
        isAdmin: false      
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is Required').min(5).max(50),
        email: Yup.string().email('Please enter a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
        
    })

   const onSubmit = values =>{
        dispatch(postUser(values))
        console.log(values)
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
                            <Grid container className = {classes.grid}>
                                <Grid item xs >
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "name"
                                        label = "Name"
                                        fullWidth
                                    />
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "email"
                                        label = "Email"
                                        fullWidth
                                    />

                                    <FormikControl
                                        control = "MuiInput"
                                        name = "password"
                                        label = "Password"
                                        type="password"
                                        fullWidth

                                    />
                                   <div className = {classes.isAdim}>
                                   <FormikControl
                                        control = "MuiTickBox"
                                        name = "isAdmin"
                                        label = "isAdmin"
                                      
                                    />
                                    </div> 
                                    
                                   <div>
                                    <Button className = {classes.buttons} style = {{marginRight:'8px',marginLeft:'8px'}}
                                     variant = "contained" type = "reset">Reset</Button>
                                        <Button className = {classes.buttons} disabled = {!formik.isValid} 
                                        color = "primary" type = "submit" variant = "contained" >Add User</Button>
                                     </div>
                                
                                </Grid>
                            
                               
                            </Grid>
                   </Form>
               } 
            }
        </Formik>
    )
}

export default UserForm
