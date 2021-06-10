import axiosIntance from "../../axios"
import * as authActionTypes from "./authActions"



export const setAuthToken =(token) =>{
    return token
}

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
            const token = response.data
           
            if(response.status === 200){
                localStorage.setItem('token',token)
                setAuthToken(token)
                const localToken = localStorage.getItem('token')
                dispatch(fetchAuthSuccess(localToken))
                if(localToken){
                    history.replace('/dashboard')  
                }
              
            }
        }).catch( error =>{
            const errMsg = error.response.data
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
        axiosIntance.get('/api/auth')
        .then( response =>{
            const res = response.data
            dispatch(fetchLogoutAuthSuccess(res))
            if(response.status === 200){
                localStorage.removeItem('token')
                history.replace('/')
            }
        }).catch( error =>{
            const errMsg = error.response.data
            dispatch(fetchLogoutAuthFailure(errMsg))
        })
    }
}