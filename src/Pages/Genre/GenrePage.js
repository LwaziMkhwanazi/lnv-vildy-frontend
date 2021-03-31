import React,{useEffect,useState} from 'react'
import PageHeader from '../../components/Uicompnents/PageHeader'

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import {makeStyles, Paper, TableBody, TableRow,TableCell} from '@material-ui/core';
import {connect} from "react-redux"
import { fetchGenres,postGenre,editGenre,deleteGenre} from '../../redux/genre/genreAyncActions';
import useTable from '../../components/Table/useTable';
import PopUp from '../../components/MuiReusableComponents/PopUp';
import ActionButton from '../../components/MuiReusableComponents/ActionButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';
import GenreForm from "./GenreForm"


const useStyles = makeStyles( theme =>({
    paper:{
        margin: '20px auto',
        padding:'15px 30px',
        maxWidth:'1100px'
    },
   
    progress:{
        position:'absolute',
        top:'21rem',
        right: '44rem'
    }
  
}))

const headCells = [
    {id:'id', label:'Genre Id'},
    {id:'name', label:'Genre Name'},
    {id:'actions', label:'Actions'},
   
]

 
function GenrePage({genres,getGenres,postGenre,deleteGenre}) {
   const records =  genres && genres.genres
    const classes = useStyles()
    const [openPopup,setOpenPopup] = useState(false)
    const [recordForEdit,setRecordForEdit] = useState(null)
    const postedGenre = genres.postedGenre
    const editedGenre = genres.editedGenre
    const deletedGenre = genres.deletedGenre
  
const {TblContainer,TblHeader,TblPagination,recordsAfterPagingAndSorting} = useTable(records,headCells)

useEffect(()=>{
    getGenres()
},[getGenres,postedGenre,editedGenre,deletedGenre])


 
    return (
        <div>
             <PageHeader icon = {<PeopleOutlineTwoToneIcon fontSize = "large" />}
            title = "Genre Page" 
            subtitle = "Add Delete Edit and Display Genre Details" />
            <Paper className = {classes.paper} >
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
                                                <DeleteIcon onClick = {()=> deleteGenre(genre)} fontSize = "small"/>
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
            <PopUp
            title = "Genre Form"
             openPopup = {openPopup}
             setOpenPopup = {setOpenPopup}
            >
             <GenreForm 
              
             setOpenPopup = {setOpenPopup}
             />
            </PopUp>  
           
        </div>
    )
}

const mapStateToProps = state => {
        return{
          
            genres: state.genres
        }
}
const mapDispatchToProps = dispatch => {
    return{
        getGenres: ()=> dispatch(fetchGenres()),
        deleteGenre: (genre) => dispatch(deleteGenre(genre)),
        editGenre:(genre) => dispatch(editGenre(genre)),
        postGenre:(genre) => dispatch(postGenre(genre))
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GenrePage)
