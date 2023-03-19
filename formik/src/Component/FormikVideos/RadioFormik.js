import React, { Fragment } from 'react'
import { Field, ErrorMessage } from "formik"

import TextFormikError from "./TextFormikError"


const RadioFormik = (props) => {
    const { label, name, optionsRadio, ...rest } = props

    return (
        <div className="form-control">
            <label htmlFor={name}>{label}</label>
            <Field as="radio" name={name} {...rest}>

                {
                    ({ field }) => {
                        console.log("radioField", field)

                        return optionsRadio?.map((optionRadio) => {
                            return <Fragment key={optionRadio.key}>
                                <input type="radio" {...field} id={optionRadio.name}  value={optionRadio.option} checked={field.value === optionRadio.option} />
                                <label htmlFor={optionRadio.name}>{optionRadio.option}</label>
                            </Fragment>
                        })
                    }
                }

            </Field>
            <ErrorMessage name={name} component={TextFormikError} />
        </div>
    )
}

export default RadioFormik