const GET_ROMANTICCOUNT_REQUEST = 'GET_ROMANTICCOUNT_REQUEST'
const GET_ROMANTICCOUNT_SUCCESS = 'GET_ROMANTICCOUNT_SUCCESS'
const GET_ROMANTICCOUNT_FAILURE = 'GET_ROMANTICCOUNT_FAILURE'

const initialState = {
    loading:false,
    romanticCount:{},
    error:''
}

 const karateRomanticReducer = (state = initialState, action) =>{
        switch(action.type){
            case GET_ROMANTICCOUNT_REQUEST:{
                return{
                    loading: true
                }
            }
            case GET_ROMANTICCOUNT_SUCCESS:{
                return{
                    loading:false,
                    romanticCount: action.payload,
                    error: ''
                }
            }
            case GET_ROMANTICCOUNT_FAILURE:{
                return{
                    loading:false,
                    romanticCount:{},
                    error: action.payload
                }
            }
            default : return state
        }
 } 


 export default karateRomanticReducer