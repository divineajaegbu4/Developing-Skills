import React, { useRef } from "react"


const UseRefHook = () => {
    const formInputRef = useRef(null)

    console.log("inputRef", formInputRef)

    const focusInput = () => {
        formInputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={formInputRef} placeholder="Enter name" />
            <button onClick={focusInput}>Focus button</button>
        </div>
    )
}

export default UseRefHook;