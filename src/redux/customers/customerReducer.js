import * as customerTypes from "./customerTypes"

const initialState = {
    loading: false,
    customers:[],
    customerSuccess:{},
    editCustomer:{},
    error: ''
}

const customerReducer = (state = initialState,action) =>{
            switch(action.type){
                case customerTypes.FETCH_CUSTOMER_REQUEST:
                    return{
                        ...state,
                        loading: true
                    }
                  case customerTypes.FETCH_CUSTOMER_SUCCESS:
                      return {
                          loading: false,
                          customers: action.payload,
                          error: ''
                      }
                    case customerTypes.FETCH_CUSTOMER_FAILURE:
                        return{
                            loading: false,
                            customers:[],
                            error: action.payload
                        }
                      case customerTypes.POST_CUSTOMER_REQUEST:
                          return{
                              ...state,
                              loading:true
                          }
                       case customerTypes.POST_CUSTOMER_SUCCESS:
                           return{
                              ...state,
                              loading:false,
                              customerSuccess:action.payload
                             
                           } 
                         case customerTypes.POST_CUSTOMER_FAILURE:
                             return{
                                 loading:false,
                                 customers: [],
                                 error: action.payload
                             }
                             case customerTypes.EDIT_CUSTOMER_REQUEST:
                                return{
                                    ...state,
                                    loading:true
                                }
                             case customerTypes.EDIT_CUSTOMER_SUCCESS:
                                 return{
                                    ...state,
                                    loading:false,
                                    editCustomer:action.payload
                                   
                                 } 
                               case customerTypes.EDIT_CUSTOMER_FAILURE:
                                   return{
                                       loading:false,
                                       customers: [],
                                       error: action.payload
                                   }      
                       default: 
                            return state 
            }
}
  
export default customerReducer