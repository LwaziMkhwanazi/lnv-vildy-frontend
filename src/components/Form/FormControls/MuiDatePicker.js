import React from 'react'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers"
import {Field} from "formik"
import DateFnsUtils from "@date-io/date-fns"


function MuiDatePicker({name,label,...rest}) {
    return (
       <MuiPickersUtilsProvider utils = {DateFnsUtils} >
        <Field name = {name}>
            {
                ({field,form}) =>{
                        const {setFieldValue} = form 
                        const {value} = field
                              
                        return <KeyboardDatePicker
                                {...rest}
                                {...field}
                                disableToolbar
                                 variant = "inline"
                                 inputVariant = "outlined" 
                                id = {name} 
                                label= {label}
                                format="MM/dd/yyyy"
                                margin="normal"
                                 value = {value}
                                onChange = { val => setFieldValue(name,val) }
                        />

                }
            }
        </Field>
        </MuiPickersUtilsProvider> 
    )
}

export default MuiDatePicker

