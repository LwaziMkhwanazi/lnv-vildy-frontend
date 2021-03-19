import { Dialog, DialogContent, DialogTitle, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import MuiControls from "./MuiControls"
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles( theme => ({
    dialogWrapper:{
        padding: theme.spacing(2),
        position:'absolute',
        top: theme.spacing(5)
    },
    DialogTitle:{
        paddingRight:'0px'
    }
}))

function PopUp({title,children,openPopup,setOpenPopup}) {
    const classes = useStyles()
    return (
        <Dialog open = {openPopup} maxWidth = "md" classes = {{paper:classes.dialogWrapper}} >
            <DialogTitle className = {classes.DialogTitle} >
               <div style = {{display:'flex'}}> 
               <Typography variant = "h6" component = "div" style = {{flexGrow:1}}>
                   {title}
               </Typography>
                <MuiControls.ActionButton
                    color = "secondary"
                    text = "X"
                    onClick = {()=>setOpenPopup(false)}
                >
                  <CloseIcon color = "#fff" />
                </MuiControls.ActionButton>
                
               </div>
            </DialogTitle>
            <DialogContent dividers>
                 {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp
