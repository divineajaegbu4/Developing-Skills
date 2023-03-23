import React from "react"
import { Field, ErrorMessage } from "formik"

import { TextError } from "./TextError";
import getStyles from "./ErrorBorder";


const RadioForm = props => {
    const { name, label, car, error, ...rest } = props;

    return (
        <div className="form_control">
            <header>Radio button</header>
            <label htmlFor={name}>{label}</label>
            <Field style={getStyles(error, name)} name={name} {...rest} >

                {
                    ({ field }) => {
                        console.log("radioField", field)

                        return car?.map((car) => {
                            return <div key={car?.id} className="pick_option">
                                <input type="radio" {...field} id={car?.value} value={car?.value} />
                                <label htmlFor={car?.value}>{car?.value}</label>
                            </div>
                        })
                    }
                }

            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default RadioForm;