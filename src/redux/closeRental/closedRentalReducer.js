import * as closeTypes from "./closeTypes"

const initialState = {
    loading:false,
    closedRentals:[],
    error:''
}

const closedRentalReducer = (state = initialState,action) =>{
    switch(action.type){
        case closeTypes.POST_CLOSEDRENTAL_REQUEST:
            return{
                loading:true
            }
            case closeTypes.POST_CLOSEDRENTAL_SUCCESS:
                return{
                    loading:false,
                    closedRentals: action.payload,
                    error:''
                }
                case closeTypes.POST_CLOSEDRENTAL_FAILURE:
                    return{
                        loading:false,
                        closedRentals:[],
                        error: action.payload
                    }
            default: return state

                }
}    

    export default closedRentalReducer