import React,{useEffect} from 'react'
import {fetchMovieCount,fetchCustomerCount,fetchRentalsCount} from "../../redux/dashboard/dashboardAsyncActions"
import {useDispatch,useSelector} from "react-redux"
import {Grid,Container,Box,makeStyles,Paper} from "@material-ui/core"
import DashboardCard from './DashboardCard';
import PeopleIcon from '@material-ui/icons/People';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import MovieIcon from '@material-ui/icons/Movie';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import purple from '@material-ui/core/colors/purple';
import CircularProgress from '@material-ui/core/CircularProgress';
import DashboardCharts from "./DashboardCharts";


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
    }
}))

function DashboardPage() {

    const classes = useStyle()
    const dispatch = useDispatch()

    const dashboardData = useSelector(state => state.dashboard)
    const movieNum = dashboardData && dashboardData.movieCount
    const customerCount = dashboardData && dashboardData.customerCount
    const rentalsCount = dashboardData && dashboardData.rentalsCount

    const loading = dashboardData && dashboardData.loading
    console.log(loading)
    // console.log(movieNum.movies)
    // console.log(customerCount.customers)
    // console.log(rentalsCount.rentals)

      

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
         <Grid container spacing = {3} style = {{marginTop:'15px'}} >
                        <Grid
                            item
                        sm
                        >
                            < DashboardCard title = "NUMBER OF MOVIES" count = {movieNum.movies}
                                icon = {<MovieIcon />} dbColor = {pink.A200}

                             />
                        </Grid>
                        <Grid
                            item
                        sm
                        >
                        < DashboardCard title = "NUMBER OF CUSTOMERS" count = {customerCount.customers} 
                        icon = {<PeopleIcon />} dbColor = {purple.A700}
                        /> 
                        </Grid>
                        <Grid
                            item
                        sm
                        >
                        < DashboardCard title = "NUMBER OF RENTALS" count = {rentalsCount.rentals} 
                          icon = {<LocalMoviesIcon />} dbColor = {blue.A200}
                        /> 
                        </Grid>
         
         </Grid>
              <Grid container>
                <Grid item md = {8}> 
                   <Paper className = {classes.containerPaper} >
                          <DashboardCharts/>
                        </Paper>  
                   
                </Grid>
              </Grid>

         
         
        </Grid>
      </Container>
      </Box>
    )
}

export default DashboardPage
