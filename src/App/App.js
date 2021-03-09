

import {createMuiTheme,ThemeProvider, CssBaseline, makeStyles} from "@material-ui/core"
import './App.css';
import Appbar from '../components/Uicompnents/Appbar';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import CustomerPage from '../Pages/Customer/CustomerPage';




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

const useStyles = makeStyles( theme =>({
  appMain:{
    width:'100%'
  }
}))

function App() {
  const classes = useStyles()
  return (
   <> 
  <ThemeProvider theme = {theme}>
        <div className={classes.appMain}>
            <Appbar/>
           <CustomerPage/>
        </div>
        <CssBaseline/>
    </ThemeProvider>
    </>
    
  );
}

export default App;
