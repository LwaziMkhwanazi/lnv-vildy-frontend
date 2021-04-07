
import {createMuiTheme,ThemeProvider, CssBaseline} from "@material-ui/core"
import './App.css';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import CustomerPage from '../Pages/Customer/CustomerPage';
import GenrePage from "../Pages/Genre/GenrePage";
import {Route,Switch,BrowserRouter} from "react-router-dom"
import Layout from "../components/Layout";
import MoviePage from "../Pages/Movies/MoviePage";


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

  return (
   <> 
  <ThemeProvider theme = {theme}>
  
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path = "/genres">
                    <GenrePage/>
                </Route>
                <Route path = "/customers">
                    <CustomerPage/>
                </Route>
                <Route path = "/movies">
                    <MoviePage/>
                </Route>
            </Switch>
          </Layout>  
        </BrowserRouter>
            <CssBaseline/>
  </ThemeProvider>
    </>
    
  );
}

export default App;
