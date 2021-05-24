import axiosIntance from "../../axios"
import * as authActionTypes from "./authActions"



const fetchAuthRequest = () =>{
    return{
        type: authActionTypes.FETCH_LOGINAUTH_REQUEST
    }
}

const fetchAuthSuccess = (auth) =>{
    return{
        type: authActionTypes.FETCH_LOGINAUTH_SUCCESS,
        payload: auth
    }
}

const fetchAuthFailure = (error) =>{
   return{
    type: authActionTypes.FETCH_LOGINAUTH_FAILURE,
    payload: error
   }
}

export const postLoginDetails =(user,history)=>{

    return dispatch =>{
        dispatch(fetchAuthRequest())
        axiosIntance.post('/api/auth/login',{
            email:user.email,
            password:user.password
        })
        .then( response =>{
            const user = response.data
            dispatch(fetchAuthSuccess(user))
            if(response.status === 200){
                history.replace('/dashboard')
            }
        }).catch( error =>{
            const errMsg = error.message 
            dispatch(fetchAuthFailure(errMsg))
        })
        
    }
}

const fetchLogoutAuthRequest = () =>{
    return{
        type: authActionTypes.FETCH_LOGOUTAUTH_REQUEST
    }
}

const fetchLogoutAuthSuccess = (auth) =>{
    return{
        type: authActionTypes.FETCH_LOGOUTAUTH_SUCCESS,
        payload: auth
    }
}

const fetchLogoutAuthFailure = (error) =>{
   return{
    type: authActionTypes.FETCH_LOGOUTAUTH_FAILURE,
    payload: error
   }
}

export const logOUtAuth =(history) =>{
    return dispatch =>{
        dispatch(fetchLogoutAuthRequest())
        axiosIntance.delete('/api/auth')
        .then( response =>{
            const user = response.data
            dispatch(fetchLogoutAuthSuccess(user))
            if(response.status === 200){
                history.replace('/')
            }
        }).catch( error =>{
            const errMsg = error.message
            dispatch(fetchLogoutAuthFailure(errMsg))
        })
    }
}