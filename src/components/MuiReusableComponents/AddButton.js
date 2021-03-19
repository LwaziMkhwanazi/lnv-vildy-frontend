import { Button,makeStyles } from '@material-ui/core'
import React from 'react'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles( theme => ({
    button:{
        backgroundColor:'#fff' ,
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
        textTransform:'none'
        
    }
}))

function AddButton() {
    const classes = useStyles()
    return (
        <Button startIcon = {<AddIcon/>} className = {classes.button} 
                variant = "outlined" size = "medium">
                Add New
        </Button>
    )
}

export default AddButton
