import React from 'react'
import {Field} from "formik"
import {TextField,MenuItem} from "@material-ui/core"
function Muiselect({name,label,options,error = null,touched,...rest}) {
        
    return (
        <Field name = {name} as = {TextField} select  label = {label}
            variant = "outlined" {...rest} 
            helperText = {touched && error ? error : null} error = {touched && error ? true: false}
         >
  
          { 
            options.map( option =>{
                return <MenuItem key = {option.key} value = {option.value} >
                            {option.key}
                        </MenuItem>
            })
          } 
       
        </Field>
    )
}

export default Muiselect
