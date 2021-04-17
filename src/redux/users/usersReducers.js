import * as userTypes from "./userTypes"

const initialValues = {
    loading:true,
    users:[],
    error:'',
    deletedUser:{},
    postedUser:{}
}

const userReducer = (state = initialValues,action ) => {
        switch(action.type){
            case userTypes.FETCH_USER_REQUEST:
                return{
                    ...state,
                    loading: true
                }
                case userTypes.FETCH_USER_SUCCESS:
                   return {
                       ...state,
                       loading:false,
                       users: action.payload
                   }
                 case userTypes.FETCH_USER_FAILURE:
                     return{
                         ...state,
                         loading: false,
                         users:[],
                         error: action.payload
                     }
                   case userTypes.DELETE_USER_REQUEST:
                       return{
                           ...state,
                           loading: true,
                       } 
                   case userTypes.DELETE_USER_SUCCESS:
                       return{
                           ...state,
                          loading: false,
                          deletedUser: action.payload  
                       } 
                    case userTypes.DELETE_USER_FAILURE:
                        return{
                            ...state,
                            loading:false,
                            deletedUser:{},
                            error:action.payload
                        }
                        
                     case userTypes.POST_USER_REQUEST:
                         return{
                             ...state,
                             loading:true
                         }
                      case userTypes.POST_USER_SUCCESS:
                          return{
                              ...state,
                              loading: false,
                              postedUser: action.payload  
                          } 
                       case userTypes.POST_USER_FAILURE:
                           return{
                               ...state,
                               loading:false,
                               postedUser:{},
                               error: action.payload
                           }        
           
            default : return state       

        }
}

export  default userReducer