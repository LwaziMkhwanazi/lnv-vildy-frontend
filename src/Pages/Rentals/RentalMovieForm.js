import React from 'react'
import { makeStyles,Container, Grid, Paper, Button} from '@material-ui/core'
import {Form,Formik} from "formik"
import FormikControl from '../../components/Form/FormikControl'
import {postRental} from "../../redux/rentals/rentalAsyncActions"
import {useDispatch} from "react-redux"



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
        color: theme.palette.common.white,
        margin:theme.spacing(2),
       
    },
    form:{
        '& .MuiFormControl-root':{
            width:'95%',
            margin: theme.spacing(1)
        } 
     },
  
}))


const initialValues = {
    title:'',
    genre:'',
    dailyRentalRate:'',
    numberInStock:'',
    name:'',
    phone:''
}




function RentalMovieForm({movieRental,setOpenPopup}) {
    console.log(movieRental)
    const classes = useStyles()
    const dispatch = useDispatch()
   

    const handleSubmit = () =>{
        dispatch(postRental(movieRental))
        setOpenPopup(false)
      
    }

    return (
         <Container className = {classes.container} >
           
                <Formik
                    initialValues = { movieRental || initialValues}
                    enableReinitialize
                    onSubmit = {handleSubmit}
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
                                              
                                                 <Button className = {classes.button} type = "submit"  color = "primary" variant = "contained">Create Rental</Button>
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