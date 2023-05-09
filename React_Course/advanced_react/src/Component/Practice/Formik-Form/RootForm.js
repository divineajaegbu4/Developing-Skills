import React from "react"

import FormControl from "./FormControl"
import LoginForm from "./LogInForm"


const FormControlHandler = ({ assest, roleFunctions, gender, submitForm, isSubmittingForm}) => {
    return (
        <div>
            <FormControl control="input" name="first_name" label="FirstName" />
            <FormControl control="input" name="last_name" label="LastName" />
            <FormControl control="selectGender" name="gender" label="Gender" gender={gender} />
            <FormControl control="selectRoles" name="role_functions" label="Role Functions" roleFunctions={roleFunctions} />
            <FormControl control="checkbox" name="assest" label="Assest ridden before" assests={assest} />
            <FormControl control="date" name="dateBirth" label="Date" />

            <button type="submit" onClick={submitForm} disabled={isSubmittingForm}>Submit</button>
        </div>
    )
}

const RootForm = () => {
    const FormControlInputs = LoginForm(FormControlHandler);
    

    return (
        <FormControlInputs />
    )
}


export default RootForm;