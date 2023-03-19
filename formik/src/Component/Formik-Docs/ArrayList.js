import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik"

const ArrayList = () => {
    const initialValues = {
        friends: [
            {
                name: "",
                email: ""
            }
        ]
    }


    return (
        <section>
            <div>
                <h1>Array and List</h1>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, 2, null))
                    setSubmitting(false);
                }}
            >
                {({ values }) => (
                    <Form>
                        <FieldArray name="friends">
                            {({ insert, push, remove }) => (
                                <>
                                    <div>
                                        {values.friends.length > 0 && values.friends.map((friend, index) => (
                                            <div key={friend}>
                                                <div className="form_control">
                                                    <Field name={`friends.${index}.name`} placeholder="Enter name" />
                                                </div>

                                                <div className="form_control">
                                                    <Field name={`friends.${index}.email`} placeholder="Enter email" />
                                                </div>
                                                <div>
                                                    <button type="button" onClick={() => remove(index)}>x</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <button type="button" onClick={() => push({ name: "", email: "" })}>+</button>
                                    </div>
                                </>

                            )}
                        </FieldArray>
                        <button type="submit">Submit</button>

                    </Form>
                )}

            </Formik>
        </section>
    )
}

export default ArrayList;