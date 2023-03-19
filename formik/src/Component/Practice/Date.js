import React from 'react'
import { Field, ErrorMessage } from 'formik'
import DatePicker from "react-datepicker"; 

import { TextError } from './TextError'
import getStyles from './ErrorBorder';

const Date = (props) => {
    const { label, name, error,  ...rest } = props;
 
    return (
        <div className="form_control" >
            <Field   name={name}  style={getStyles(error, name)}>
                {props => {
                    const { field, form } = props;
                    const { setFieldValue } = form;
                    const { value } = field

                    return (
                        <div >
                            <label htmlFor={name}>{label}</label>
                            <DatePicker  type="date" name={name} id={name} {...rest} selected={value} onChange={(val) => setFieldValue(name, val)} />
                        </div>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Date