import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import {makeStyles} from "@material-ui/core"
const useStyles = makeStyles(theme =>({
    root:{
        top:theme.spacing(9.5)
    },
    
  
}))

function Notifications({notify,setNotify}) {
    const classes = useStyles()

    const handleClose = (event,reason) =>{
            setNotify({
                ...notify,
                isOpen:false
            })
    }

    return (
        <Snackbar 
        className = {classes.root}
            onClose = {handleClose}
         open = {notify.isOpen}
         autoHideDuration = {2000}
         anchorOrigin = {{vertical:'top',horizontal:'right'}}
          >
            <Alert
             severity = {notify.type}
                 >
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notifications
