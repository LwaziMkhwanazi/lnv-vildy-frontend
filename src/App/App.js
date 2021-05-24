
import {createMuiTheme,ThemeProvider, CssBaseline} from "@material-ui/core"
import './App.css';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import CustomerPage from '../Pages/Customer/CustomerPage';
import GenrePage from "../Pages/Genre/GenrePage";
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Layout from "../components/Layout";
import MoviePage from "../Pages/Movies/MoviePage";
import UserPage from "../Pages/Users/UserPage";
import RentalPage from "../Pages/Rentals/RentalPage"
import DashboardPage from "../Pages/Dashboard/DashboardPage";
import HomeLoginPage from "../Pages/HomeLoginPage/HomeLoginPage";
import {useSelector} from "react-redux"

const theme = createMuiTheme({
  palette:{
    primary:{
      main:blue.A200
    },
    secondary:{
      main: pink[400]
    },
    background:{
      default: '#f4f5fd'
    },
  },
  
    overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  }
})



function App() {
  const auth = useSelector(state => state.auth)
    const userAuth = auth && auth.auth 
  return (
   <> 
  <ThemeProvider theme = {theme}>
  
        <BrowserRouter>
        <Layout>
            <Switch>
            <Route exact path = "/">
                    <HomeLoginPage/>
                </Route>
                {
                  userAuth && (
                    <Route exact path = "/dashboard">
                    <DashboardPage/>
                </Route>
                  )
                }
                {
                  userAuth && (
                    <Route exact path = "/genres">
                    <GenrePage/>
                   </Route>
                  )
                }
               {
                 userAuth && (
                  <Route path = "/customers">
                    <CustomerPage/>
                </Route>
                 )
               }
                {
                  userAuth && (
                    <Route path = "/movies">
                    <MoviePage/>
                  </Route>
                  )
                }
                {
                  userAuth && (
                    <Route path = "/users">
                    <UserPage/>
                     </Route>
                  )
                }
                {
                  userAuth && (
                    <Route path = "/rentals">
                    <RentalPage/>
                </Route>
                  )
                }
            </Switch>
          </Layout>  
        </BrowserRouter>
            <CssBaseline/>
  </ThemeProvider>
    </>
    
  );
}

export default App;
