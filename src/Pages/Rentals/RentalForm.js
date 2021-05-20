import React,{useState,useEffect,useRef} from 'react'
import { makeStyles,Container, Grid, Paper, TextField} from '@material-ui/core'
import {getSingleCustomer} from "../../redux/customers/customerAsyncActions"
import {useDispatch,useSelector} from "react-redux"
import ActionButton from "../../components/MuiReusableComponents/ActionButton"
import SearchIcon from '@material-ui/icons/Search';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import InputAdornment from '@material-ui/core/InputAdornment';
import  MoviesTable from "./MoviesTables";
import RentalMovieForm from "./RentalMovieForm";
import PopUp from "../../components/MuiReusableComponents/PopUp"
import Notification from "../../components/MuiReusableComponents/Notifications";
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

function RentalForm() {
    const initialValue = {
        phone:'',
        name:'',
        isGold:''
    }

   
    
    const [openPopup,setOpenPopup] = useState(false)
    const dispatch = useDispatch()
    const created = useSelector(state => state.rentals)
    const customer = useSelector(state => state.customers)
    const rentalCreated = created && created.postedRental
    const cust = customer && customer.singleCustomer
   
    const [movieRental,setMovieRental] = useState(null)
    const [pax,setPax] = useState(initialValue)
    const [errors,setErrors] = useState(false)
    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
    const [helperText,setHelperText] = useState({phone:'',name:'',isGold:''})
    
 
    const numberSchema = Yup.object({
        phone:Yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Must be only digits").min(8, 'Must be exactly 8 digits').max(8, 'Must be exactly 8 digits'),
        name:Yup.string(),
        isGold: Yup.string()
    })
//Handle Search
const handleSearch = async(e) =>{
    e.preventDefault()
    const phoneValidator = await numberSchema.isValid(pax)
    if(!phoneValidator){
        setErrors(true)
        setHelperText({phone:'Invalid Phone number(8 digits only)',name: '',isGold:''})
        return
    }
    console.log(pax)
   dispatch(getSingleCustomer(pax))
} 
    
   const  handleClear = () =>{
       setPax({phone:'',name:'',isGold:''})
       setErrors(false)
       setHelperText({phone:'',name: '',isGold:''})
   }
   
 
   useEffect(()=>{
    setPax({phone:cust.phone,name:cust.name,isGold:cust.isGold})
   },[cust])


  //Create Rental
  const createInitialRender = useRef(true);
  useEffect(() => {
    if (createInitialRender.current) {
         createInitialRender.current = false;
    } else {
        setNotify({
            isOpen:true,
            message:'Rental created successfully',
            type:'success'   
        })
    }
  }, [rentalCreated]);



    const classes = useStyles()

    const handleClick = (movie) =>{
     
        let rental = {
            ...cust,
            title: movie.title,
            genre: movie.genre.name,
            numberInStock: movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate.toFixed(2),
            movieId:movie._id
        }
       console.log(rental)
       setMovieRental(rental)
        setOpenPopup(true)
    
}

const handleInputChange = (e) =>{
   const {value,name} = e.target
    setPax({...pax,[name]:value})
}


    return (
         <Container className = {classes.container} >
                        <Paper className = {classes.paper}>
                                <Grid container>
                                   
                                        <Grid container spacing = {2} >
                                            <Grid item sm>
                                              <TextField 
                                              name = "phone"
                                              error = {errors}
                                              helperText = {helperText.phone}
                                              onChange = {handleInputChange}
                                              inputProps={
					                           { autoFocus: true,
                                                startAdornment: <InputAdornment position="start">
                                                <SearchIcon/>
                                                </InputAdornment>
                                               }
				                                    }
                                               
                                               size = {'small'} 
                                               label = "Customer Phone" 
                                               autoComplete = "off"
                                               value = {pax.phone}
                                               fullWidth 
                                               variant = "outlined"/>
                                            </Grid>

                                            <Grid item sm>
                                            <TextField 
                                            name = "name"
                                            onChange = {handleInputChange}
                                            size = {'small'} 
                                            inputProps={
					                           { readOnly: true}
				                                } label = "Name" 
                                                fullWidth 
                                                value = {pax.name}
                                                variant = "outlined"/>                                                
                                            </Grid>

                                            <Grid item>
                                            <TextField 
                                            name = "isGold"
                                            onChange = {handleInputChange}
                                            size = {'small'}
                                             label = "isGold"
                                             value = {pax.isGold}
                                             inputProps={
					                           { readOnly: true}
				                                    } 
                                                    
                                              fullWidth
                                               variant = "outlined"/>     
                                               </Grid>
                                            <Grid item>
                                            <ActionButton variant = "outlined" onClick = {handleSearch}  type = "submit"   >
                                                <SearchIcon color = "primary"/>
                                                </ActionButton>
                                                <ActionButton onClick = {handleClear} variant = "outlined" type = "reset"  >
                                                <ClearAllIcon color = "primary"/>
                                                </ActionButton>
                                            </Grid>
                                        </Grid>
                                   
                                     </Grid>
                                </Paper> 

                         
                      
             
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
            
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />

        </Container>
    )
}

export default RentalForm
