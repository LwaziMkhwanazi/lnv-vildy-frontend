import React from 'react'
import {Form,Formik} from "formik"
import {Grid,makeStyles,Button,Paper,Avatar} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useDispatch} from "react-redux"
import {postLoginDetails} from "../../redux/auth/authAyncAction"
import {useHistory} from "react-router-dom"


import * as Yup from "yup"

const useStyles = makeStyles( theme =>({
    grid:{
        maxWidth:'380px',
        margin: 'auto'
        
    },
    paper:{
        padding: '35px 24px',
       
    },
    avatr:{
        backgroundColor:theme.palette.primary.main,
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    form:{
        padding:theme.spacing(3),
        '& .MuiFormControl-root':{
            width:'90%',
            margin: theme.spacing(1)
        } 
     },
     button:{
         maxWidth:'90%',
         margin: '20px 0'
     }
  
}))


function HomepageForm() {
    const history = useHistory()
    const dispatch = useDispatch()

    let initialValues = {
        email:'',
        password:""
      
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
        
    })

   const onSubmit = values =>{
    dispatch(postLoginDetails(values,history))
        console.log(values)
      
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
                        return <Form className = {classes.form} >
                               
                       
                                    <Grid className = {classes.grid} 
                                    container 
                                    direction = "column" 
                                    justify = "center"
                                    alignItems = "center"
                                    >
                                   
                                    <Paper elevation = {6} className = {classes.paper}>
                                         <Grid align = "center">
                                         <Avatar className = {classes.avatr}>
                                              <LockOutlinedIcon/>
                                          </Avatar>
                                          <h2>Sign In</h2>
                                         </Grid>
                                            <FormikControl
                                                control = "MuiInput"
                                                name = "email"
                                                label = "Email"
                                                variant = "standard"
                                                placeholder = "Enter your email address"
                                                fullWidth
                                            />

                                            <FormikControl
                                                control = "MuiInput"
                                                name = "password"
                                                label = "Password"
                                                variant = "standard"
                                                placeholder = "Enter your password"
                                                type="password"
                                                fullWidth

                                            />
                                        
                                            
                                        <div>
                                        
                                                <Button className = {classes.button} fullWidth 
                                                color = "primary" type = "submit" variant = "contained" >Sign In</Button>
                                            </div>
                                        
                                    
                                    
                                        </Paper>
                                    </Grid>
                                   
                        </Form>
                    } 
                    }
                </Formik>
        
    )
    
}

export default HomepageForm
