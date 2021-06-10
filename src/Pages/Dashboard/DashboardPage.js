import React,{useEffect} from 'react'
import {fetchMovieCount,fetchCustomerCount,fetchRentalsCount} from "../../redux/dashboard/dashboardAsyncActions"
import {useDispatch,useSelector} from "react-redux"
import {Grid,Container,Box,makeStyles,Paper} from "@material-ui/core"
import RentalsCard from './RentalsCard';
import MovieCard from "./MovieCard";
import CustomerCard from "./CustomerCard";
import PeopleIcon from '@material-ui/icons/People';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieIcon from '@material-ui/icons/Movie';

import DashboardCharts from "./DashboardCharts";
import DonutChart from "./DonutChart";


const useStyle = makeStyles(theme =>({
    contain:{
      margin:'auto',
      textAlign:'center'  
    },

    paper:{
        margin:theme.spacing(5),
        maxWidth:450,  
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    },
    container:{
      maxWidth:'900px',
      marginTop: theme.spacing(3)
    },
    containerPaper:{
      padding:theme.spacing(3),
      marginTop:theme.spacing(3)
    },
    donutPaper:{
      padding: '36px 20px',
      marginTop:theme.spacing(3)
    }
}))

function DashboardPage() {

    const classes = useStyle()
    const dispatch = useDispatch()

    const dashboardData = useSelector(state => state.dashboard)
    const movieNum = dashboardData && dashboardData.movieCount
    const customerCount = dashboardData && dashboardData.customerCount
    const rentalsCount = dashboardData && dashboardData.rentalsCount

  
    useEffect(()=>{
        dispatch(fetchMovieCount())
        dispatch(fetchCustomerCount())
        dispatch(fetchRentalsCount())
    },[dispatch])

    if(movieNum === undefined) return <CircularProgress className = {classes.progress} />
    if(customerCount === undefined) return <CircularProgress className = {classes.progress} />
    if(rentalsCount === undefined) return <CircularProgress className = {classes.progress} />
 
    return (
         <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}>
        <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
         <Grid container spacing = {2} style = {{marginTop:'15px'}} >
                        <Grid
                            item
                            xm = {12}
                            sm = {12}
                            md
                        >
                            < MovieCard title = "NUMBER OF MOVIES" count = {movieNum.movies}
                                icon = {<MovieIcon />} 

                             />
                        </Grid>
                        <Grid
                            item
                            xm = {12}
                        sm = {12}
                          md
                        >
                        < CustomerCard title = "NUMBER OF CUSTOMERS" count = {customerCount.customers} 
                        icon = {<PeopleIcon />} 
                        /> 
                        </Grid>
                        <Grid
                            item
                        xm = {12}
                        sm = {12}
                        md
                        >
                        < RentalsCard title = "NUMBER OF RENTALS" count = {rentalsCount.rentals} 
                          icon = {<LocalMoviesIcon />} 
                        /> 
                        </Grid>
         
         </Grid>
              <Grid container spacing = {2}>
                <Grid item xs = {12} sm = {12} md = {8}> 
                   <Paper className = {classes.containerPaper} >
                          <DashboardCharts/>
                        </Paper>  
                   
                </Grid>
                <Grid item xs = {12} sm = {12} md = {4}> 
                   <Paper className = {classes.donutPaper} >
                          <DonutChart />
                        </Paper>  
                   
                </Grid>
              </Grid>

         
         
        </Grid>
      </Container>
      </Box>
    )
}

export default DashboardPage
