import * as customerTypes from "./customerTypes";
import axiosInstance from "../../axios"
import axiosIntance from "../../axios";

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


//POST
const postCustomerRequest = () =>{
    return{
        type: customerTypes.POST_CUSTOMER_REQUEST
    }
}

const postCustomerSuccess = customers =>{
    return{
        type: customerTypes.POST_CUSTOMER_SUCCESS,
        payload: customers
    }
}

const postCustomerFailure = error => {
    return{
        type: customerTypes.POST_CUSTOMER_FAILURE,
        payload: error
    }
}


export const postCustomer = (customer) =>{
        return dispatch =>{
            dispatch(postCustomerRequest())
            console.log(customer)
            axiosInstance.post('/api/customers',{
                name:customer.name,
                phone: customer.phone,
                isGold: true
            }) 
            .then( response => {
                    const customers = response.data
                    dispatch(postCustomerSuccess(customers))
                })
                .catch(error =>{
                    const errorMsg = error.message
                    dispatch(postCustomerFailure(errorMsg))
                })
        }
}




 export const fetchCustomer = () => {
    return dispatch =>{
            dispatch(fetchCustomerRequest())
            axiosIntance.get('/api/customers')
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