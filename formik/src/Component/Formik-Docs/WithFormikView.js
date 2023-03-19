import React from "react"
import { withFormik } from "formik"

const MyForm = (props) => {
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {errors.name && touched.name && <div>{errors.name}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


export const WithFormikHandler = withFormik({
    mapPropsToValues: () => ({ name: "" }),

    validate: values => {
        let errors = {};

        if (!values.name) {
            errors = "This field is required!"
        } else if (values.name > 10) {
            errors = "The name must be minimum of 7"
        }

        return errors;

    },

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values, 2, null));
        setSubmitting(false);
    },

    display: "BasicForm",

})(MyForm)