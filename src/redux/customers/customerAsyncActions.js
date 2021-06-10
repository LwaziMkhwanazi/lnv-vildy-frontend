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

//DELETE
const deleteCustomerRequest = () =>{
    return{
        type: customerTypes.DELETE_CUSTOMER_REQUEST
    }
}

const deleteCustomerSuccess = customers =>{
    return{
        type: customerTypes.DELETE_CUSTOMER_SUCCESS,
        payload: customers
    }
}

const deleteCustomerFailure = error => {
    return{
        type: customerTypes.DELETE_CUSTOMER_FAILURE,
        payload: error
    }
}

//GET SIngle Customer
const getSingleCustomerRequest = () =>{
    return{
        type: customerTypes.GETSINGLE_CUSTOMER_REQUEST
    }
}

const getSingleCustomerSuccess = customers =>{
    return{
        type: customerTypes.GETSINGLE_CUSTOMER_SUCCESS,
        payload: customers
    }
}

const getSingleCustomerFailure = error => {
    return{
        type: customerTypes.GETSINGLE_CUSTOMER_FAILURE,
        payload: error
    }
}


export const getSingleCustomer = customer =>{
    return dispatch =>{
        dispatch(getSingleCustomerRequest())
        axiosInstance.get(`/api/customers/${customer.phone}`)
            .then( response =>{
                const customer = response.data
                dispatch(getSingleCustomerSuccess(customer))
            })
            .catch( error => {
                const errMsg = error.response.data
                dispatch(getSingleCustomerFailure(errMsg))
            })
    }
}




export const deleteCustomer = customer =>{
    return dispatch =>{
        dispatch(deleteCustomerRequest())
        axiosInstance.delete(`/api/customers/${customer._id}`)
                    .then( response =>{
                        const customer = response.data
                        dispatch(deleteCustomerSuccess(customer))
                    })
                    .catch( error =>{
                        const errMsg = error.response.data
                        dispatch(deleteCustomerFailure(errMsg))
                    } )
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
                const errMsg = error.response.data
                dispatch(editCustomerFailure(errMsg))
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
                    const errMsg = error.response.data
                    dispatch(postCustomerFailure(errMsg))
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
                const errMsg = error.response.data
                dispatch(fetchCustomerFailure(errMsg))
            })
    }
}