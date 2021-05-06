import * as dashboardActionTypes from "./dashboardActionTypes"
import axiosInstance from "../../axios"

const fetchMoviesCountRequest = () =>{
    return{
        type: dashboardActionTypes.GET_MOVIECOUNT_REQUEST
    }
}

const fetchMoviesCountSuccess = (moviecount) =>{
    return{
        type: dashboardActionTypes.GET_MOVIECOUNT_SUCCESS,
        payload: moviecount
    }
}

const fetchMoviesCountFailure = (error) =>{
    return{
        type: dashboardActionTypes.GET_MOVIECOUNT_FAILURE,
        payload: error
    }
}

 export const fetchMovieCount = () =>{
            return dispatch =>{
                dispatch(fetchMoviesCountRequest())
                axiosInstance.get('api/dashboard/movies')
                .then(response => {
                    const movieCount = response.data
                    dispatch(fetchMoviesCountSuccess(movieCount))
                }).catch( error =>{
                    const errMsg = error.massage 
                    dispatch(fetchMoviesCountFailure(errMsg))
                })
            }
        }

        //Fetch Customer

        const fetchCustomerCountRequest = () =>{
            return{
                type: dashboardActionTypes.GET_CUSTOMERCOUNT_REQUEST
            }
        }
        
        const fetchCustomerCountSuccess = (customerCount) =>{
            return{
                type: dashboardActionTypes.GET_CUSTOMERCOUNT_SUCCESS,
                payload: customerCount
            }
        }
        
        const fetchCustomerCountFailure = (error) =>{
            return{
                type: dashboardActionTypes.GET_CUSTOMERCOUNT_FAILURE,
                payload: error
            }
        }
        
         export const fetchCustomerCount = () =>{
                    return dispatch =>{
                        dispatch(fetchCustomerCountRequest)
                        axiosInstance.get('api/dashboard/customers')
                        .then(response => {
                            const customerCount = response.data
                            dispatch(fetchCustomerCountSuccess(customerCount))
                        }).catch( error =>{
                            const errMsg = error.massage 
                            dispatch(fetchCustomerCountFailure(errMsg))
                        })
                    }
                }


                  //Fetch Rentals

        const fetchRentalsCountRequest = () =>{
            return{
                type: dashboardActionTypes.GET_RENTALSCOUNT_REQUEST
            }
        }
        
        const fetchRentalsCountSuccess = (rentalsCount) =>{
            return{
                type: dashboardActionTypes.GET_RENTALSCOUNT_SUCCESS,
                payload: rentalsCount
            }
        }
        
        const fetchRentalsCountFailure = (error) =>{
            return{
                type: dashboardActionTypes.GET_CUSTOMERCOUNT_FAILURE,
                payload: error
            }
        }
        
         export const fetchRentalsCount = () =>{
                    return dispatch =>{
                        dispatch(fetchRentalsCountRequest)
                        axiosInstance.get('api/dashboard/rentals')
                        .then(response => {
                            const rentalsCount = response.data
                            dispatch(fetchRentalsCountSuccess(rentalsCount))
                        }).catch( error =>{
                            const errMsg = error.massage 
                            dispatch(fetchRentalsCountFailure(errMsg))
                        })
                    }
                }