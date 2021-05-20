const GET_KARATECOUNT_REQUEST = 'GET_KARATECOUNT_REQUEST'
const GET_KARATECOUNT_SUCCESS = 'GET_KARATECOUNT_SUCCESS'
const GET_KARATECOUNT_FAILURE = 'GET_KARATECOUNT_FAILURE'

const initialState = {
    loading:false,
    karateCount:{},
    error:''
}

 const karateCountReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_KARATECOUNT_REQUEST:{
                return{
                    loading: true
                }
            }
            case GET_KARATECOUNT_SUCCESS:{
                return{
                    loading:false,
                    karateCount: action.payload,
                    error: ''
                }
            }
            case GET_KARATECOUNT_FAILURE:{
                return{
                    loading:false,
                    karateCount:{},
                    error: action.payload
                }
            }
            default : return state
        }
 } 


 export default karateCountReducer