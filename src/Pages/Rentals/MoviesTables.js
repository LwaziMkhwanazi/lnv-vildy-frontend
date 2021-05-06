import React,{useEffect} from 'react'
import useTable from '../../components/Table/useTable';
import {fetchMovies} from "../../redux/movies/movieAyncActions"
import {useDispatch,useSelector	} from "react-redux"
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles, Paper, TableBody, TableRow,TableCell} from '@material-ui/core';
const useStyles = makeStyles( theme =>({
    container:{
        marginTop:theme.spacing(1)
    },

    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
  
  
}))
const headCells = [
    {id:'title', label:'Movie Title'},
    {id:'genre', label:'Genre'},
    {id:'rate', label:'Daily Rate'},
    {id:'numberInStock', label:'Number In Stock'},
   
]

function MoviesTables({setOpenPopup,handleClick}) {

    const classes = useStyles()
    const dispatch = useDispatch()
    const movies = useSelector( state => state.movies)
    const records = movies && movies.movies
    
    const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)

    useEffect(()=>{
        dispatch(fetchMovies())
    },[dispatch])


    


    return (
         <div className ={classes.container} >
     
          <Paper>
            <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( movie =>(
                                        <TableRow onClick = {()=>handleClick(movie)} key = {movie._id}>
                                            <TableCell size = "small"  align = "center" >{movie.title}</TableCell>
                                            <TableCell  size = "small" align = "center" >{movie.genre.name}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{parseFloat(movie.dailyRentalRate).toFixed(2)}</TableCell>
                                            <TableCell  size = "small"  align = "center" >{movie.numberInStock}</TableCell>
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                 {movies && movies.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            </Paper>   
         
    
        </div>
    )
}

export default MoviesTables
