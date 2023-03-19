import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from "yup"

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.

const validationSchema = Yup.object().shape({
    friends: Yup.array().of(
        Yup.object().shape({
            jared: Yup.string().required("Input is required!"),
            ian: Yup.string().required("Input is required!"),
            brent: Yup.string().required("Input is required!")
        })
    ).required("Must have friends")
})


// within a `FieldArray`'s render
const FriendArrayErrors = errors =>
    typeof errors.friends === 'string' ? <div>{errors.friends}</div> : null;

export const FriendList = () => (
    <div>
        <h1>Friend List</h1>
        <Formik
            initialValues={{ friends: ['jared', 'ian', 'brent'] }}
            onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }
            validationSchema={validationSchema}
        >

            {props => (
                <Form>
                    <FieldArray
                        name="friends"
                        render={arrayHelpers => (
                            <div>
                                {props.values.friends && props.values.friends.length > 0 ? (
                                    props.values.friends.map((friend, index) => (
                                        <div key={friend}>
                                            <Field name={`friends.${index}`} />
                                            {FriendArrayErrors(props.errors)}
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push('')}>
                                        {/* show this when user has removed all friends from the list */}
                                        Add a friend
                                    </button>
                                )}
                                <div>
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        )}
                    />
                </Form>
            )}
        </Formik>
    </div>
);