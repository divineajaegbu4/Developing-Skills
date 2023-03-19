import React, { Fragment } from "react"
import { Field, ErrorMessage } from "formik"

import TextFormikError from "./TextFormikError";


const CheckboxFormik = props => {
    const { name, label, optionsCheckbox, ...rest } = props

    return (
        <div className="form-control">
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        console.log("checkbox", field)
                        return optionsCheckbox?.map((option) => {
                            return (
                                <Fragment key={option?.key}>
                                <input type="checkbox" id={option?.option} {...field} value={option?.option} checked={field?.value?.includes(option?.option)} />
                                    <label htmlFor={option?.option}>{option?.option}</label>
                                </Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextFormikError} />
        </div>
    )
}

export default CheckboxFormik;