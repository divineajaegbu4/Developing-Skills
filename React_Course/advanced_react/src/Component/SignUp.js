import React from 'react'

function SignUp() {
    const Button = ({ type, children, ...buttonProps }) => {
        const className = type === "primary" ? "primaryButton" : "secondaryButton"

        return (
            <button className={`Button ${className}`} {...buttonProps}>{children}</button>
        )
    }


    const LoginButton = ({ type, children, ...buttonProps }) => {
        return (
            <Button type="secondary" {...buttonProps} onClick={() => alert("Logging in!")}>{children}</Button>
        )
    }

    return (
        <div>
            <header>Little Lemon Resturnate **</header>
            <Button type="primary" onClick={() => alert("Signing up!")}>Sign up</Button>
            <LoginButton type="secondary" onClick={() => alert("Signing up!")}>Login</LoginButton>
        </div>
    )
}

export default SignUp