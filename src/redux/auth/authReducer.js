import * as authActionTypes from "./authActions"

const initialValues = {
    loading:false,
    auth:null,
    error:''
}

const authReducer = (state = initialValues,action) =>{
    switch(action.type){
        case authActionTypes.FETCH_LOGINAUTH_REQUEST:
            return{
                loading:true
            }
            case authActionTypes.FETCH_LOGINAUTH_SUCCESS:
                return{
                    loading:false,
                    auth: action.payload,
                    error:''
                }
                case authActionTypes.FETCH_LOGINAUTH_FAILURE:
                    return{
                        loading: false,
                        auth:'',
                        arror: action.payload
                    }

                    case authActionTypes.FETCH_LOGOUTAUTH_REQUEST:
                        return{
                            loading:true
                        }
                        case authActionTypes.FETCH_LOGOUTAUTH_SUCCESS:
                            return{
                                loading:false,
                                auth: null,
                                error:''  
                            }

                            case authActionTypes.FETCH_LOGOUTAUTH_FAILURE:
                                return{
                                    loading:false,
                                    auth:'',
                                    error: action.payload
                                }
                    default: return state
    }
}


export default authReducer