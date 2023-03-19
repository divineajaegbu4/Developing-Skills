import React from 'react'
import { useFormik, Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from "yup"

function Tutorial() {
    const initialValues = {
        name: "",
        age: "",
        gender: ""
    }

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values);
            setSubmitting(false)
        }, 500)
    }
    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         age: ""
    //     },

    //     onSubmit: (values, { setSubmitting }) => {
    //         setTimeout(() => {
    //             console.log(values)
    //             setSubmitting(false)
    //         }, 400)

    //     },

    //     validationSchema: Yup.object({
    //         name: Yup.string().max(20, "Must be 20 characters").required("Name is required"),
    //         age: Yup.number().max(2, "Must be 2 numbers").required("Enter age")
    //     })

    // validate: values => {
    //     const errors = {}
    //     if (!values.name) {
    //         errors.name = "Name is required!"
    //     }else if(values.name.length > 15) {
    //         errors.name = "Must be 15 characters or less"
    //     }

    //     if (!values.age) {
    //         errors.age = "Age is required!"
    //     }

    //     return errors;
    // }

    const SignupSchema = Yup.object().shape({
        name: Yup.string().min(2, "Too short").max(20, "Must be 20 characters").required("Name is required!"),
        age: Yup.number().required("Age is required!"),
        gender: Yup.string().required("Kindly select gender")
    })

    return (
        <section>
            <div>Tutorial</div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SignupSchema}>


                <Form>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <Field type="text" placeholder='Enter name' name="name" id="name1" />
                        <ErrorMessage name="name" component="div" />
                    </div>

                    <div>
                        <label htmlFor='age'>Name</label>
                        <Field type="text" id="age" name="age" placeholder='Enter age' />
                        <ErrorMessage name="age" component="div" />
                    </div>

                    <div>
                        <label htmlFor='gender'>Gender</label>
                        <Field type="text" id="genders" name="gender" as="select">
                            <option value="">-Select-gender-</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" />
                    </div>

                    <button type="submit">Send</button>
                </Form>
            </Formik>
        </section >
    )
}




export default Tutorial