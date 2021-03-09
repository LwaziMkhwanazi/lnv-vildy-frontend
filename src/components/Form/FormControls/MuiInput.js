import React from 'react'
import {TextField} from "@material-ui/core";
import {Field} from "formik"
function MuiInput({label,name,...rest}) {
    return (
        <Field name = {name}>
            {
                ({field,form}) =>{
                    return <TextField label = {label} variant = "outlined" id = {name} name = {name} 
                    {...rest} {...field} helperText = {form.errors[name] && form.touched[name]? form.errors[name]: null}
                        error = {form.errors[name] && form.touched[name]? true: false}
                      />

                }
            }
        </Field>
    )
}

export default MuiInput