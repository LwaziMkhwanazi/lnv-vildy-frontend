import React from 'react'
import {Form,Formik} from "formik"
import {Grid,makeStyles} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';
import SaveIcon from '@material-ui/icons/Save';
import ActionButton from "../../components/MuiReusableComponents/ActionButton"
import ClearAllIcon from '@material-ui/icons/ClearAll';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import {editGenre,postGenre,deleteGenre} from "../../redux/genre/genreAyncActions"
import * as Yup from "yup" 
import {connect} from "react-redux"

const useStyles = makeStyles( theme =>({
    form:{
        '& .MuiFormControl-root':{
            width:'60%',
            margin: theme.spacing(1)
        } 
     },
  
}))



function GenreForm({recordForEdit,setRecordForEdit,postGenre,editGenre,deleteGenre}) {


    let initialValues = {
        name: '',
      
     
       
    }
    const validationSchema = Yup.object({
        name: Yup.string().min(5).max(50),
      
    })

   const onSubmit = (values) => {
        postGenre(values)
   }

    const classes = useStyles()

   

    return (
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
                                <ActionButton color = "primary" onClick = {()=>editGenre(formik.values)} >
                                    <SaveIcon/>
                                    </ActionButton>
                                </Grid>
                                <Grid item>
                                <ActionButton onClick = {()=>deleteGenre(formik.values)}  color = "secondary" type = "reset" >
                                    <DeleteIcon/>
                                    </ActionButton>
                                </Grid>
                                <Grid item>
                                <ActionButton variant = "outlined"   type = "submit" >
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
    )
}
 
const mapDispatchedToProps = dispatch => {
    return{
        postGenre:(genre)=> dispatch(postGenre(genre)),
        deleteGenre: (genre) => dispatch(deleteGenre(genre)),
        editGenre:(genre) => dispatch(editGenre(genre))
    }
}

export default connect(null,mapDispatchedToProps)(GenreForm)