import React,{useState,useEffect,useRef} from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import {Button, makeStyles,Container,Paper, 
  Grid, CircularProgress,InputLabel,MenuItem,FormControl,Select} from "@material-ui/core"
import PageHeader from "../../components/Uicompnents/PageHeader"
import PopUp from "../../components/MuiReusableComponents/PopUp"
import MovieForm from './MovieForm';
import {fetchMovies} from "../../redux/movies/movieAyncActions"
import {fetchGenres} from "../../redux/genre/genreAyncActions";
import MovieCard from "./MovieCard"
import Notification from "../../components/MuiReusableComponents/Notifications"

import {useSelector,useDispatch} from "react-redux"

const useStyles = makeStyles(theme =>({
    button:{
        backgroundColor:'#fff'
    },
    formControl: {
     backgroundColor: '#fff'
    },
    paper:{
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    },
    formC:{
      paddingBottom:'9px'
    },
    btn:{
      margin:'5.5px 15px'
    },
    selecLabl:{
      color:theme.palette.primary,
    }
}))

function MoviePage() {

    const movies = useSelector( state => state.movies)
    const genres = useSelector(state => state.genres)
    const genreData = genres && genres.genres
    const movieRecords = movies && movies.movies && movies.movies
    const postedData = movies && movies.postMovieSuccess
    const deletedMovie = movies && movies.deletedMovie
    const editedMovie = movies && movies.editedMovie
  
    console.log(genreData)

    const dispatch = useDispatch()
     
    const [openPopup,setOpenPopup] = useState(false)
    
    const classes = useStyles()
   
    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
    const [genre, setGenre] = useState('');

    const editInitialRender = useRef(true);
    const addInitialRender = useRef(true);
    const deletedInitialRender = useRef(true);


useEffect(()=>{
  dispatch(fetchGenres())
},[dispatch])


     // Delete

    useEffect(() => {
        if (deletedInitialRender.current) {
          deletedInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Movie Deleted successfully',
                type:'error'   
            })
        }
      }, [deletedMovie]);


 //Edit Notification
    useEffect(() => {
        if (editInitialRender.current) {
          editInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Movie edited successfully',
                type:'success'   
            })
        }
      }, [editedMovie]);

    //add Notification
      useEffect(() => {
        if (addInitialRender.current) {
          addInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Movie added successfully',
                type:'success'   
            })
        }
      }, [postedData]);

      

      useEffect(()=>{
        dispatch(fetchMovies())
      },[dispatch,postedData,deletedMovie,editedMovie])

      const handleChange = (event) => {
        console.log(event.target.value)
        dispatch(fetchMovies(event.target.value))
       setGenre(event.target.value);
     };

     
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

    

    if(genreData === undefined) return <CircularProgress className = {classes.progress} />

    return (
        <div>
        <PageHeader icon = {<MovieIcon fontSize = "large" />}
            title = "Movies Page" 
            subtitle = "Add Delete Edit and Display Movies" />    
          <Grid container>

              <Grid xs = {12} sm = {6} md = {6} item>
              <FormControl className = {classes.formControl} variant="outlined"  fullWidth >
                  <InputLabel className = {classes.selecLabl} style = {{paddingBottom:'5px'}} color = "primary" 
                  variant = "filled" id="demo-simple-select-label">Genre</InputLabel>
                  <Select
                  labelId="demo-simple-select-filled-label"
                   id="demo-simple-select-filled"
                    classes = {{root: classes.formC}}
                    value={genre}
                    onChange={handleChange}
                      >
                      <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                     {
                       genreData.map( genre =>{
                         return  <MenuItem key = {genre._id} value={genre.name}>{genre.name}</MenuItem>
                       })
                     }
                    
                  </Select>
                </FormControl>

              </Grid>
              <Grid xs = {12} sm = {6} md = {6} item>
              <Button  classes = {{label: classes.btn}} onClick = {()=> setOpenPopup(true)} className = {classes.button} fullWidth variant = "outlined" color = "primary">Add Movie</Button>
              </Grid>
          </Grid>
         

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
             width = "md"
            >
             <MovieForm 
                 setOpenPopup = {setOpenPopup}
             />
            </PopUp>
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />
        </div>
    )
}



export default MoviePage
