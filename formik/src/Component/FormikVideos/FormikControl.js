import React from "react"
import InputForm from "./Input"
import SelectFormik from "./SelectFormik"
import TextareaFormik from "./TextareaFormik"
import RadioFormik from "./RadioFormik"
import CheckboxFormik from "./CheckboxFormik"
import DatePickerF from "./DatePicker"
import ChakraInput from "./ChakraInput"



const FormikControl = (props) => {
    const { control, ...rest } = props

    switch (control) {
        case "input":
            return <InputForm {...rest} />
        case "textarea":
            return <TextareaFormik {...rest} />
        case "radio":
            return <RadioFormik {...rest} />
        case "checkbox":
            return <CheckboxFormik {...rest} />
        case "date":
            return <DatePickerF {...rest} />
        case "select":
            return <SelectFormik {...rest} />
        case "chakrainput":
            return <ChakraInput {...rest} />
        default: return null
    }
    // return (

    // )
}

export default FormikControl 