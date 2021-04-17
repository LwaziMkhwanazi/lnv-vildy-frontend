import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Field} from "formik"
function MuiTickBox({name,label,...rest}) {
    return (
        <Field  name = {name} id= {name} {...rest} >
            {
                ({field,form})=>{
                const {value} = field
                const {setFieldValue} = form
                    return(
                        <FormControlLabel
                         value="start"
                            control={
                            <Checkbox
                                name = {name}
                                 checked = {value}
                                 onChange = {()=>setFieldValue(name,!value)}
                                color="primary"
                            />
        }
        label={label}
      />
                    )
                }
            }
        </Field>
    )
}

export default MuiTickBox
