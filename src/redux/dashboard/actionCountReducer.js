const GET_ACTIONCOUNT_REQUEST = 'GET_ACTIONCOUNT_REQUEST'
  const GET_ACTIONCOUNT_SUCCESS = 'GET_ACTIONCOUNT_SUCCESS' 
  const GET_ACTIONCOUNT_FAILURE = 'GET_ACTIONCOUNT_FAILURE'  

const initialState = {
    loading:false,
    actionCount:{},
    error:''
}

 const actionCountReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_ACTIONCOUNT_REQUEST:{
                return{
                    loading: true
                }
            }
            case GET_ACTIONCOUNT_SUCCESS:{
                return{
                    loading:false,
                    actionCount: action.payload,
                    error: ''
                }
            }
            case GET_ACTIONCOUNT_FAILURE:{
                return{
                    loading:false,
                    actionCount:{},
                    error: action.payload
                }
            }
            default : return state
        }
 } 


 export default actionCountReducer