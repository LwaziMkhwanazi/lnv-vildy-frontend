
import React from 'react'
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles( theme =>({
    sidemenu:{
        display:'flex',
        width:'320px',
        position:'absolute',
        left:'0',
        color:'#ffffff',
        height:'100%',
        backgroundColor:'#0dbdf7'
    },
    toolbar: theme.mixins.toolbar
    
}))


function Sidemenu() {
    const classes = useStyles()
   
    return (
        <div className = {classes.sidemenu}>
        <div className={classes.toolbar} />
            sidemenu
        </div>
    )
}

export default Sidemenu
