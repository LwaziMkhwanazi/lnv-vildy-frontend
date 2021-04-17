import * as userTypes from "./userTypes"
import axiosInstance from "../../axios"
const fetchUserRequest= () =>{
    return{
        type: userTypes.FETCH_USER_REQUEST
    }
}

const fetchUserSucces = (user) =>{
    return{
        type: userTypes.FETCH_USER_SUCCESS,
        payload: user
    }
}

const fetchUserError = (error) =>{
    return{
        type: userTypes.FETCH_USER_FAILURE,
        payload: error
    }
}


export const getUsers = () =>{
    return dispatch =>{
        dispatch(fetchUserRequest())
        axiosInstance.get('/api/users')
        .then(response =>{
            const users = response.data
            dispatch(fetchUserSucces(users))
        })
        .catch( error =>{
            const errorMsg = error.massage
            dispatch(fetchUserError(errorMsg))
        })
    }
}

const deleteUserRequest= () =>{
    return{
        type: userTypes.DELETE_USER_REQUEST
    }
}

const deleteUserSucces = (user) =>{
    return{
        type: userTypes.DELETE_USER_SUCCESS,
        payload: user
    }
}

const deleteUserError = (error) =>{
    return{
        type: userTypes.DELETE_USER_FAILURE,
        payload: error
    }
}


export const deleteUser = (user) =>{
    return dispatch =>{
        dispatch(deleteUserRequest())
        axiosInstance.delete(`/api/users/${user}`)
        .then(response =>{
            const movie = response.data
            dispatch(deleteUserSucces(movie))
        })
        .catch( error =>{
            const errorMsg = error.massage
            dispatch(deleteUserError(errorMsg))
        })
    }
}

const postUserRequest= () =>{
    return{
        type: userTypes.POST_USER_REQUEST
    }
}

const postUserSucces = (user) =>{
    return{
        type: userTypes.POST_USER_SUCCESS,
        payload: user
    }
}

const postUserError = (error) =>{
    return{
        type: userTypes.POST_USER_FAILURE,
        payload: error
    }
}

export const postUser = user =>{
    return dispatch =>{
        dispatch(postUserRequest())
        axiosInstance.post('/api/users',{
            name:user.name, 
            email:user.email, 
            password: user.password,
            isAdmin: user.isAdmin
        })
        .then( response =>{
            const user = response.data
            dispatch(postUserSucces(user))
        })
        .catch( error =>{
            const errorMsg = error.massage
            dispatch(postUserError(errorMsg))
        })
    }
}