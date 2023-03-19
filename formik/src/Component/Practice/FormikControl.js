import React from "react"
import ChakraUI from "./ChakraUI"
import Checkbox from "./Checkbox"
import Date from "./Date"
import Gender from "./Gender"

import InputFirstName from "./InputFirstName"
// import InputLastName from "./InputLastName"
import RadioForm from "./Radio"
import SelectForm from "./Select"
import TextAreaForm from "./Textarea"



const FormikControl = (props) => {
    const { control, ...rest } = props;
    let result = ""

    switch (control) {
        case "input":
            result = <InputFirstName {...rest} />
            break;
        // case "inputLastName":
        //     result = <InputLastName {...rest} />
        //     break;
        case "radio":
            result = <RadioForm {...rest} />
            break;
        case "select":
            result = <SelectForm {...rest} />
            break;
        case "textarea":
            result = <TextAreaForm {...rest} />
            break;
        case "checkbox":
            result = <Checkbox {...rest} />
            break;
        case "gender":
            result = <Gender {...rest} />
            break;
        case "date":
            result = <Date {...rest} />
            break;
        case "chakrainput":
            result = <ChakraUI {...rest} />
            break;
        default: return null
    }

    return result
}

export default FormikControl;