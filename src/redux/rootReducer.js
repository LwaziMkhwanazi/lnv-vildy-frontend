import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
const rootReducer = combineReducers({
    customers: customerReducer
})

export default rootReducer