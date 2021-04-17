import React from 'react'
import {Field} from "formik"
import {Checkbox, FormLabel,makeStyles,FormControlLabel} from "@material-ui/core"
const useStyles = makeStyles( theme =>({
    formControl: {
      
        marginLeft:'18px'
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
                    ({field}) =>{
                     
                        return options.map( option => {
                            return(
                                <React.Fragment key = {option.key}>
                                    <FormControlLabel
                                        control = {
                                             <Checkbox
                                            color = "primary"
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
