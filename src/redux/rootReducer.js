import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
import genreReducer from "./genre/genreReducer"
import moviesReducer from "./movies/movieReducer"
import userReducer from "./users/usersReducers"
const rootReducer = combineReducers({
    customers: customerReducer,
    genres:genreReducer,
    movies: moviesReducer,
    users: userReducer
})

export default rootReducer