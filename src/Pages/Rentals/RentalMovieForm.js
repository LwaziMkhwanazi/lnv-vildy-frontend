import React,{useState} from 'react'
import { makeStyles,Container, Grid, Paper, Button,InputProps} from '@material-ui/core'
import {Form,Formik} from "formik"
import FormikControl from '../../components/Form/FormikControl'
import ActionButton from "../../components/MuiReusableComponents/ActionButton"
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles( theme =>({
    container:{
        padding:'15px 30px',
    
    },
    paper:{
        padding:theme.spacing(2)
    },
    button:{
        backgroundColor:theme.palette.primary.main,
        textTransform:"none",
        color: theme.palette.common.white
    },
    form:{
        '& .MuiFormControl-root':{
            width:'95%',
            margin: theme.spacing(1)
        } 
     },
   button:{
       margin:theme.spacing(2),
       textTransform:'none'
   }
}))


const initialValues = {
    title:'',
    genre:'',
    dailyRentalRate:'',
    numberInStock:'',
    name:'',
    genre:'',
    phone:''
}




function RentalMovieForm({movieRental}) {

    const classes = useStyles()

    
    return (
         <Container className = {classes.container} >
           
                <Formik
                    initialValues = { movieRental || initialValues}
                    enableReinitialize
                >
                 {
                     (formik)=>{
                        return  <Form className = {classes.form}>
                       
                        <Paper className = {classes.paper}>
                                <Grid container>
                                   
                                        <Grid container spacing = {2} >
                                            <Grid item sm = {6}>
                                          

                                                 <FormikControl
                                                    control = "MuiInput"
                                                    name = "title"
                                                    label = "Title"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />
                                                 <FormikControl
                                                    control = "MuiInput"
                                                    name = "genre"
                                                    label = "Genre"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />

                                             <FormikControl
                                                    control = "MuiInput"
                                                    name = "numberInStock"
                                                    label = "Number In Stock"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />
                                                 <FormikControl
                                                    control = "MuiInput"
                                                    name = "dailyRentalRate"
                                                    label = "Daily Rental Rate"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />
                                            </Grid>
                                           
                                            <Grid item sm = {6}>
                                            <FormikControl
                                                    control = "MuiInput"
                                                    name = "name"
                                                    label = "Name"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />

                                            <FormikControl
                                                    control = "MuiInput"
                                                    name = "phone"
                                                    label = "Phone"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />

                                                 <FormikControl
                                                    control = "MuiInput"
                                                    name = "isGold"
                                                    label = "isGold"
                                                    fullWidth
                                                    InputProps={{
                                                         readOnly: true,
                                                         }}
                                                 />
                                              
                                                 <Button className = {classes.button} color = "primary" variant = "contained">Create Rental</Button>
                                            </Grid>
                                            
                                        </Grid>
                                   
                                     </Grid>
                                </Paper> 

                         
                        </Form>
                     }
                 }
                </Formik>
              
        </Container>
    )
}

export default RentalMovieForm