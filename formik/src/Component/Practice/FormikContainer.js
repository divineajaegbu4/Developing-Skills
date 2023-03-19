import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import FormikControl from "./FormikControl"

import "./Formik.css"



const FormikContainer = () => {
    const gender = [
        { id: 1, value: "Male" },
        { id: 2, value: "Female" },
        { id: 3, value: "Neuter" }]


    const car = [
        { id: 1, value: "Toyota" },
        { id: 2, value: "Camry" },
        { id: 3, value: "Lexus" },
        { id: 4, value: "Jeep" },
        { id: 5, value: "bike" },
    ]

    const bag = [
        { id: 1, value: "Hand bag" },
        { id: 2, value: "School bag" },
        { id: 3, value: "Market bag" },
    ]

    const school = [
        { id: 1, value: "Roman" },
        { id: 2, value: "St.Paul" },
        { id: 3, value: "St.Joseph" },
        { id: 4, value: "City" },
        { id: 5, value: "QRC" },
    ]



    const initialValues = {
        first_name: "",
        last_name: "",
        gender: "",
        car: "",
        bag: "",
        description: "",
        school: [],
        date: ""
    }


    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("Required."),
        last_name: Yup.string().required("Required."),
        gender: Yup.string().required("Required."),
        car: Yup.string().required("Required."),
        bag: Yup.string().required("Required."),
        description: Yup.string().required("Required."),
        school: Yup.array().min(1, "Required"),
        date: Yup.date().nullable().required(' Date is required')
        // .min(new Date(), 'Start Date must be later than today'),
    })

    const onSubmit = (values, submitProps) => {
        console.log("Practice Submit", values)
        console.log("submitprops", submitProps)
        submitProps.setSubmitting(false)
        submitProps.resetForm();
    }

    return (
        <section className="container">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {props => {
                    return (
                        <Form>
                            <FormikControl control="input" label="FirstName" name="first_name" error={props.errors} />
                            <FormikControl control="input" label="LastName" name="last_name" error={props.errors} />
                            <FormikControl control="radio" label="Select car" name="car" car={car} error={props.errors} />
                            <FormikControl control="gender" label="Gender" name="gender" gender={gender} error={props.errors} />
                            <FormikControl control="select" label="Select Bag" name="bag" bag={bag} error={props.errors} />
                            <FormikControl control="textarea" label="Explaine yourself" name="description" error={props.errors} />
                            <FormikControl control="checkbox" label="Select School" name="school" school={school} error={props.errors} />
                            <FormikControl control="date" label="Pick date" name="date" error={props.errors} />
                            <button type="submit" disabled={props.isSubmitting}>Submit</button>
                        </Form>
                    )
                }}


            </Formik>
        </section>
    )

}



export default FormikContainer