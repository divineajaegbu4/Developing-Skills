import React, { createContext, useContext, useMemo, useCallback } from 'react';
import * as Yup from "yup"


const InitialCreateContext = createContext("");

export const UserContextProvider = ({ children }) => {
    const roleFunctions = useMemo(() => ([
        { id: 1, value: "GOM" },
        { id: 2, value: "FSM" },
        { id: 3, value: "PCM" },
        { id: 4, value: "TSA" },
        { id: 5, value: "PCA" },
    ]), [])

    const assest = useMemo(() => ([
        { id: 1, value: "Camry" },
        { id: 2, value: "Power byke" },
        { id: 3, value: "Toyota" },
        { id: 4, value: "Land cruser" },
        { id: 5, value: "Jeep" },
        { id: 6, value: "Okada" },
        { id: 7, value: "Bike" },
    ]), [])

    const gender = useMemo(() => ([
        { id: 1, value: "Male" },
        { id: 2, value: "Female" },
        { id: 3, value: "Neuter" },
    ]), [])

    const initialValues = useMemo(() => ({
        first_name: "",
        last_name: "",
        gender: "",
        role_functions: "",
        assest: [],
        dateBirth: null
    }), [])

    const onSubmit = useCallback(() => (values, props) => {
        console.log("FormikValues", values)

        setTimeout(() => {
            alert(JSON.parse(JSON.stringify(null, 2, values)))
            props.setSubmitting(false);
            props.resetForm();
        }, 500)

        // console.log("props", props)
    }, [])

    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("FirstName is required!"),
        last_name: Yup.string().required("LastName is required!"),
        gender: Yup.string().required("Gender is required!"),
        role_functions: Yup.string().required("RoleFunctions is required!"),
        dateBirth:  Yup.date()
        // .transform(parseDateString)
        .typeError("Invalid date format. (mm/dd/yyyy hh:mm am or pm)")
        .nullable()
        .required("Please enter a valid date. The field cannot be left blank."),
        assest: Yup.array().min(1, "Required"),

    })



    const values = useMemo(() => ({
        initialValues,
        validationSchema,
        onSubmit,
        assest,
        gender,
        roleFunctions
    }), [initialValues, validationSchema, onSubmit, assest, gender, roleFunctions])

    return (
        <InitialCreateContext.Provider value={values}>{children}</InitialCreateContext.Provider>
    )
}

export const useContextForm = () => useContext(InitialCreateContext)