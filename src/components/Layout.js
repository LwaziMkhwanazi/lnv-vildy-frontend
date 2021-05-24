import { Drawer, makeStyles,List,ListItemIcon,ListItemText,ListItem } from '@material-ui/core'
import React from 'react'
import Appbar from "../components/Uicompnents/Appbar";
import MovieIcon from '@material-ui/icons/Movie';
import { CategoryRounded } from '@material-ui/icons';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import { useHistory,useLocation } from 'react-router';
import PollIcon from '@material-ui/icons/Poll';
import {useSelector} from "react-redux";


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
      marginTop:theme.spacing(7)
       
    },
    menuItems:{
        fontSize:'14px',
        lineHeight:'25px',
        color:'#6b778c',
        fontWeight:'600',
        fontStyle:"normal",
        
    }
}))
function Layout({children}) {

    
    const auth = useSelector(state => state.auth)
    const userAuth = auth && auth.auth 

    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text:'Dashboard',
            icon:  <PollIcon color = "primary"/>,
            path: '/dashboard' 
        },
        {
            text:'Movies',
            icon:  <MovieIcon color = "#6b778c"/>,
            path: '/movies' 
        },
        {
            text:'Genres',
            icon:  <CategoryRounded color = "#6b778c"/>,
            path: '/genres' 
        },
        {
            text:'Rentals',
            icon:  <LocalMoviesIcon color = "#6b778c"/>,
            path: '/rentals' 
        },
        {
            text:'Customers',
            icon:  <PeopleIcon color = "#6b778c"/>,
            path: '/customers' 
        },
        {
            text:'Users',
            icon:  <AccountBoxIcon color = "#6b778c"/>,
            path: '/users' 
        },
       
    ]

    const drawer = (
           
            <Drawer
                className = {classes.drawer}
                variant = "permanent"
                anchor = "left"
                classes = {{paper: classes.drawerPaper}}
                    >
                <div className ={classes.title} ></div>
                <List>
                    {
                      menuItems.map( item =>(
                          <ListItem button key ={item.text} 
                          onClick = {()=> history.push(item.path) } 
                          className = {location.pathname === item.path? classes.active : null}
                          >
                              <ListItemIcon className = {classes.menuItems} >{item.icon}</ListItemIcon>
                              <ListItemText className = {classes.menuItems}>{item.text}</ListItemText>
                          </ListItem>
                      ))  
                    }
                </List>
            </Drawer>
    )
    return (
        <div className = {classes.root}>
                {
                   userAuth && (drawer)
                }

            <div className = {classes.children}>
             <Appbar/>
            {children} 
            </div>
           
        </div>
    )
}

export default Layout
