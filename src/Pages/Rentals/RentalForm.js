import React,{useState} from 'react'
import { makeStyles,Container, Grid, Paper} from '@material-ui/core'
import {Form,Formik} from "formik"
import FormikControl from '../../components/Form/FormikControl'
import {getSingleCustomer} from "../../redux/customers/customerAsyncActions"
import {useDispatch,useSelector} from "react-redux"
import ActionButton from "../../components/MuiReusableComponents/ActionButton"
import SearchIcon from '@material-ui/icons/Search';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import InputAdornment from '@material-ui/core/InputAdornment';
import  MoviesTable from "./MoviesTables";
import RentalMovieForm from "./RentalMovieForm";
import PopUp from "../../components/MuiReusableComponents/PopUp"

import * as Yup from "yup"

const useStyles = makeStyles( theme =>({
    paper:{
        padding:theme.spacing(2),
        marginTop: theme.spacing(1.5)
    },
    button:{
        backgroundColor:theme.palette.primary.main,
        textTransform:"none",
        color: theme.palette.common.white
    }
   
}))


const initialValues = {
    _id:'',
    name:'',
    phone:'',
    isGold:''
}

let cust = {
    _id:'',
    name:'',
    phone:'',
    isGold:''
}


function RentalForm() {
    
    const [openPopup,setOpenPopup] = useState(false)
    const dispatch = useDispatch()
    const customer = useSelector(state => state.customers)
    cust = customer && customer.singleCustomer
   
    const [movieRental,setMovieRental] = useState(null)

   const handleClear = (data) =>{
       data._id = null
       data.name = null
       data.phone = null
       data.isGold = null
   }

    const classes = useStyles()

    const handleSubmit = (values) =>{
       dispatch(getSingleCustomer(values))
   
    }
    const handleClick = (movie) =>{
        let rental = {
            ...cust,
            ...movie
        }
       console.log(rental)
       setMovieRental(rental)
        setOpenPopup(true)
    
}
    return (
         <Container className = {classes.container} >
           
                <Formik
                    initialValues = {cust || initialValues}
                    onSubmit = {handleSubmit}
                    enableReinitialize
                   
                >
                 {
                     (formik)=>{
                        return  <Form>
                       
                        <Paper className = {classes.paper}>
                                <Grid container>
                                   
                                        <Grid container spacing = {2} >
                                            <Grid item sm>
                                                 <FormikControl
                                                    control = "MuiInput"
                                                    name = "phone"
                                                    label = "Phone number"
                                                    fullWidth
                                                                InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <SearchIcon/>
                                        </InputAdornment>,
                                    }}
                                                    
                                                 />
                                            </Grid>
                                            <Grid item sm>
                                                    <FormikControl
                                                        control = "MuiInput"
                                                        name = "name"
                                                        fullWidth
                                                        shrink = "true"
                                                        InputProps={{
                                                         readOnly: true,
                                                         }}
                                                    />
                                            </Grid>
                                            <Grid item>
                                                    <FormikControl
                                                        control = "MuiInput"
                                                        name = "isGold"
                                                        fullWidth
                                                        InputProps={{
                                                        readOnly: true, 
                                                        shrink : "true"
                                                             }}
                                                    />
                                            </Grid>
                                            <Grid item>
                                            <ActionButton variant = "outlined"  type = "submit" >
                                                <SearchIcon color = "primary"/>
                                                </ActionButton>
                                                <ActionButton variant = "outlined" onClick = {()=>handleClear(formik.values)} >
                                                <ClearAllIcon color = "primary"/>
                                                </ActionButton>
                                            </Grid>
                                        </Grid>
                                   
                                     </Grid>
                                </Paper> 

                         
                        </Form>
                     }
                 }
                </Formik>
                <MoviesTable setOpenPopup = {setOpenPopup} handleClick = {handleClick} />
                    <PopUp
                    title = "Rental Form"
                    openPopup = {openPopup}
                    setOpenPopup = {setOpenPopup}
                    width = "md"
                    >
                    <RentalMovieForm 
                        movieRental = {movieRental}
                        setOpenPopup = {setOpenPopup}
                    />
            </PopUp>
        </Container>
    )
}

export default RentalForm
