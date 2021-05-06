import React,{useEffect,useState,useRef} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserComponent from './UserComponent';
import { makeStyles,Button } from '@material-ui/core';
import PopUp from "../../components/MuiReusableComponents/PopUp"
import {useDispatch,useSelector} from "react-redux";
import {getUsers,deleteUser} from "../../redux/users/userAysncAction"
import CircularProgress from '@material-ui/core/CircularProgress';
import Notification from "../../components/MuiReusableComponents/Notifications"
import UserForm from './UserForm';



const useStyle = makeStyles(theme =>({
    contain:{
      margin:'auto',
      textAlign:'center'  
    },

    paper:{
        margin:theme.spacing(5),
        maxWidth:450,  
    },
    progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    }
}))
function UserPage() {
    const dispatch = useDispatch()
    const users = useSelector( state => state.users)
    const classes = useStyle()
    const deletedU = users && users.deletedUser
    const addedUser = users && users.postedUser
    const [openPopup,setOpenPopup] = useState(false)
    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})


    const deletedInitialRender = useRef(true);
    const addInitialRender = useRef(true);

     // Delete

    useEffect(() => {
        if (deletedInitialRender.current) {
          deletedInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'User Deleted successfully',
                type:'error'   
            })
        }
      }, [deletedU]);


 

    //add Notification
      useEffect(() => {
        if (addInitialRender.current) {
          addInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'User added successfully',
                type:'success'   
            })
        }
      }, [addedUser]);

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
            subtitle = "Add Delete and Display Users"
            
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
            {users && users.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null}
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />
        </div>
    )
}

export default UserPage
