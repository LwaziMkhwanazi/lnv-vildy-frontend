import React from 'react'
import {Field,useField} from "formik"
import {FormLabel,Radio,FormControlLabel,makeStyles} from "@material-ui/core"

const useStyles = makeStyles( theme => ({
  radio:{
    margin: theme.spacing(1)
  }
}))
function MuiRadio({name,label,options,...rest}) {
  const classes = useStyles()
    return (
      <div className = {classes.radio}>  
       <FormLabel style= {{marginRight:'10px'}}>{label}</FormLabel> 
          <Field>
            {
              ({field}) => options.map( option => <MyRadio name = {name} 
              key = {option.key} type = "radio" value = {option.value}  label = {option.key} />)
                
              }
            
            </Field>
      </div>  
    )
}

const MyRadio = ({label,...props}) => {
    const [field] = useField(props)
    return (<FormControlLabel {...field}
    control = {<Radio color = "primary" />} label = {label} />)
}

export default MuiRadio
