const GET_COMEDYCOUNT_REQUEST = 'GET_COMEDYCOUNT_REQUEST'
  const GET_COMEDYCOUNT_SUCCESS = 'GET_COMEDYCOUNT_SUCCESS' 
  const GET_COMEDYCOUNT_FAILURE = 'GET_COMEDYCOUNT_FAILURE'  

const initialState = {
    loading:false,
    comedyCount:{},
    error:''
}

 const comedyCountReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_COMEDYCOUNT_REQUEST:{
                return{
                    loading: true
                }
            }
            case GET_COMEDYCOUNT_SUCCESS:{
                return{
                    loading:false,
                    comedyCount: action.payload,
                    error: ''
                }
            }
            case GET_COMEDYCOUNT_FAILURE:{
                return{
                    loading:false,
                    actionCount:{},
                    error: action.payload
                }
            }
            default : return state
        }
 } 


 export default comedyCountReducer