import * as movieTypes from "./movieTypes";
import axiosInstance from "../../axios"


const fetchMovieRequest = () =>{
    return{
        type: movieTypes.FETCH_MOVIE_REQUEST
    }
}

const fetchMovieSuccess = movies =>{
    return{
        type: movieTypes.FETCH_MOVIE_SUCCESS,
        payload: movies
    }
}

const fetchMovieFailure = error => {
    return{
        type: movieTypes.FETCH_MOVIE_FAILURE,
        payload: error
    }
}


export const fetchMovies = () =>{
        return dispatch =>{
             dispatch(fetchMovieRequest())
            axiosInstance.get('/api/movies')
            .then( response =>{
                const movies = response.data
                dispatch(fetchMovieSuccess(movies))
            })
            .catch( error =>{
                const errorMsg = error.massage 
                 dispatch(fetchMovieFailure(errorMsg))
            })
        }
}


const postMovieRequest = () =>{
    return{
        type: movieTypes.POST_MOVIE_REQUEST
    }
}

const postMovieSuccess = movie =>{
    return{
        type: movieTypes.POST_MOVIE_SUCCESS,
        payload: movie
    }
}

const postMovieFailure = error => {
    return{
        type: movieTypes.POST_MOVIE_FAILURE,
        payload: error
    }
}

export const postMovie = movie =>{
    console.log(movie)
    return dispatch =>{
         dispatch(postMovieRequest())
        axiosInstance.post('/api/movies',
        { title:movie.title,
            genreId:movie.genreId,
            numberInStock:movie.numberInStock,
            dailyRentalRate:movie.dailyRentalRate

        })
        .then( response =>{
            const movie = response.data
            dispatch(postMovieSuccess(movie))
        }).catch( error =>{
            const errorMsg = error.massage
            dispatch(postMovieFailure(errorMsg))
        })
    }
}

const deleteMovieRequest = () =>{
    return{
        type: movieTypes.DELETE_MOVIE_REQUEST
    }
}

const deleteMovieSuccess = movie =>{
    return{
        type: movieTypes.DELETE_MOVIE_SUCCESS,
        payload: movie
    }
}

const deleteMovieFailure = error => {
    return{
        type: movieTypes.DELETE_MOVIE_FAILURE,
        payload: error
    }
}
 
 export const deleteMovie = (id) =>{
    return dispatch =>{
        dispatch(deleteMovieRequest())
        axiosInstance.delete(`/api/movies/${id}`)
        .then( response =>{
            const movie = response.data
            dispatch(deleteMovieSuccess(movie))
        })
        .catch( error =>{
            const errorMsg = error.message 
            dispatch(deleteMovieFailure(errorMsg))
        })


    }
}