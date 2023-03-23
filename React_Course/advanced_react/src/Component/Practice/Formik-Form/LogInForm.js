import React from "react"
import { Formik, Form} from "formik"
import { useContextForm } from "./UserContextForm"


const LoginForm = (WrapperComponent) => {
    const { initialValues, validationSchema, onSubmit, assest, roleFunctions, gender } = useContextForm();

 
    return (props) => {
        return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => {
                    // console.log("formikPropsvalue", formik)
                    return (
                        <Form>
                            <WrapperComponent
                                assest={assest}
                                roleFunctions={roleFunctions}
                                gender={gender}
                                submitForm={formik.submitForm}
                                isSubmittingForm={formik.isSubmitting}
                                {...props}

                            />


                        </Form>
                    )
                }}
            </Formik>
        )
    }

}

export default LoginForm;