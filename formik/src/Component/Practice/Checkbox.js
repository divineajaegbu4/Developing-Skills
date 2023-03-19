import React from 'react'
import { Field, ErrorMessage, getIn } from 'formik'

import { TextError } from './TextError'


const Checkbox = (props) => {
    const { name, label, school, error, ...rest } = props
    function getStyles(errors, fieldName) {
        if (getIn(errors, fieldName)) {
            return {
                border: '1px solid red'
            }
        }
    }
    return (
        <div className='form_control'>
            <label htmlFor={name}>{label}</label>
            <Field style={getStyles(error, name)} name={name} {...rest} >
                {({ field }) => {

                    return school?.map((school) => {
                        return (
                            <div key={school?.id} className="pick_option">
                                <input type="checkbox" id={school?.value} {...field} value={school?.value} checked={field?.value?.includes(school?.value)} />
                                <label htmlFor={school?.value}>{school?.value}</label>
                            </div>
                        )
                    })
                }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Checkbox