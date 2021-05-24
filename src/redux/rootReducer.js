import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
import genreReducer from "./genre/genreReducer"
import moviesReducer from "./movies/movieReducer"
import userReducer from "./users/usersReducers"
import rentalReducer from "./rentals/rentalReducer"
import closeRentalReducer from "./closeRental/closeRentalReducer"
import dashBoardRoducer from "./dashboard/dashboardReducer"
import closedRentalReducer from "./closeRental/closedRentalReducer"
import actionCountReducer from './dashboard/actionCountReducer'
import comedyCountReducer from "./dashboard/comedyCountReducer"
import karateCountReducer from "./dashboard/karateCountReducer"
import karateRomanticReducer from "./dashboard/romanticCountReducer"
import seriesCountReducer from "./dashboard/seriesCountReducer"
import authReducer from "./auth/authReducer"

const rootReducer = combineReducers({
    customers: customerReducer,
    genres:genreReducer,
    movies: moviesReducer,
    users: userReducer,
    rentals: rentalReducer,
    closeRental: closeRentalReducer,
    dashboard:dashBoardRoducer,
    closedRentals: closedRentalReducer,
    actionCount: actionCountReducer,
    comedyCount: comedyCountReducer,
    karateCount: karateCountReducer,
    romanticCount: karateRomanticReducer,
    seriesCount:seriesCountReducer,
    auth:authReducer
})

export default rootReducer