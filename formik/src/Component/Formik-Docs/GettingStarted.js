import React from 'react'
import { ErrorMessage, Field, Form, Formik, FastField } from 'formik'

function GettingStarted() {
    const initialValues = {
        first_name: "",
        last_name: "",
        password: ""
    }

    const validate = (values) => {
        let errors = {}
        if (!values.first_name) {
            errors.first_name = "Required"
        }
        if (!values.last_name) {
            errors.last_name = "Required"
        }
        if (!values.password) {
            errors.password = "Required"
        }
        if (!values.username) {
            errors.username = "Required"
        }

        return errors
    }


    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false)
        }, 400)
    }


    return (
        <section>
            <div>GettingStarted With Formik Docs</div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            >

                {({ isSubmitting }) => (<Form>

                    <div className='form_control'>
                        <label htmlFor="first_name">First name</label>
                        <FastField type="text" id="first_name" name="first_name" placeholder='Enter first name' />
                        <ErrorMessage name="first_name" component="div" />
                    </div>



                    <div className='form_control'>
                        <label htmlFor="last_name">last name</label>
                        <Field type="text" id="last_name" name="last_name" placeholder='Enter last name' />
                        <ErrorMessage name="last_name" component="div" />
                    </div>

                    <div className='form_control'>
                        <label htmlFor="password">Password</label>
                        <Field type="text" id="password2" name="password" placeholder='Enter password' />
                        <ErrorMessage name="password" component="div" />

                    </div>
                   

                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
                )}


            </Formik>
        </section>
    )
}


export default GettingStarted