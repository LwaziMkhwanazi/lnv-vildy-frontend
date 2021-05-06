import React,{useEffect,useState,useRef} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'
import {makeStyles, Paper, TableBody, TableRow,TableCell,Container} from '@material-ui/core';
import { fetchGenres,deleteGenre} from '../../redux/genre/genreAyncActions';
import useTable from '../../components/Table/useTable';
import PopUp from '../../components/MuiReusableComponents/PopUp';
import ActionButton from '../../components/MuiReusableComponents/ActionButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Notification from "../../components/MuiReusableComponents/Notifications"
import { CategoryRounded } from '@material-ui/icons';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import GenreForm from "./GenreForm"



const useStyles = makeStyles( theme =>({
    container:{
        marginTop:theme.spacing(2),
        padding:'15px 30px',
        maxWidth:'900px'
    
    },
   
    progress:{
        position:'absolute',
        top:'21rem',
        right: '36rem'
    }
  
}))

const headCells = [
    {id:'name', label:'Genre Name'},
    {id:'actions', label:'Actions'},
   
]

 
function GenrePage() {
  
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
    const [recordForEdit,setRecordForEdit] = useState(null)
    const [notify,setNotify] = useState({isOpen:false,message:'',type:''})
   
  
const dispatch = useDispatch()
const genres = useSelector(state => state.genres)
const postedGenre = genres.postedGenre
const editedGenre = genres.editedGenre
const deletedGenre = genres.deletedGenre
const records =  genres && genres.genres


console.log('Edited Genre',editedGenre)



const addInitialRender = useRef(true);

//add Notification
      useEffect(() => {
        if (addInitialRender.current) {
          addInitialRender.current = false;
        } else {
            setNotify({
                isOpen:true,
                message:'Genre added successfully',
                type:'success'   
            })
        }
      }, [deletedGenre]);

const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)
   
    useEffect(()=>{
        dispatch(fetchGenres())
    },[dispatch,editedGenre,postedGenre,deletedGenre])

const handleDelete = values =>{
    dispatch(deleteGenre(values))
    setRecordForEdit(null)
}
 
    return (
        <div>
             <PageHeader icon = {<CategoryRounded fontSize = "large" />}
            title = "Genre Page" 
            subtitle = "Add Delete Edit and Display Genre Details" />
            <Container className = {classes.container}>
            <Paper >
                     <GenreForm recordForEdit = {recordForEdit } setRecordForEdit = {setRecordForEdit} />
                   <TblContainer>
                      <TblHeader/>
                        <TableBody>
                            {
                             recordsAfterPagingAndSorting().map( genre =>(
                                        <TableRow key = {genre._id}>
                                      
                                            <TableCell size = "small"  align = "center" >{genre.name}</TableCell>
                                            
                                            <TableCell  size = "small" align = "center">
                                                <ActionButton
                                                    color = "primary"
                                                    onClick = {()=> setRecordForEdit(genre)}
                                                >
                                                <EditOutlinedIcon fontSize = "small" />
                                                </ActionButton>
                                                <ActionButton
                                                    color = "secondary"
                                                >
                                                <DeleteIcon onClick = {()=>handleDelete(genre)} fontSize = "small"/>
                                                </ActionButton>
                                                   
                                            </TableCell>
                                        </TableRow>
                                ))
                            }
                        </TableBody>
                  </TblContainer>
                 <TblPagination/>
                  {genres && genres.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : null} 
            </Paper>
            </Container>
            <PopUp
            title = "Genre Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
            >
             <GenreForm 
             recordForEdit = {recordForEdit}
             setOpenPopup = {setOpenPopup}
             />
            </PopUp>  
            <Notification
                 notify = {notify}
                 setNotify = {setNotify}   
            />
        </div>
    )
}



export default GenrePage
