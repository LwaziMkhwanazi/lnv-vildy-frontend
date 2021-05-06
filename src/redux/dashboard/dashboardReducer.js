import * as dashboardActionTypes from "./dashboardActionTypes"

const initialValues = {
    loading:false,
    movieCount:{},
    customerCount:{},
    rentalsCount:{},
    movieError:'',
    customerError:'',
    rentalsError:''
}

const dashBoardRoducer = (state = initialValues, action) =>{
    switch(action.type){
        case dashboardActionTypes.GET_MOVIECOUNT_REQUEST:{
            return{
                loading:true
            }
        }

        case dashboardActionTypes.GET_MOVIECOUNT_SUCCESS:{
            return{
                ...state,
                loading:false,
                movieCount: action.payload,
                movieError:''
            }
        }

        case dashboardActionTypes.GET_RENTALSCOUNT_FAILURE:{
            return{
                ...state,
                loading:false,
                movieError: action.payload
            }
        }
        case dashboardActionTypes.GET_CUSTOMERCOUNT_REQUEST:{
            return{
                loading:true
            }
        }

        case dashboardActionTypes.GET_CUSTOMERCOUNT_SUCCESS:{
            return{
                ...state,
                loading:false,
                customerCount: action.payload,
                customerError:''
            }
        }

        case dashboardActionTypes.GET_CUSTOMERCOUNT_FAILURE:{
            return{
                ...state,
                loading:false,
                customerCount:{},
                customerError: action.payload
            }
        }

        case dashboardActionTypes.GET_RENTALSCOUNT_REQUEST:{
            return{
                loading:true
            }
        }

        case dashboardActionTypes.GET_RENTALSCOUNT_SUCCESS:{
            return{
                ...state,
                loading:false,
                rentalsCount: action.payload,
                rentalsError:''
            }
        }

        default: return state

    }
}

export default dashBoardRoducer