import React from 'react'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { Badge, IconButton } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import {makeStyles} from "@material-ui/styles";

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
    const classes = useStyles()
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
                        <IconButton>
                           <PowerSettingsNewIcon fontSize = "small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar
