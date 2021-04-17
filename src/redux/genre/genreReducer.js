import * as genreTypes from "./genreTypes"

const initialState = {
    loading: false,
    genres:[],
    postedGenre:{},
    editGenre:{},
    deletedGenre:{},
    singleGenre:{},
    error: ''
}

const genreReducer = (state = initialState,action) =>{
            switch(action.type){
                case genreTypes.FETCH_GENRE_REQUEST:
                    return{
                        ...state,
                        loading: true
                    }
                  case genreTypes.FETCH_GENRE_SUCCESS:
                      return {
                          ...state,
                          loading: false,
                          genres: action.payload,
                          error: ''
                      }
                    case genreTypes.FETCH_GENRE_FAILURE:
                        return{
                            ...state,
                            loading: false,
                            genres:[],
                            error: action.payload
                        }
                      case genreTypes.POST_GENRE_REQUEST:
                          return{
                              ...state,
                              loading:true
                          }
                       case genreTypes.POST_GENRE_SUCCESS:
                           return{
                              ...state,
                              loading:false,
                              postedGenre:action.payload
                             
                           } 
                         case genreTypes.POST_GENRE_FAILURE:
                             return{
                                 ...state,
                                 loading:false,
                                 genres: [],
                                 error: action.payload
                             }

                             case genreTypes.EDIT_GENRE_REQUEST:
                                return{
                                    ...state,
                                    loading:true
                                }
                             case genreTypes.EDIT_GENRE_SUCCESS:
                                 return{
                                    ...state,
                                    loading:false,
                                    editGenre:action.payload
                                   
                                 } 
                               case genreTypes.EDIT_GENRE_FAILURE:
                                   return{
                                       ...state,
                                       loading:false,
                                       genres: [],
                                       error: action.payload
                                   }
                                case genreTypes.DELETE_GENRE_REQUEST:
                                    return{
                                        ...state,
                                        loading: true,
                                    }
                                    case genreTypes.DELETE_GENRE_SUCCESS:
                                        return{
                                            ...state,
                                            loading: false,
                                            deletedGenre: action.payload
                                        }
                                      case genreTypes.DELETE_GENRE_FAILURE:
                                          return{
                                              ...state,
                                              loading: false,
                                              error: action.payload
                                          }
                                       case genreTypes.GETSINGLE_GENRE_REQUEST:
                                           return{
                                               ...state,
                                               loading:true
                                           }  
                                           case genreTypes.GETSINGLE_GENRE_SUCCESS:
                                               return{
                                                   ...state,
                                                   loading:false,
                                                   singleGenre: action.payload
                                               }
                                               case genreTypes.GETSINGLE_GENRE_FAILURE:
                                                   return{
                                                       ...state,
                                                       loading:false,
                                                       error: action.payload
                                                   }            
                       default: 
                            return state 
            }
}
  
export default genreReducer