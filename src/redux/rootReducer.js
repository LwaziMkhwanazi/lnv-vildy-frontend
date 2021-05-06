import {combineReducers} from "redux"
import customerReducer from "./customers/customerReducer"
import genreReducer from "./genre/genreReducer"
import moviesReducer from "./movies/movieReducer"
import userReducer from "./users/usersReducers"
import rentalReducer from "./rentals/rentalReducer"
import closeRentalReducer from "./closeRental/closeRentalReducer"
import dashBoardRoducer from "./dashboard/dashboardReducer"
import closedRentalReducer from "./closeRental/closedRentalReducer"

const rootReducer = combineReducers({
    customers: customerReducer,
    genres:genreReducer,
    movies: moviesReducer,
    users: userReducer,
    rentals: rentalReducer,
    closeRental: closeRentalReducer,
    dashboard:dashBoardRoducer,
    closedRentals: closedRentalReducer
})

export default rootReducer