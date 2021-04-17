import React from 'react'
import MuiInput from "./FormControls/MuiInput"
import MuiDatePicker from "./FormControls/MuiDatePicker"
import MuiRadio from "./FormControls/MuiRadio"
import Muicheckbox from './FormControls/MuiCheckbox'
import Muiselect from './FormControls/Muiselect'
import MuiObjectSelect from "./FormControls/MuiObjectSelect"
import MuiTickBox from "./FormControls/MuiTickBox"

//missing radio buttons
function FormikControl({control,...rest}) {
        switch(control){
            case 'MuiInput' : return <MuiInput {...rest}/>
            case 'MuiDatePicker' : return <MuiDatePicker {...rest} />
            case 'MuiRadio' : return <MuiRadio {...rest} />
            case 'MuiCheckbox' : return <Muicheckbox {...rest} />
            case 'MuiSelect' : return <Muiselect {...rest} />
            case 'MuiObjectSelect' : return <MuiObjectSelect {...rest} />
            case 'MuiTickBox' : return <MuiTickBox {...rest} />

         
            default:
                return null
        }

}

export default FormikControl
