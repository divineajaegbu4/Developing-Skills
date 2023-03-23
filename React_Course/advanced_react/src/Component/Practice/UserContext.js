import React, { createContext, useContext, useReducer, useMemo, useCallback } from 'react'

const CreateContextHandler = createContext(null);

const reducer = (state, action) => {
    switch (action.type) {
        case "onChangeEvent":
            return ({ ...state, [action.field]: action.payload })
        default:
            return null;
    }
}

export const CreateContextProvider = ({ children }) => {

    const initialState = {
        first_name: "",
        last_name: "",
        gender: "",
        car: "",
        book: ""
    }

    const gender = useMemo(() => [
        { id: 1, value: "Male" },
        { id: 2, value: "Female" },
        { id: 3, value: "Neuter" },
    ], [])

    const car = useMemo(() => [
        { id: 1, value: "Toyota" },
        { id: 2, value: "Lexus" },
        { id: 3, value: "Camry" },
    ], [])


    const book = useMemo(() => [
        { id: 1, value: "Mathematics" },
        { id: 2, value: "English" },
        { id: 3, value: "Physics" },
    ], [])

    console.log("gender", gender)


    const [state, dispatch] = useReducer(reducer, initialState)

    const resetForm = useCallback(() => {
        state.first_name = "";
        state.last_name = "";
        state.gender = "";
        state.car = "";
        state.book = ""
    }, [state])

    const handleSubmitHandler = useCallback((e) => {
        e.preventDefault();
        console.log("state", state)
    }, [state])


    const handleChangeHandler = useCallback((e) => {
        dispatch({
            type: "onChangeEvent",
            field: e.target.name,
            payload: e.target.value
        })
    }, [])

    const values = useMemo(() => ({
            state,
            handleSubmitHandler,
            handleChangeHandler,
            gender,
            car,
            book
    }),
        [
            state,
            handleSubmitHandler,
            handleChangeHandler,
            gender,
            car,
            book
        ])


    return <CreateContextHandler.Provider value={values}>{children}</CreateContextHandler.Provider>
}


export const useContextHandler = () => useContext(CreateContextHandler);
