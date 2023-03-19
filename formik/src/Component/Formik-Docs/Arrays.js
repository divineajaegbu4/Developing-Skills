import React from 'react';
import { Formik, Form, Field } from 'formik';

const Arrays = () => {
    const initialValues = {
        social: {
            facebook: "",
            twitter: ""
        },

        fruits: ["Mango", "Orange"],
        "owner.fullname":""


    }

    return (
        <div>
            <h1>Social Profiles</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                <Form>
                    <Field name="social.facebook" />
                    <Field name="social.twitter" />
                    <Field name="fruits[0]" />
                    <Field name="fruits[2]" />
                    <Field name="['owner.fullname']" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
};




export default Arrays