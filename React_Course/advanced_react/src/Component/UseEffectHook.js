import React, { useState, useEffect } from "react"


const UseEffectHook = () => {
    const [toggle, setToggle] = useState(false);

    const toggleBtn = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        document.title = toggle ? "Welcome to little lemon " : "Using useEffect hook"
    }, [toggle])

    return (
        <div>
            <h1>Using UseEffect Hook</h1>

            <button onClick={toggleBtn}>Toggle Btn</button>
            {toggle && <h1>Welcome to Little lemon</h1>}
        </div>
    )
}

export default UseEffectHook;