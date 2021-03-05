
import Sidemenu from '../components/Uicompnents/Sidemenu';
import {createMuiTheme,ThemeProvider, CssBaseline, makeStyles} from "@material-ui/core"
import './App.css';
import Appbar from '../components/Uicompnents/Appbar';
import blue from "@material-ui/core/colors/blue";
import pink from "@material-ui/core/colors/pink";
import PageHeader from '../components/Uicompnents/PageHeader';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';




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
  shape:{
    borderRadius:'10px'
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
            <PageHeader 
              title = "Page Header"
              icon = {<PeopleOutlineTwoToneIcon fontSize = 'large' />} 
              subtitle = "Page subtitle"
              />
        </div>
        <CssBaseline/>
    </ThemeProvider>
    </>
    
  );
}

export default App;
