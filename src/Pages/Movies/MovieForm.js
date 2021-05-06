import React,{useEffect} from 'react'
import {Formik,Form} from "formik"
import {Grid,makeStyles,Button, Container} from "@material-ui/core"
import FormikControl from "../../components/Form/FormikControl"
import {connect} from "react-redux"
import {fetchGenres} from "../../redux/genre/genreAyncActions"
import {postMovie,editMovie} from "../../redux/movies/movieAyncActions"
import CircularProgress from '@material-ui/core/CircularProgress';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as Yup from "yup"
 const useStyles = makeStyles(theme =>({
    form:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin: theme.spacing(1)
        } 
     },
     progress:{
        position:'absolute',
        top:'21rem',
        right: '37rem'
    },
    buttons:{
      margin: theme.spacing(1),
      textTransform:'none'
    }
 }))

function MovieForm({ genres,getGenres,postMovie,recordForEdit,editSingleMovie,setOpenPopup}) {
    const genreData = genres && genres.genres && genres.genres 
    useEffect(()=>{
        getGenres()
    },[getGenres])
   
    
    const classes = useStyles()
         const initialValues = {
             title:'',
             genreId:'',
             numberInStock:'',
             dailyRentalRate:'',
         }

     
const handleSubmit = values =>{
    
    if(recordForEdit != null){
        editSingleMovie(values)
    
    }else{
        postMovie(values)
        setOpenPopup(false)
    }

}

if(genreData === undefined) return <CircularProgress className = {classes.progress} size = "2rem" /> 

const validationSchema = Yup.object({
    title:Yup.string().required('Title is Required').min(3).max(225),
    numberInStock: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(1,'Must be greater than 1').max(200,'Must be less than 200').required('Number In Stock is Required'),
    dailyRentalRate: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(1,'Must be greater than 1').max(200,'Must be less than 200').required('Daily Rate is Required'),
    genreId: Yup.string().required('Genre is Requred')
   
})

    const form = (
          <Formik
          initialValues = { recordForEdit || initialValues}
          enableReinitialize
          onSubmit = {handleSubmit}
          validationSchema = {validationSchema}
          >
            {
                (formik) => (
                        <Form className ={classes.form}  >
                           <Grid container>
                                <Grid  item md = {6}>
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "title"
                                        label= "Title"
                                    />
                                  <FormikControl
                                    control = "MuiInput"
                                    name = "numberInStock"
                                    label = "Number In Stock"
                                  />
                                  
                                </Grid>
                                <Grid item md = {6}>
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "dailyRentalRate"
                                        InputProps={{
                                                startAdornment: <InputAdornment position="start">SZL</InputAdornment>,
                                            }}
                                        label = "Daily Rental Rate"
                                    />
                               
                                    <FormikControl
                                        control = "MuiObjectSelect"
                                        name = "genreId"
                                        label = "Genre"
                                        variant = "outlined"
                                        error = {formik.errors.genreId}
                                        touched = {formik.touched.genreId}
                                        options = {genreData}
                                    />
                                    <Button className = {classes.buttons} style = {{marginRight:'8px',marginLeft:'8px'}}
                                     variant = "contained" type = "reset">Reset</Button>
                                        <Button className = {classes.buttons} disabled = {!formik.isValid}
                                        color = "primary" type = "submit" variant = "contained" >{recordForEdit? "Save Changes":"Submit"}</Button>
                                      
                                </Grid>
                            </Grid> 
                           
                        </Form>   
                )
            }
        </Formik>
    )


    return (
        <Container maxWidth = "md">
            { genres.loading? <CircularProgress className = {classes.progress} size = "2rem" /> : form}
        </Container>
      
    )
}

const mapStateToProps = state =>{
    return{
        genres: state.genres
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getGenres:() => dispatch(fetchGenres()),
        postMovie:(movie) => dispatch(postMovie(movie)),
        editSingleMovie:(movie) => dispatch(editMovie(movie))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieForm)

