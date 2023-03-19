import React from "react"
import { Field, ErrorMessage } from "formik"

import { TextError } from "./TextError"
import getStyles from "./ErrorBorder"

const InputFirstName = (props) => {
    const { name, label, error, ...rest } = props
    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <Field style={getStyles(error, name)} id={name} name={name} {...rest} />
                <ErrorMessage name={name} component={TextError} />
        </div>
    )
}


export default InputFirstName;


