import React from 'react'

const Button = ({ type, children, ...buttonProps }) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton"
    return (
        <button  className={`Button ${className}`} {...buttonProps}>{children}</button>
    )
}

const LoginButton = ({ type, children, ...buttonProps }) => {
    return (
        <Button
            type="secondary"
            {...buttonProps}
            onClick={() => {
                alert("Logging in!")
            }}
        >
            {children}
        </Button>
    )
}
function Form() {
    return (
        <div>
            <header className='Header'>Little Lemon Resturante</header>
            <Button type="primary" onClick={()=> alert("Signing up!")}>Sign up</Button>
            <LoginButton type="secondary" onClick={()=>alert("Signing up!")}>Log in</LoginButton>
        </div>
    )
}

export default Form