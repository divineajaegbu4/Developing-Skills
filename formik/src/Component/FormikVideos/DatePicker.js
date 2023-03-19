import { ErrorMessage, Field } from 'formik';
import React from 'react'
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import TextFormikError from './TextFormikError';

const DatePickerF = (props) => {
    const { name, label, ...rest } = props
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <Field name={name}>
                {
                    // (props) => {
                    //     console.log("datePicker", props)
                    // }

                    ({ field, form }) => {
                        const { setFieldValue } = form
                        const { value } = field

                        return (
                            <DatePicker name={name} id={name} {...rest} selected={value} onChange={val => setFieldValue(name, val)} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextFormikError} />
        </div>
    )
}

export default DatePickerF