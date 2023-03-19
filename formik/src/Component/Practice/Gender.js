import React from 'react'
import { Field, ErrorMessage} from 'formik';

import { TextError } from './TextError';
import getStyles from './ErrorBorder';

const Gender = (props) => {
    const { label, name, gender, error, ...rest } = props;
 
    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <Field style={getStyles(error, name)} as="select" name={name} id={name} {...rest} className="select">
                <option value="">--Select gender--</option>
                {
                    gender?.map((gender) => <option key={gender?.id} value={gender?.value}>{gender?.value}</option>
                    )
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Gender