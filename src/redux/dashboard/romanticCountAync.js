import axiosInstance from "../../axios"
  
const GET_ROMANTICCOUNT_REQUEST = 'GET_ROMANTICCOUNT_REQUEST'
const GET_ROMANTICCOUNT_SUCCESS = 'GET_ROMANTICCOUNT_SUCCESS'
const GET_ROMANTICCOUNT_FAILURE = 'GET_ROMANTICCOUNT_FAILURE'
   

  const fetchRomanticCountRequest = () =>{
    return{
        type:  GET_ROMANTICCOUNT_REQUEST
    }
}

const fetchRomanticCountSuccess = (count) =>{
    return{
        type: GET_ROMANTICCOUNT_SUCCESS ,
        payload: count
    }
}

const fetchRomanticCountFailure = (error) =>{
    return{
        type: GET_ROMANTICCOUNT_FAILURE ,
        payload: error
    }
}


export const fetchRomanticCount = () =>{
    return dispatch =>{
        dispatch(fetchRomanticCountRequest())
        axiosInstance.get('/api/dashboard/romantic')
        .then(response => {
            const romanticCount = response.data
            dispatch(fetchRomanticCountSuccess(romanticCount))
        }).catch( error =>{
            const errMsg = error.response.data
            dispatch(fetchRomanticCountFailure(errMsg))
        })
    }
}