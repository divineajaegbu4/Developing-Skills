import React from 'react'
import { Field, ErrorMessage } from "formik"
import DatePicker from "react-datepicker";


import { TextError } from "./TextError";

export const Input = (props) => {
  const { name, label, ...rest } = props
  return (
    <div className="form_control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}


export const Gender = (props) => {
  const { name, label, gender, ...rest } = props;

  return (
    <div className='form_control'>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        <option value="">--Select gender--</option>

        {

          gender?.map((gender) => {
            return (
              <option key={gender?.id} value={gender?.value}>{gender?.value}</option>
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export const RoleFunctions = (props) => {
  const { name, label, roleFunctions, ...rest } = props;

  return (
    <div className="form_control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} {...rest}>
        <option value="">--Select role functions--</option>
        {
          roleFunctions?.map((roleFunction) => {
            return (
              <option key={roleFunction?.id} value={roleFunction?.value} label={roleFunction?.value} />
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export const Assest = (props) => {
  const { name, label, assests, ...rest } = props;

  return (
    <div className="form_control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {
          (props => {
            console.log("checkProps", props)
            const { field } = props;
            return assests?.map((assest) => {
              return (
                <div key={assest?.id} className="assest">
                  <input type="checkbox" id={name} {...field} value={assest?.value} selected={field?.value === assest?.value} />
                  <label htmlFor={name}>{assest?.value}</label>
                </div>
              )
            })
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}


export const DateForm = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div className="form_control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {
          (props => {
            console.log("dateProps", props)
            const { field, form } = props;
            const { value } = field;
            const { setFieldValue } = form;

            return (
              <DatePicker name={name} id={name} {...rest} selected={value} onChange={val => setFieldValue(name, val)} />
            )

          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}
