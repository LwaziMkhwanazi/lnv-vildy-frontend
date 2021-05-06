import * as movieTypes from "./movieTypes"

 const initialValues = {
    loading: false,
    movies:[],
    error:'',
    deletedMovie:{},
    postMovieSuccess:{},
    editedMovie:{},
   
}

const moviesReducer = (state = initialValues,action) =>{
        switch(action.type){
            case movieTypes.FETCH_MOVIE_REQUEST:
                return{
                    ...state,
                    loading:true,
                }
             case movieTypes.FETCH_MOVIE_SUCCESS:
                 return{
                     ...state,
                     loading:false,
                     movies:action.payload,

                 }
              case movieTypes.FETCH_MOVIE_FAILURE:
                  return{
                      ...state,
                      loading:false,
                      movies:[],
                      error: action.payload
                  }

                case movieTypes.POST_MOVIE_REQUEST:
                    return{
                        ...state,
                        loading:true,
                    }
                    case movieTypes.POST_MOVIE_SUCCESS:
                        return{
                            ...state,
                            postMovieSuccess:action.payload,
                            error:''
                        } 
                       case movieTypes.POST_MOVIE_FAILURE:
                           return{
                               ...state,
                               movies:[],
                               error: action.payload
                           }
                        case movieTypes.DELETE_MOVIE_REQUEST:
                            return{
                                ...state,
                                loading:true,

                            } 
                           case movieTypes.DELETE_MOVIE_SUCCESS:
                               return{
                                   ...state,
                                   loading:false,
                                   deletedMovie: action.payload
                               }
                             case movieTypes.DELETE_MOVIE_FAILURE:
                                 return{
                                     ...state,
                                     deletedMovie:{},
                                     error:action.payload
                                 }
                             case movieTypes.EDIT_MOVIE_REQUEST:
                                 return{
                                     ...state,
                                     loading: true
                                 }
                              case movieTypes.EDIT_MOVIE_SUCCESS:
                                  return{
                                      ...state,
                                      loading: false,
                                      editedMovie: action.payload,
                                      error:''
                                  }
                              case movieTypes.EDIT_MOVIE_FAILURE:
                                  return{
                                      ...state,
                                      loading:false,
                                      editedMovie:'',
                                      error: action.payload

                                  }                  
                default: 
                       return state         
        }
}

export default moviesReducer