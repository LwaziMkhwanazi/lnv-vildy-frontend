import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
import genreReducer from "./genre/genreReducer"
const rootReducer = combineReducers({
    customers: customerReducer,
    genres:genreReducer
})

export default rootReducer