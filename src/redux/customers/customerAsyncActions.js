import * as customerTypes from "./customerTypes";
import axios from "axios"
const fetchCustomerRequest = () =>{
    return{
        type: customerTypes.FETCH_CUSTOMER_REQUEST
    }
}

const fetchCustomerSuccess = customers =>{
    return{
        type: customerTypes.FETCH_CUSTOMER_SUCCESS,
        payload: customers
    }
}

const fetchCustomerFailure = error => {
    return{
        type: customerTypes.FETCH_CUSTOMER_FAILURE,
        payload: error
    }
}

 export const fetchCustomer = () => {
    return dispatch =>{
            dispatch(fetchCustomerRequest())
            axios.get('http://localhost:3000/api/customers')
            .then( response => {
                const customers = response.data
                dispatch(fetchCustomerSuccess(customers))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(fetchCustomerFailure(errorMsg))
            })
    }
}