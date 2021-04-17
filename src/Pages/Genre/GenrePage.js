import React,{useEffect,useState} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {makeStyles, Paper, TableBody, TableRow,TableCell,Container} from '@material-ui/core';
import { fetchGenres,deleteGenre} from '../../redux/genre/genreAyncActions';
import useTable from '../../components/Table/useTable';
import PopUp from '../../components/MuiReusableComponents/PopUp';
import ActionButton from '../../components/MuiReusableComponents/ActionButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import GenreForm from "./GenreForm"


const useStyles = makeStyles( theme =>({
    container:{
        marginTop:theme.spacing(2),
        padding:'15px 30px',
    
    },
   
    progress:{
        position:'absolute',
        top:'21rem',
        right: '36rem'
    }
  
}))

const headCells = [
    {id:'id', label:'Genre Id'},
    {id:'name', label:'Genre Name'},
    {id:'actions', label:'Actions'},
   
]

 
function GenrePage() {
  
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
    const [recordForEdit,setRecordForEdit] = useState(null)
   
  
const dispatch = useDispatch()
const genres = useSelector(state => state.genres)
const postedGenre = genres.postedGenre
const editedGenre = genres.editedGenre
const deletedGenre = genres.deletedGenre
const records =  genres && genres.genres


console.log('Edited Genre',editedGenre)

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
             <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />}
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
                                        <TableCell size = "small"  align = "center" >{genre._id}</TableCell>
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
           
        </div>
    )
}



export default GenrePage
