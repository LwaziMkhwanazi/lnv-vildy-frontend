import axiosInstance from "../../axios"
  
const GET_KARATECOUNT_REQUEST = 'GET_KARATECOUNT_REQUEST'
const GET_KARATECOUNT_SUCCESS = 'GET_KARATECOUNT_SUCCESS'
const GET_KARATECOUNT_FAILURE = 'GET_KARATECOUNT_FAILURE'
   

  const fetchKarateCountRequest = () =>{
    return{
        type:  GET_KARATECOUNT_REQUEST
    }
}

const fetchKarateCountSuccess = (count) =>{
    return{
        type: GET_KARATECOUNT_SUCCESS ,
        payload: count
    }
}

const fetchKarateCountFailure = (error) =>{
    return{
        type: GET_KARATECOUNT_FAILURE ,
        payload: error
    }
}


export const fetchKarateCount = () =>{
    return dispatch =>{ 
        dispatch(fetchKarateCountRequest())
        axiosInstance.get('/api/dashboard/karate')
        .then(response => {
            const karateCount = response.data
            dispatch(fetchKarateCountSuccess(karateCount))
        }).catch( error =>{
            const errMsg = error.massage 
            dispatch(fetchKarateCountFailure(errMsg))
        })
    }
}