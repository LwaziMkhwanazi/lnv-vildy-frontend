import React from 'react'
import {Field,ErrorMessage} from "formik"
import {TextField,MenuItem, FormHelperText} from "@material-ui/core"
function Muiselect({name,label,options,...rest}) {
    return (
        <Field name = {name} as = {TextField} select  label = {label}
            variant = "outlined" {...rest}
            
         >
          {
            options.map( option =>{
                return <MenuItem key = {option.key} value = {option.value} >
                            {option.key}
                        </MenuItem>
            })
          } 
          <FormHelperText>{ErrorMessage[name]}</FormHelperText> 
        </Field>
    )
}

export default Muiselect
