import React from 'react'
import {Field} from "formik" 
import {FormHelperText,InputLabel,MenuItem,Select,FormControl,makeStyles} from "@material-ui/core"

const useStyles = makeStyles(  {
    select:{
       width:'100%',
       marginTop:'20px',
       marginBottom: '20px'
    }
})
function MuiDropdown
({name,label,options,...rest}) {
    const classes = useStyles()
    return (
        <Field name = {name}>
            {
                ({field,form}) => {
                    return <FormControl className = {classes.select}>
                            <InputLabel>{label}</InputLabel>
                            <Select
                           
                            {...rest}
                            {...field}
                            id = {name}
                            >
                            {
                            options.map( option =>{
                                    return  <MenuItem key={option.value} value={option.value}  >
                                    {option.key}
                                  </MenuItem>
                                 })
                            
                            }

                            </Select>
                        <FormHelperText error = {form.errors[name] && form.touched[name]? true: false} >
                                {form.errors[name] && form.touched[name]? form.errors[name]: null}
                            </FormHelperText>
                    </FormControl>
                }
            }
        </Field>
    )
}

export default MuiDropdown
