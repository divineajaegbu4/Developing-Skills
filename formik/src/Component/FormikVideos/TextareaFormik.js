import React from "react"
import { Field, ErrorMessage } from "formik"

import TextFormikError from "./TextFormikError"


const  TextareaFormik= (props) => {
    const { label, name, ...rest } = props


    return (
        <div className="form-control">
            <label htmlFor={name}>{name}</label>
            <Field as="textarea" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextFormikError} />
        </div>
    )

}


export default TextareaFormik;