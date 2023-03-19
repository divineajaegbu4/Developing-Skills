import React from "react"
import { Field, ErrorMessage } from "formik"

import {TextError} from "./TextError"
import getStyles from "./ErrorBorder";

const TextAreaForm = props => {
    const { label, name, error, ...rest } = props;

    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <Field style={getStyles(error, name)} as="textarea" name={name} id={name} {...rest} className="textarea"/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextAreaForm