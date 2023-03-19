import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik";
import * as Yup from "yup";

import "./Formik.css";
import TextError from "./TextError";

const CreateForm = () => {
  const initialValues = {
    name: "",
    password: "",
    comment: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [""]
  };

  const onSubmit = (values) => {
    console.log("submit values", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    password: Yup.number().required("Password is required"),
  });

  const validate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const validateComments = values => {
    let errors = {};

    if (!values) {
      errors = "Required"
    }

    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    // validateOnChange={false}
    // validateOnBlur={false}
    // validateOnMount
    >
      {
        formik => {
          console.log("formik props", formik)
          return (
            <Form>
              <div className="form_control">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" />
                <ErrorMessage name="name">
                  {(errorMsg) => <div className="error">{errorMsg}</div>}
                </ErrorMessage>
              </div>
              <div className="form_control">
                <label htmlFor="password">Name:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component={TextError} />
              </div>

              <div className="form_control">
                <label htmlFor="address">Address</label>
                <FastField name="address">
                  {props => {
                    console.log("Formik render")
                    const { field, form, meta } = props;
                    console.log("showing", props)
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error && <div>{meta.error}</div>}
                      </div>
                    );
                  }}
                </FastField>
              </div>

              <div className="form_control">
                <label htmlFor="address">List array</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    console.log("fieldArray", fieldArrayProps)
                    console.log("form errors", form.errors)
                    return (
                      <div>
                        {phNumbers?.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />

                            {
                              index > 0 && <button type="button" onClick={() => remove(index)}>-</button>

                            }
                            <button type="button" onClick={() => push("")}>+</button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              <div className="form_control">
                <label htmlFor="comment">Comment</label>
                <Field as="textarea" id="comment" name="comment" validate={validateComments} />
                <ErrorMessage name="comment" component="div" />

              </div>

              <div className="form_control">
                <label htmlFor="facebook">Facebook</label>
                <Field type="text" name="social.facebook" id="facebook" />
              </div>

              <div className="form_control">
                <label htmlFor="twitter">Twitter</label>
                <Field type="text" name="social.twitter" id="twitter" />
              </div>

              <div className="form_control">
                <label htmlFor="primary_phone">Primary phone number</label>
                <Field type="text" name="phoneNumbers[0]" id="primary_phone" />
              </div>

              <div className="form_control">
                <label htmlFor="secondary_phone">Secondary phone number</label>
                <Field name="phoneNumbers[1]" id="secondary_phone" />
              </div>

              <button
                type='button'
                onClick={() => formik.validateField('comments')}
              >
                Validate comments
              </button>
              <button
                type='button'
                onClick={() => formik.setFieldTouched('comment')}
              >
                Visit comments
              </button>
              <button type='button' onClick={() => formik.validateForm()}>
                Validate all
              </button>
              <button
                type='button'
                onClick={() =>
                  formik.setTouched({
                    name: true,
                    password: true,
                    address: true,
                    comment: true
                  })
                }
              >
                Visit all
              </button>

              <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
            </Form>
          )
        }
      }

    </Formik>
  );
};

export default CreateForm;
