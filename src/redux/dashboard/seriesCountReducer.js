const GET_SERIESCOUNT_REQUEST = 'GET_SERIESCOUNT_REQUEST'
const GET_SERIESCOUNT_SUCCESS = 'GET_SERIESCOUNT_SUCCESS'
const GET_SERIESCOUNT_FAILURE = 'GET_SERIESCOUNT_FAILURE'


const initialState = {
    loading:false,
    seriesCount:{},
    error:''
}

 const seriesCountReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_SERIESCOUNT_REQUEST:{
                return{
                    loading: true
                }
            }
            case GET_SERIESCOUNT_SUCCESS:{
                return{
                    loading:false,
                    seriesCount: action.payload,
                    error: ''
                }
            }
            case GET_SERIESCOUNT_FAILURE:{
                return{
                    loading:false,
                    seriesCount:{},
                    error: action.payload
                }
            }
            default : return state
        }
 } 


 export default seriesCountReducer