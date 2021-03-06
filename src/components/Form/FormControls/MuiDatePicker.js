import React from 'react'
import {Field} from "formik"
import Grid from '@material-ui/core/Grid'
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers"
import DateFnsUtiles from "@date-io/date-fns"
function MuiDate({name,label,...rest}) {
   
    return (
       <MuiPickersUtilsProvider utils = {DateFnsUtiles} >
         <Grid  > 
        <Field name = {name}>
            {
                ({field,form}) =>{
                        const {setFieldValue} = form 
                        const {value} = field
                              
                        return <KeyboardDatePicker
                                {...rest}
                                {...field}
                                id = {name} 
                                label= {label}
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                    value = {value}
                                    onChange = { val => setFieldValue(name,val) }
                        />

                }
            }
        </Field>
        </Grid> 
        </MuiPickersUtilsProvider> 
    )
}

export default MuiDate