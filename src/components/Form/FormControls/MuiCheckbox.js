import React from 'react'
import {Field} from "formik"
import {Checkbox, FormLabel,makeStyles,FormHelperText,FormControlLabel} from "@material-ui/core"
const useStyles = makeStyles( theme =>({
    formControl: {
        margin: theme.spacing(1),
      },
      checkboxlabel:{
          marginRight:'20px'
      }
}))
function Muicheckbox({name,label,options,...rest}) {
    const classes = useStyles()
    return (
           <div className = {classes.formControl}> 
           <FormLabel 
            className = {classes.checkboxlabel} >{label}</FormLabel>
          <Field name = {name} id= {name} {...rest} >
                {
                    ({field,form}) =>{
                       
                        return options.map( option => {
                            return(
                                <React.Fragment key = {option.key}>
                                    <FormControlLabel
                                        control = {
                                             <Checkbox
                                   
                                     id = {option.value} 
                                                {...field}
                                        value = {option.value} 
                                        checked = {field.value.includes(option.value)}
                                     />

                                         }
                                        
                                        label = {option.key}
                                    />
                                   
                                </React.Fragment>
                            )
                        })
                    }
                }
        </Field>
    
       </div> 
    )
}

export default Muicheckbox
