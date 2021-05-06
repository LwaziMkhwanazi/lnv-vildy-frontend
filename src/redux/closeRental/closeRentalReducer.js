import * as closeRentalTypes from "./closeTypes"

const initialValues = {
    loading: false,
    rental:{},
    error:''
}

const closeRentalReducer = (state = initialValues,action) =>{
        switch(action.type){
            case closeRentalTypes.POST_CLOSERENTAL_REQUEST:
                return{
                    loading: true
                }

               case closeRentalTypes.POST_CLOSERENTAL_SUCCESS:
                   return{
                       ...state,
                       loading:false,
                       rental: action.payload
                   } 
                 case closeRentalTypes.POST_CLOSERENTAL_FAILURE:
                     return{
                         ...state,
                         loading: false,
                         rental:{},
                         error: action.payload
                     }
             default: return state
        }
}


export default closeRentalReducer