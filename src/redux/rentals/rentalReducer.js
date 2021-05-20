import * as rentalTypes from "./rentalTypes"

const initialValues = {
    loading:false,
    rentals:[],
    error:'',
    postedRental:{}
}

const rentalReducer = (state = initialValues,action) =>{
    switch(action.type){
        case rentalTypes.FETCH_RENTAL_REQUEST:
            return{
                loading:true
            }
            case rentalTypes.FETCH_RENTAL_SUCCESS:
                return{
                    loading:false,
                    rentals: action.payload,
                    error:'',
                    postedRental:{}
                }
                case rentalTypes.FETCH_RENTAL_FAILURE:
                    return{
                        loading:false,
                        rentals:[],
                        error: action.payload,
                        postedRental:{}
                    }
                 case rentalTypes.POST_RENTAL_REQUEST:
                     return{
                         loading:true
                     }
                     case rentalTypes.POST_RENTAL_SUCCESS:
                         return{
                             loading: false,
                             postedRental: action.payload,
                             error:'',
                            rentals:[]
                         }
                         case rentalTypes.POST_RENTAL_FAILURE:
                             return{
                                loading:false,
                                error: action.payload,
                                postedRental:{},
                                rentals:[]
                             }   

            default:
                return state

    }
}


export default rentalReducer