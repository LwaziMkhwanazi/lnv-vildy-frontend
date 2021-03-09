import React from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import CustomerForm from './CustomerForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles( theme =>({
    paper:{
        margin: theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

function CustomerPage() {
    const classes = useStyles()
    return (
        <div>
            <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />} 
            title = "Customer Page" 
            subtitle = "Add and Delete Customer Details" />
            <Paper className = {classes.paper} >
                <CustomerForm/>
            </Paper>
        </div>
    )
}

export default CustomerPage
