import React from "react"

import { useContextHandler } from "./UserContext"
import FormControl from "./FormControl"

const RegistrationForm = () => {
    const { state, handleSubmitHandler, handleChangeHandler, gender, car, book } = useContextHandler();

    console.log("car", car)

    return (
        <form onSubmit={handleSubmitHandler}>
            <FormControl
                control="input"
                value={state.first_name}
                changeHandler={handleChangeHandler}
                label="FirstName"
                name="first_name"
            />

            <FormControl
                control="input"
                value={state.last_name}
                changeHandler={handleChangeHandler}
                lable="LastName"
                name="last_name"
            />

            <FormControl
                control="gender"
                value={state.gender}
                changeHandler={handleChangeHandler}
                label="Gender"
                name="gender"
                gender={gender}
            />

            <FormControl
                control="car"
                value={state.car}
                changeHandler={handleChangeHandler}
                label="Car"
                name="car"
                car={car}
            />

            <FormControl
                control="book"
                value={state.book}
                changeHandler={handleChangeHandler}
                label="Book"
                name="book"
                book={book}
            />

            <button type="submit">Sign up</button>
        </form>
    )
}

export default RegistrationForm;