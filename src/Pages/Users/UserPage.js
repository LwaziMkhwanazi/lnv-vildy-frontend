import React,{useEffect,useState} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserComponent from './UserComponent';
import { makeStyles,Button } from '@material-ui/core';
import PopUp from "../../components/MuiReusableComponents/PopUp"
import {useDispatch,useSelector} from "react-redux";
import {getUsers,deleteUser} from "../../redux/users/userAysncAction"
import UserForm from './UserForm';


const useStyle = makeStyles(theme =>({
    contain:{
      margin:'auto',
      textAlign:'center'  
    },

    paper:{
        margin:theme.spacing(5),
        maxWidth:450,  
    }
}))
function UserPage() {
    const dispatch = useDispatch()
    const users = useSelector( state => state.users)
    const classes = useStyle()
    const deletedU = users && users.deletedUser
    const addedUser = users && users.postedUser
    const [openPopup,setOpenPopup] = useState(false)

    useEffect(()=>{
        dispatch(getUsers())
    },[dispatch,deletedU,addedUser])

const handleDelet = (id) =>{
    dispatch(deleteUser(id))
}

    return (
        <div >
            <PageHeader icon = {<AccountCircleIcon fontSize = "large" />}
            title = "User Page" 
            subtitle = "Add Delete Edit and Display Users"
            
            />
            <Button onClick = {()=> setOpenPopup(true)} className = {classes.button} fullWidth variant = "contained" color = "primary">Add User</Button>
            

            <div className = {classes.contain}>
              {
                  users && users.users.map( user =>{
                       return <UserComponent key = {user._id} name = {user.name}  
                       email = {user.email}  admin = {user.isAdmin.toString() } 
                            deleteUser = {()=>handleDelet(user._id)}
                        />
                  })
              }
                
            </div>
            <PopUp
            title = "Add User Form"
             openPopup = {openPopup}
              setOpenPopup = {setOpenPopup}
             width = "sm"
            >
             <UserForm  setOpenPopup = {setOpenPopup}/>
            </PopUp>
        </div>
    )
}

export default UserPage
