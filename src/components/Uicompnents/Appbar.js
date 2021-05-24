import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { Badge, IconButton } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {logOUtAuth} from "../../redux/auth/authAyncAction";
import {makeStyles} from "@material-ui/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch,useSelector} from "react-redux";
import {useHistory} from "react-router-dom";


const useStyles = makeStyles( theme => ({
    appBar:{
        backgroundColor:'#fff',
        
    },
    searchInput:{
        opacity: '0.6',
        paddind: '0px 8px',
        fontSize: '0.8rem',
        '&:hover':{
         backgroundColor: '#f2f2f2'       
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    },
   
}))
function Appbar() {
    const history = useHistory()
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const userAuth = auth && auth.auth 
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      dispatch(logOUtAuth(history))
    
    setAnchorEl(null);
  };
    console.log(userAuth)

    return (
        <AppBar position = "static" className = {classes.appBar}>
            <Toolbar>
                <Grid container alignItems = "center">
                    <Grid item sm></Grid>
                    <Grid item  >
                        <IconButton>
                            <Badge badgeContent = {5} color = "secondary" >
                                <NotificationsNoneIcon fontSize = "small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {4} color = "secondary" >
                                <ChatBubbleOutlineIcon fontSize = "small" />
                            </Badge>
                        </IconButton>
                        { userAuth && (
                            <IconButton onClick={handleClick}>
                           <PowerSettingsNewIcon fontSize = "small" />
                        </IconButton>
                        )
                            
                        }
                       
                    </Grid>
                </Grid>
            </Toolbar>
            <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Appbar
