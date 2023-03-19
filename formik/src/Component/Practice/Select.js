import React from "react"
import { Field, ErrorMessage } from "formik"

import { TextError } from "./TextError"
import getStyles from "./ErrorBorder";



const SelectForm = props => {
    const { label, name, bag, error, ...rest } = props;
 
    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <Field  style={getStyles(error, name)} as="select" name={name} {...rest} className="select">

                <option value="">--Select bag--</option>
                {bag?.map((bag) => <option key={bag?.id} value={bag?.value}>{bag?.value}</option>)}

            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default SelectForm;