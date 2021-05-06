import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle, Typography,Button,makeStyles, IconButton} from "@material-ui/core"
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
const useStyles = makeStyles(theme =>({
    dailog:{
        padding: theme.spacing(2),
        position:'absolute',
        top:theme.spacing(5)
    },
    dialogContent:{
        textAlign:'center'
    },
    dialogAction:{
        justifyContent:'center'
    },
    dialogTitle:{
        textAlign:'center'
    },

    titleIcon:{
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.common.white,
         '&:hover':{
             backgroundColor:theme.palette.secondary.light,
             cursor:'default'
         },   
         '& .MuiSvgIcon-root ':{
             fontSize:'8rem'
         }
    }
    
   
}))

function ConfirmDialog({confirmDialog,setConfirmDialog}) {

    const classes = useStyles()

    return (
        <Dialog
            classes = {{paper:classes.dailog}}
            open = {confirmDialog.isOpen}
            >
            <DialogTitle className = {classes.dialogTitle}>
                <IconButton disableRipple className = {classes.titleIcon} >
                    <NotListedLocationIcon  />
                </IconButton>
            </DialogTitle>

            <DialogContent className = {classes.dialogContent}>
                <Typography variant = "h6">
                    {confirmDialog.title}
                </Typography>
                <Typography color = "secondary" variant = "subtitle2">
                    {confirmDialog.subTitle}
                </Typography>
            </DialogContent>
            
            <DialogActions className = {classes.dialogAction}>
                <Button  onClick = {()=>setConfirmDialog({...confirmDialog,isOpen:false})}  variant = "contained">NO</Button>
                <Button onClick = {confirmDialog.onConfirm} color = "secondary" variant = "contained" >Yes </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog
