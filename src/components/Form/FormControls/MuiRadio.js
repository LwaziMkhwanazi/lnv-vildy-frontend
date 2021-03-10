import React from 'react'
import {Field,useField} from "formik"
import {FormLabel,Radio,FormControlLabel,makeStyles, FormHelperText} from "@material-ui/core"

const useStyles = makeStyles( theme => ({
  radio:{
    margin: theme.spacing(1),
    marginLeft:'16px'
  }
}))
function MuiRadio({name,label,options,error = null,touched,...rest}) {
  const classes = useStyles()
    return (
      <div className = {classes.radio}>  
       <FormLabel style= {{marginRight:'10px'}}>{label}</FormLabel> 
          <Field name = {name}>
            {
              ({field,form}) => options.map( option => <MyRadio name = {name} 
              key = {option.key} type = "radio" value = {option.value}  label = {option.key} />)
            
              }

            </Field>
            {error && <FormHelperText style = {{marginLeft:'16px'}} error = { touched && error? true: false} >{touched && error}</FormHelperText>}
      </div>  
    )
}

const MyRadio = ({label,...props}) => {
    const [field] = useField(props)
  
    return (<FormControlLabel {...field}
    control = {<Radio color = "primary" />} label = {label} />)
}

export default MuiRadio
