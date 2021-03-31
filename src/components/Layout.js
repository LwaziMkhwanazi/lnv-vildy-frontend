import { Drawer, makeStyles, Typography,List,ListItemIcon,ListItemText,ListItem } from '@material-ui/core'
import React from 'react'
import Appbar from "../components/Uicompnents/Appbar";
import MovieIcon from '@material-ui/icons/Movie';
import { CategoryRounded } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import { useHistory,useLocation } from 'react-router';


const drawerWidth = 220
const useStyles = makeStyles( theme =>({
    drawer:{
        width: drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    root:{
        display:'flex'
    },
    children:{
        width:'100%'
    },
    active:{
        background:'#f4f4f4'
    },
    title:{
        padding: theme.spacing(3)
    }
}))
function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text:'Movies',
            icon:  <MovieIcon color = "primary"/>,
            path: '/movies' 
        },
        {
            text:'Genres',
            icon:  <CategoryRounded color = "primary"/>,
            path: '/genres' 
        },
        {
            text:'Rentals',
            icon:  <LocalMoviesIcon color = "primary"/>,
            path: '/rentals' 
        },
        {
            text:'Customers',
            icon:  <PeopleIcon color = "primary"/>,
            path: '/customers' 
        },
        {
            text:'Users',
            icon:  <AccountBoxIcon color = "primary"/>,
            path: '/users' 
        },
       
    ]
    return (
        <div className = {classes.root}>
           
            <Drawer
                className = {classes.drawer}
                variant = "permanent"
                anchor = "left"
                classes = {{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography align = "center" className = {classes.title} variant = "h5" color = "primary" >
                        Lnv Vidly
                    </Typography>
                </div>
                <List>
                    {
                      menuItems.map( item =>(
                          <ListItem button key ={item.text} 
                          onClick = {()=> history.push(item.path) } 
                          className = {location.pathname === item.path? classes.active : null}
                          >
                              <ListItemIcon>{item.icon}</ListItemIcon>
                              <ListItemText>{item.text}</ListItemText>
                          </ListItem>
                      ))  
                    }
                </List>
            </Drawer>

            <div className = {classes.children}>
             <Appbar/>
            {children} 
            </div>
           
        </div>
    )
}

export default Layout
