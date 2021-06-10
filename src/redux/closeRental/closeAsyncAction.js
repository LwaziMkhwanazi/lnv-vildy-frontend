import * as closeRentalTypes from "./closeTypes"
import axiosIntance from "../../axios"

const postCloseRentalRequest = () =>{
    return{
        type: closeRentalTypes.POST_CLOSERENTAL_REQUEST
    }
} 

const postCloseRentalSuccess = (rental) =>{
    return{
        type: closeRentalTypes.POST_CLOSERENTAL_SUCCESS,
        payload: rental
    }
}

const postCloseRentalFailure = (rental) =>{
    return{
        type: closeRentalTypes.POST_CLOSERENTAL_FAILURE,
        payload: rental
    }
}

export const closeRental = (rental) =>{
    console.log(rental.customerId)
    console.log(rental.movieId)
    return dispatch => {
        dispatch(postCloseRentalRequest())
        axiosIntance.post('/api/returns',{
            customerId: rental.customerId,
            movieId: rental.movieId
        }).then( response =>{
            const closeRental = response.data
            dispatch(postCloseRentalSuccess(closeRental))
        }).catch( error =>{
            const errMsg = error.response.data
            dispatch(postCloseRentalFailure(errMsg))
        })
    }
}
