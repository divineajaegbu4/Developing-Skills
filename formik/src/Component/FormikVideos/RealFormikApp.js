import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"

import "./Youtube.css"
import FormikControl from "./FormikControl"

const RealFormikApp = () => {
    const dropdownOptions = [
        { key: "Select an option", value: "" },
        { key: "Option1", value: "option1" },
        { key: "Option2", value: "option2" },
        { key: "Option3", value: "option3" },
    ]

    const radioOptions = [
        { key: 1, value: "Option1" },
        { key: 2, value: "Option2" },
        { key: 3, value: "Option3" },
    ]


    const checkboxOptions = [
        { key: 1, option: "cOption1" },
        { key: 2, option: "cOption2" },
        { key: 3, option: "cOption3" },
    ]


    const initialValues = {
        email: "",
        description: "",
        selectOptions: "",
        pickOptions: "",
        dateBirth: null,
        checkOptions: []
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Required."),
        description: Yup.string().required("Required."),
        selectOptions: Yup.string().required("Required."),
        pickOptions: Yup.string().required("Required."),
        checkOptions: Yup.array().min(1, "Required"),
        dateBirth: Yup.date().nullable().required("Required.")
    })

    const onSubmit = (values) => {
        console.log("form values", values)
        console.log("Saved date", JSON.parse(JSON.stringify(values)))

    }

    return (
        <section>
            <p>
                *--------------------------------------------------------------------------------------------------------------*
            </p>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    return (
                        <Form>
                            <FormikControl control="input" type="email" label="Email" name="email" />
                            <FormikControl control="textarea" label="Description" name="description" />
                            <FormikControl control="date" label="Pick a date" name="dateBirth" />
                            <FormikControl control="select" label="Select a topic" name="selectOptions" options={dropdownOptions} />
                            <FormikControl control="radio" label="Pick one option" name="pickOptions" options={radioOptions} />
                            <FormikControl control="checkbox" label="Select options" name="checkOptions" optionsCheckbox={checkboxOptions} />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
                }
            </Formik>

            <p>
                *--------------------------------------------------------------------------------------------------------------*
            </p>
        </section>
    )
}

export default RealFormikApp