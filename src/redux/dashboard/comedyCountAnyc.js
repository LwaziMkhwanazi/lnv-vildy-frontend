import axiosInstance from "../../axios"
  
  const GET_COMEDYCOUNT_REQUEST = 'GET_COMEDYCOUNT_REQUEST'
  const GET_COMEDYCOUNT_SUCCESS = 'GET_COMEDYCOUNT_SUCCESS' 
  const GET_COMEDYCOUNT_FAILURE = 'GET_COMEDYCOUNT_FAILURE'  

  const fetchComedyCountRequest = () =>{
    return{
        type:  GET_COMEDYCOUNT_REQUEST
    }
}

const fetchComedyCountSuccess = (count) =>{
    return{
        type: GET_COMEDYCOUNT_SUCCESS ,
        payload: count
    }
}

const fetchComedyCountFailure = (error) =>{
    return{
        type: GET_COMEDYCOUNT_FAILURE ,
        payload: error
    }
}


export const fetchComedyCount = () =>{
    return dispatch =>{
        dispatch(fetchComedyCountRequest())
        axiosInstance.get('/api/dashboard/comedy')
        .then(response => {
            const comedyCount = response.data
            dispatch(fetchComedyCountSuccess(comedyCount))
        }).catch( error =>{
            const errMsg = error.massage 
            dispatch(fetchComedyCountFailure(errMsg))
        })
    }
}
