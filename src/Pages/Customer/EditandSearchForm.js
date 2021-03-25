import React from 'react'
import {Grid,makeStyles,Button} from "@material-ui/core"
import FormikControl from '../../components/Form/FormikControl';

import {connect} from "react-redux"


const useStyles = makeStyles( theme =>({
    form:{
        '& .MuiFormControl-root':{
            width:'90%',
            margin: theme.spacing(1)
        } 
     },
  
}))



fu
    const classes = useStyles()

   

    return (
        
                   <Form className = {classes.form}>
                            <Grid container>
                                <Grid item xs = {6}> 
                                    <FormikControl
                                        control = "MuiInput"
                                        name = "name"
                                        label = "Name"
                                    />

                                    <FormikControl
                                        control = "MuiRadio"
                                        name = "isGold"
                                        label = "Is Gold"
                                        error = {formik.errors.isGold}
                                        touched = {formik.touched.isGold}
                                        options = {isGold}
                                    />
                                
                                </Grid>
                                <Grid item xs = {6}>
                                <FormikControl
                                        control = "MuiInput"
                                        name = "phone"
                                        label = "Phone Number"

                                    />
                                    <Button style = {{marginRight:'8px',marginLeft:'8px'}} variant = "contained" type = "reset">Reset</Button>
                                        <Button disabled = {!formik.isValid} color = "primary" type = "submit" variant = "contained" >Submit</Button>
                                  
                                </Grid>
                            </Grid>
                   </Form>
          
    )
}

const mapDispatchToProps = dispatch =>{
    return{
     
    }
}
export default connect(null,mapDispatchToProps)(CustomersForm)