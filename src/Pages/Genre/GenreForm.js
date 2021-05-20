import React,{useEffect,useState} from 'react'
import {Form,Formik} from "formik"
import {Grid,makeStyles} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';
import SaveIcon from '@material-ui/icons/Save';
import ActionButton from "../../components/MuiReusableComponents/ActionButton"
import ClearAllIcon from '@material-ui/icons/ClearAll';
import AddIcon from '@material-ui/icons/Add';
import {editGenre,postGenre,deleteGenre,fetchGenres} from "../../redux/genre/genreAyncActions"
import ConfirmDialog  from "../../components/MuiReusableComponents/ConfirmDialog"
import * as Yup from "yup" 
import {connect} from "react-redux"

const useStyles = makeStyles( theme =>({
    form:{
        '& .MuiFormControl-root':{
            width:'65%',
            margin: theme.spacing(1)
        } 
     },
  
}))



function GenreForm({editedGenre,recordForEdit,setRecordForEdit,postGenre,editGenre,deleteGenre,getGenres}) {
    let initialValues = {
        name: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().min(3).max(50).required('Genre is required'),
      
    })

   const onSubmit = (values) => {
        if(recordForEdit != null){
            editGenre(recordForEdit)
            setRecordForEdit(null)
        }else{
            postGenre(values)
            setRecordForEdit(null)
        }
       
   }

    const classes = useStyles()

    const [confirmDialog,setConfirmDialog] = useState({isOpen:false,title:'',subTitle:''})

   useEffect(()=>{
    getGenres()
   },[getGenres,postGenre,editedGenre])

   

  
const handleEdit = values =>{
    editGenre(values)
    setRecordForEdit(null)
}

const handleAdd = values =>{
  
    postGenre(values)
    setRecordForEdit(null)
    values.name = ""
}
    return (
        <div>
        <Formik
            initialValues = { recordForEdit || initialValues }
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
            enableReinitialize
        >
            {
               (formik) =>{
                   return <Form className = {classes.form}>
                            <Grid container>
                                <Grid container item xs = {6} justify = "center" alignItems = "center" >
                                    <FormikControl
                                        style = {{marginBottom:'10px'}}
                                        control = "MuiInput"
                                        name = "name"
                                        variant = "standard"
                                     
                                        label = "Genre name"
                                    />
                                </Grid>
               <Grid container item  xs = {6}>
                        <Grid direction = "row" container alignItems = "center" >
                            <Grid item>
                                <ActionButton onClick = {()=>setRecordForEdit(null)} variant = "outlined" type = "reset" >
                                    <ClearAllIcon color = "primary" />
                                    </ActionButton>
                                </Grid>
                                    
                                <Grid item>
                                <ActionButton color = "primary" disabled = {!formik.isValid} onClick = {()=>handleEdit(formik.values)} >
                                    <SaveIcon/>
                                    </ActionButton>
                                </Grid>
                                <Grid item>
                                <ActionButton variant = "outlined" disabled = {!formik.values}  onClick = {()=>handleAdd(formik.values)} >
                                    <AddIcon color = "primary"/>
                                    </ActionButton>
                                </Grid>

                </Grid>    
                   
            </Grid>                  
                
                 
        </Grid>
                   </Form>
               } 
            }
        </Formik>
        <ConfirmDialog
            confirmDialog = {confirmDialog}
            setConfirmDialog = {setConfirmDialog}
            />
        </div>   
    )
}

const mapStateToProps = state =>{
    return{
        editedGenre: state.genres.editGenre
    }
}

const mapDispatchedToProps = dispatch => {
    return{
        postGenre:(genre)=> dispatch(postGenre(genre)),
        deleteGenre: (genre) => dispatch(deleteGenre(genre)),
        editGenre:(genre) => dispatch(editGenre(genre)),
        getGenres:()=>dispatch(fetchGenres())
    }
}

export default React.memo(connect(mapStateToProps,mapDispatchedToProps)(GenreForm))