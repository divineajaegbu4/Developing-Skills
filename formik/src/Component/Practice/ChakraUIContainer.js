import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"

import FormikControl from './FormikControl'

const ChakraUIContainer = () => {
    const initialValues = {
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Email must be valid").required("Required."),
        password: Yup.string().required("Required.")
    })

    const onSubmit = (values, { setIsSubmitting, resetForm}) => {
        console.log("loginForm", values)
        resetForm();
        setIsSubmitting(false)
    }
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {formik => {
                    return (
                        <Form>
                            <FormikControl name="email" type="email" label="Email" control="chakrainput" />
                            <FormikControl name="password" type="password" label="Password" control="chakrainput" />
                            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }}

            </Formik>
        </>
    )
}

export default ChakraUIContainer