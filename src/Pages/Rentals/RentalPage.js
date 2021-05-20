import React,{useState,useRef,useEffect} from 'react'
import PageHeader from "../../components/Uicompnents/PageHeader"
import HdIcon from '@material-ui/icons/Hd'
import { makeStyles,Container,Grid,Chip} from '@material-ui/core';
import RentalsTable from "./RentalsTable";
import RentalForm from './RentalForm';
import ReturnRentalForm from "./ReturnRentalForm";
import {useRouteMatch,Route,Switch,useHistory} from  "react-router-dom";
import Notification from "../../components/MuiReusableComponents/Notifications";
import Returns from "./Retuns";
import {useSelector} from "react-redux";

const useStyles = makeStyles( theme =>({
    container:{
        padding:'15px 30px',
    
    },
    chipContainer:{
        marginTop: theme.spacing(1.5)
    },
    chip:{
        cursor:'pointer',
        backgroundColor: theme.palette.primary.light,
        color:theme.palette.common.white,
        marginLeft:theme.spacing(1)
    },
    chipSec:{
        cursor:'pointer',
        backgroundColor: theme.palette.secondary,
        color:theme.palette.common.white,
        marginLeft:theme.spacing(1)
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
  
   
  
}))



function RentalPage() {
  
    const classes = useStyles()
    const {path} = useRouteMatch() 
    const history = useHistory()

    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
    const closed = useSelector(state => state.closeRental)
    const closedRent = closed && closed.rental
 
   
//Close Rental
 const closeInitialRender = useRef(true);
   useEffect(() => {
    if (closeInitialRender.current) {
         closeInitialRender.current = false;
    } else {
        setNotify({
            isOpen:true,
            message:'Rental closed successfully',
            type:'success'   
        })
    }
  }, [closedRent]);
 
  
   
    return (
        <div>
        <PageHeader icon = {<HdIcon fontSize = "large" />} 
            title = "Rental Page" 
            subtitle = "Create Close and Display Rentals" />
            <Container className = {classes.chipContainer}>
                <Grid container spacing = {2} >
                <Grid item >
                       <Chip className = {classes.chip} label = "Rentals Table" onClick = {()=> history.push('/rentals')} />
                    </Grid>
                   
                    <Grid item>
                       <Chip className = {classes.chip} label = "Create Rental" onClick = {()=> history.push('/rentals/create')} />
                    </Grid>
                    
                    <Grid item>
                       <Chip className = {classes.chipSec} color = "secondary" label = "Retuned Rental" onClick = {()=> history.push('/rentals/closedrental')} />
                    </Grid>
                </Grid>
                <Switch>
                    <Route exact path = {`${path}`}>
                        <RentalsTable/>
                    </Route>
                    <Route path = {`${path}/create`}>
                         <RentalForm/>
                    </Route>
                    <Route path = {`${path}/close`}>
                         <ReturnRentalForm/>
                    </Route>
                    <Route path = {`${path}/closedrental`}>
                         <Returns/>
                    </Route>
                </Switch>   
                          
            </Container>
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />
        </div>
    )
}

export default RentalPage
