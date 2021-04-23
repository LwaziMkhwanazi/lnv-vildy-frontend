import * as rentalTypes from "./rentalTypes"

const initialValues = {
    loading:false,
    rentals:[],
    error:''
}

const rentalReducer = (state = initialValues,action) =>{
    switch(action.type){
        case rentalTypes.FETCH_RENTAL_REQUEST:
            return{
                ...state,
                loading:true
            }
            case rentalTypes.FETCH_RENTAL_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    rentals: action.payload
                }
                case rentalTypes.FETCH_RENTAL_FAILURE:
                    return{
                        ...state,
                        loading:false,
                        rentals:[],
                        error: action.payload
                    }

            default:
                return state

    }
}


export default rentalReducer