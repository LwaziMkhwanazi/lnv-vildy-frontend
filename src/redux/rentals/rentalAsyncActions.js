import axiosIntance from "../../axios"
import * as rentalTypes from "./rentalTypes"

const fetchRentalRequest =() =>{
    return{
        type: rentalTypes.FETCH_RENTAL_REQUEST
    }
}

const fetchRentalSucces = rental =>{
        return{
            type: rentalTypes.FETCH_RENTAL_SUCCESS,
            payload: rental
        }
}

const fetchRentalFailure = error =>{
    return{
        type: rentalTypes.FETCH_RENTAL_FAILURE,
        payload: error
    }
}

export const fetchRentals = () =>{
    return dispatch =>{
        dispatch(fetchRentalRequest())
        axiosIntance.get('/api/rentals')
        .then( response =>{
            const rentals = response.data
            dispatch(fetchRentalSucces(rentals))
        }).catch( error =>{
            const errorMsg = error.message
            dispatch(fetchRentalFailure(errorMsg))
        })
    }
}

const postRentalRequest =() =>{
    return{
        type: rentalTypes.POST_RENTAL_REQUEST
    }
}

const postRentalSucces = rental =>{
        return{
            type: rentalTypes.POST_RENTAL_SUCCESS,
            payload: rental
        }
}

const postRentalFailure = error =>{
    return{
        type: rentalTypes.POST_RENTAL_FAILURE,
        payload: error
    }
}

export const postRental = (movieRental) =>{
    return dispatch =>{
        dispatch(postRentalRequest())
        axiosIntance.post('/api/rentals',{
            customerId: movieRental._id,
            movieId: movieRental.movieId
        }).then( response =>{
            const rental = response.data
            dispatch(postRentalSucces(rental))
        }).catch( error =>{
            const erroMsg = error.message
            dispatch(postRentalFailure(erroMsg))
        })
    }
}