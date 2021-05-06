import React from 'react'
import { makeStyles,Container, Grid, Paper, Button} from '@material-ui/core'
import {Form,Formik} from "formik"
import FormikControl from '../../components/Form/FormikControl'
import {closeRental} from "../../redux/closeRental/closeAsyncAction"
import {useDispatch} from "react-redux"
import {useHistory,useRouteMatch} from "react-router-dom"


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
    dailyRentalRate:'',
    name: '',
    phone:'',
    isGold:'',
    dateOut:'',
    dateReturned:'',
    rentalDays:''
}




function ReturnRentalForm({rentalRecord,setOpenPopup}) {
 
    const history = useHistory()
    const classes = useStyles()
    const {path} = useRouteMatch()
    const dispatch = useDispatch()
    
    const handleSubmit = () =>{
        dispatch(closeRental(rentalRecord))
       setOpenPopup(false)
       history.push(`${path}/closedrental`)
    }
    

    return (
          <Container className = {classes.container} >
           
           <Formik
                initialValues = {rentalRecord || initialValues}
                 enableReinitialize
                 onSubmit ={handleSubmit}
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
                                               name = "dailyRentalRate"
                                               label = "Daily Rental Rate"
                                               fullWidth
                                               InputProps={{
                                                    readOnly: true,
                                                    }}
                                            />
                                            <FormikControl
                                               control = "MuiInput"
                                               name = "dateOut"
                                               label = "Date Out"
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

                                          

                                       
                                         
                                            <Button className = {classes.button} type = "submit"  color = "primary" variant = "contained">Close Rental</Button>
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

export default ReturnRentalForm
