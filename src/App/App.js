
import Sidemenu from '../components/Uicompnents/Sidemenu';
import {createMuiTheme,ThemeProvider, CssBaseline, makeStyles} from "@material-ui/core"
import './App.css';
import Appbar from '../components/Uicompnents/Appbar';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";




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
    }
  }
})

const useStyles = makeStyles( theme =>({
  appMain:{
   marginLeft:'320px',
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
        </div>
        <CssBaseline/>
    </ThemeProvider>
    </>
    
  );
}

export default App;
