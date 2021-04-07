import * as genreTypes from "./genreTypes";
import axiosInstance from "../../axios"


const fetchGenreRequest = () =>{
    return{
        type: genreTypes.FETCH_GENRE_REQUEST
    }
}

const fetchGenreSuccess = customers =>{
    return{
        type: genreTypes.FETCH_GENRE_SUCCESS,
        payload: customers
    }
}

const fetchGenreFailure = error => {
    return{
        type: genreTypes.FETCH_GENRE_FAILURE,
        payload: error
    }
}


//POST
const postGenreRequest = () =>{
    return{
        type: genreTypes.POST_GENRE_REQUEST
    }
}

const postGenreSuccess = customers =>{
    return{
        type: genreTypes.POST_GENRE_SUCCESS,
        payload: customers
    }
}

const postGenreFailure = error => {
    return{
        type: genreTypes.POST_GENRE_FAILURE,
        payload: error
    }
}

//Edit
const editGenreRequest = () =>{
    return{
        type: genreTypes.EDIT_GENRE_REQUEST
    }
}

const editGenreSuccess = customers =>{
    return{
        type: genreTypes.EDIT_GENRE_SUCCESS,
        payload: customers
    }
}

const editGenreFailure = error => {
    return{
        type: genreTypes.EDIT_GENRE_FAILURE,
        payload: error
    }
}

//DELETE
const deleteGenreRequest = () =>{
    return{
        type: genreTypes.DELETE_GENRE_REQUEST
    }
}

const deleteGenreSuccess = customers =>{
    return{
        type: genreTypes.DELETE_GENRE_SUCCESS,
        payload: customers
    }
}

const deleteGenreFailure = error => {
    return{
        type: genreTypes.DELETE_GENRE_FAILURE,
        payload: error
    }
}





export const deleteGenre = genre =>{
 
    return dispatch =>{
        console.log(genre)
        dispatch(deleteGenreRequest())
        axiosInstance.delete(`/api/genres/${genre._id}`)
                    .then( response =>{
                        const genre = response.data
                        dispatch(deleteGenreSuccess(genre))
                    })
                    .catch( error =>{
                        const errorMsg = error.message
                        dispatch(deleteGenreFailure(errorMsg))
                    } )
    }
}




export const editGenre = (genre) =>{
    return dispatch =>{
        dispatch(editGenreRequest())
        axiosInstance.put(`/api/genres/${genre._id}`,{
            name:genre.name,
           
        }) 
        .then( response => {
                const genre = response.data
                dispatch(editGenreSuccess(genre))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(editGenreFailure(errorMsg))
            })
    }
}




export const postGenre = (genre) =>{
        return dispatch =>{
            dispatch(postGenreRequest())
            axiosInstance.post('/api/genres',{
                name:genre.name
              
            }) 
            .then( response => {
                    const genre = response.data
                    dispatch(postGenreSuccess(genre))
                })
                .catch(error =>{
                    const errorMsg = error.message
                    dispatch(postGenreFailure(errorMsg))
                })
        }
}




 export const fetchGenres = () => {
    return dispatch =>{
            dispatch(fetchGenreRequest())
                axiosInstance.get('/api/genres')
                .then( response => {
                    const genre = response.data
                        dispatch(fetchGenreSuccess(genre))
                })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchGenreFailure(errorMsg))
            })
     
    }
}