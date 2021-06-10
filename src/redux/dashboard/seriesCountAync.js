import axiosInstance from "../../axios" 
const GET_SERIESCOUNT_SUCCESS = 'GET_SERIESCOUNT_SUCCESS'
const GET_SERIESCOUNT_FAILURE = 'GET_SERIESCOUNT_FAILURE'
const GET_SERIESCOUNT_REQUEST  = 'GET_SERIESCOUNT_REQUEST'  

  const fetchSeriesCountRequest = () =>{
    return{
        type:  GET_SERIESCOUNT_REQUEST
    }
  }

  const fetchSeriesCountSuccess = (count) =>{
      return{
          type: GET_SERIESCOUNT_SUCCESS,
          payload:count
      }
  }

  const fetchSeriesCountFailure = (error) =>{
      return{
          type: GET_SERIESCOUNT_FAILURE,
          payload: error
      }
  }

  export const fetchSeriesCount = () =>{
      return dispatch =>{
          dispatch(fetchSeriesCountRequest())
          axiosInstance.get('/api/dashboard/series')
          .then( response => {
              const seriesCount = response.data
              dispatch(fetchSeriesCountSuccess(seriesCount))
          }).catch( error =>{
            const errMsg = error.response.data
              dispatch(fetchSeriesCountFailure(errMsg))
          })
      }
  }