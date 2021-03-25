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

//Edit
const editCustomerRequest = () =>{
    return{
        type: customerTypes.EDIT_CUSTOMER_REQUEST
    }
}

const editCustomerSuccess = customers =>{
    return{
        type: customerTypes.EDIT_CUSTOMER_SUCCESS,
        payload: customers
    }
}

const editCustomerFailure = error => {
    return{
        type: customerTypes.EDIT_CUSTOMER_FAILURE,
        payload: error
    }
}

export const editCustomer = (customer) =>{
    return dispatch =>{
        dispatch(editCustomerRequest())
        axiosInstance.put(`/api/customers/${customer._id}`,{
            name:customer.name,
            phone: customer.phone,
            isGold: customer.isGold
        }) 
        .then( response => {
                const customers = response.data
                dispatch(editCustomerSuccess(customers))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(editCustomerFailure(errorMsg))
            })
    }
}




export const postCustomer = (customer) =>{
        return dispatch =>{
            dispatch(postCustomerRequest())
            axiosInstance.post('/api/customers',{
                name:customer.name,
                phone: customer.phone,
                isGold: customer.isGold
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