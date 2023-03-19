import React from "react"
import {Formik, Form} from "formik"
import * as Yup from "yup"

import FormikControl from './FormikControl'



const ErollmentForm = () => {
    const dropdownOptions = [
        { key: "Select your Course", value: "" },
        { key: "React", value: "react" },
        { key: "Angular", value: "angular" },
        { key: "Vue", value: "vue" },
    ]

    const checkboxOptions = [
        { key: "HTML", option: "html" },
        { key: "css", option: "css" },
        { key: "JavaScript", option: "javascript" },
    ]

    const initialValues = {
        email: "",
        bio: "",
        course: "",
        skills: [],
        courseDate: null
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required."),
        bio: Yup.string().required("Required."),
        course: Yup.string().required("Required."),
        courseDate: Yup.date().required("Required.").nullable()
    })


    const onSubmit = values => {
        console.log("erollmentForm", values)
    }

    return (
        <>
            <h1>Enrollment Form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {(formik) => {
                    return (
                        <Form>
                            <FormikControl
                                control="input"
                                type="email"
                                label="Email"
                                name="email"
                            />
                            <FormikControl
                                control="textarea"
                                label="Bio"
                                name="bio"
                            />
                            <FormikControl
                                control="select"
                                label="Course"
                                name="course"
                                options={dropdownOptions}
                            />
                            <FormikControl
                                control="checkbox"
                                label="Your skillset"
                                name="skill"
                                optionsCheckbox={checkboxOptions}
                            />
                            <FormikControl
                                control="date"
                                label="Course date"
                                name="CourseDate"
                            />
                            <button type="Submit" disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }}

            </Formik>
        </>
    )
}

export default ErollmentForm;