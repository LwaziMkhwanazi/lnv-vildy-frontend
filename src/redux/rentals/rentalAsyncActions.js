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