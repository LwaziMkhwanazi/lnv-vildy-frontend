import React from 'react'
import {Field} from "formik"
import {TextField,MenuItem} from "@material-ui/core"
function MuiObjectSelect({name,label,options,error = null,touched,...rest}) {
        
    return (
        <Field name = {name} as = {TextField} select label = {label}
           {...rest} 
            helperText = {touched && error ? error : null} 
            error = {touched && error ? true: false}
         >
  
          { 
            options.map( option =>{
                return <MenuItem key = {option._id} value = {option._id} >
                            {option.name}
                        </MenuItem>
            })
          } 
       
        </Field>
    )
}

export default MuiObjectSelect
