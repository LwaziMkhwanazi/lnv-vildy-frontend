import React,{useState,useEffect} from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import {Button, makeStyles,Container,Paper, Grid, CircularProgress} from "@material-ui/core"
import PageHeader from "../../components/Uicompnents/PageHeader"
import PopUp from "../../components/MuiReusableComponents/PopUp"
import MovieForm from './MovieForm';
import {fetchMovies,postMovie} from "../../redux/movies/movieAyncActions"
import MovieCard from "./MovieCard"
import {useSelector,useDispatch} from "react-redux"

const useStyles = makeStyles(theme =>({
    button:{
        backgroundColor:'#fff'
    },
    
    paper:{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
}))

function MoviePage() {

    const movies = useSelector( state => state.movies)
    const movieRecords = movies && movies.movies && movies.movies
    const postedData = movies && movies.postMovieSuccess
    const deletedMovie = movies && movies.deletedMovie
    const editedMovie = movies && movies.editedMovie
    
    const dispatch = useDispatch()
       
    const [openPopup,setOpenPopup] = useState(false)
   const classes = useStyles()
   
      useEffect(()=>{
        dispatch(fetchMovies())
      },[dispatch,postedData,deletedMovie,editedMovie])
  
     const grid = (
          <Grid container spacing = {2}>
                        {
                                 movieRecords.map( movie =>(
                               <Grid item key = {movie._id} xs = {12} md = {6} lg = {4} >
                                    <MovieCard id = {movie._id} title = {movie.title}
                                      genreId = {movie.genre._id} genreName = {movie.genre.name} dailyRentalRate = {movie.dailyRentalRate} 
                                     numberInStock = {movie.numberInStock} />
                               </Grid>
                           )) 
                        }
                   </Grid>
     )

    return (
        <div>
        <PageHeader icon = {<MovieIcon fontSize = "large" />}
            title = "Movies Page" 
            subtitle = "Add Delete Edit and Display Movies" />
            <Button onClick = {()=> setOpenPopup(true)} className = {classes.button} fullWidth variant = "outlined" color = "primary">Add Movie</Button>

            <Container >
                <Paper className = {classes.paper}>
                      {
                        movies.loading? <CircularProgress className = {classes.progress} />: grid
                      }
                </Paper>
            </Container>
            <PopUp
            title = "Add Movie Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
            >
             <MovieForm 
              postMovie = {postMovie}
             setOpenPopup = {setOpenPopup}
             />
            </PopUp>
        </div>
    )
}



export default MoviePage
