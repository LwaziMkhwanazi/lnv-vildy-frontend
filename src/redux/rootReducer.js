import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
import genreReducer from "./genre/genreReducer"
import moviesReducer from "./movies/movieReducer"
const rootReducer = combineReducers({
    customers: customerReducer,
    genres:genreReducer,
    movies: moviesReducer
})

export default rootReducer