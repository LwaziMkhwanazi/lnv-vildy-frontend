import axiosInstance from "../../axios"
  
  const GET_ACTIONCOUNT_REQUEST = 'GET_ACTIONCOUNT_REQUEST'
  const GET_ACTIONCOUNT_SUCCESS = 'GET_ACTIONCOUNT_SUCCESS' 
  const GET_ACTIONCOUNT_FAILURE = 'GET_ACTIONCOUNT_FAILURE'  

  const fetchActionCountRequest = () =>{
    return{
        type:  GET_ACTIONCOUNT_REQUEST
    }
}

const fetchActionCountSuccess = (count) =>{
    return{
        type: GET_ACTIONCOUNT_SUCCESS ,
        payload: count
    }
}

const fetchActionCountFailure = (error) =>{
    return{
        type: GET_ACTIONCOUNT_FAILURE ,
        payload: error
    }
}


export const fetchActionCount = () =>{
    return dispatch =>{
        dispatch(fetchActionCountRequest())
        axiosInstance.get('/api/dashboard/action')
        .then(response => {
            const actionCount = response.data
            dispatch(fetchActionCountSuccess(actionCount))
        }).catch( error =>{
            const errMsg = error.response.data
            dispatch(fetchActionCountFailure(errMsg))
        })
    }
}
