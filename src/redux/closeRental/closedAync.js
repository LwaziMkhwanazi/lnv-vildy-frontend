import * as closeRentalTypes from "./closeTypes"
import axiosIntance from "../../axios"

const postClosedRentalRequest = () =>{
    return{
        type: closeRentalTypes.POST_CLOSEDRENTAL_REQUEST
    }
} 

const postClosedRentalSuccess = (rental) =>{
    return{
        type: closeRentalTypes.POST_CLOSEDRENTAL_SUCCESS,
        payload: rental
    }
}

const postClosedRentalFailure = (rental) =>{
    return{
        type: closeRentalTypes.POST_CLOSEDRENTAL_FAILURE,
        payload: rental
    }
}

export const closedRentals = () =>{
    return dispatche =>{
        dispatche(postClosedRentalRequest())
        axiosIntance.get('http://localhost:8080/api/dashboard/closed')
        .then( response =>{
            const movies = response.data
            dispatche(postClosedRentalSuccess(movies))
        }).catch( error =>{
            const errMsg = error.response.data
            dispatche(postClosedRentalFailure(errMsg))
        } )
    }
}