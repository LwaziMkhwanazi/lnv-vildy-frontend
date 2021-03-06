import React from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import CustomerForm from './CustomerForm'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

function CustomerPage() {
    return (
        <div>
            <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />} 
            title = "Customer Page" 
            subtitle = "Add and Delete Customer Details" />
            <CustomerForm/>
        </div>
    )
}

export default CustomerPage
