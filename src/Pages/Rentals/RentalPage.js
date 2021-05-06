import React from 'react'
import PageHeader from "../../components/Uicompnents/PageHeader"
import HdIcon from '@material-ui/icons/Hd'
import { makeStyles,Container,Grid,Chip} from '@material-ui/core';
import RentalsTable from "./RentalsTable";
import RentalForm from './RentalForm';
import ReturnRentalForm from "./ReturnRentalForm"
import {useRouteMatch,Route,Switch,useHistory} from  "react-router-dom";
import Returns from "./Retuns"

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
                
        </div>
    )
}

export default RentalPage
