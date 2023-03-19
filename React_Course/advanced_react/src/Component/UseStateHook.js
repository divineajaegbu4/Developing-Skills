import React, { useState } from 'react'

function UseStateHook() {
    const [resturanteName, setResturanteName] = useState("Lemon");

    console.log("useState hook", resturanteName)

    const updateResturanteName = () => {
        setResturanteName("Little Lemon")
    }
    return (
        <section>
            <h1>{resturanteName}</h1>
            <button onClick={updateResturanteName} style={{ cursor: "pointer" }}>
                Update resturante name
            </button>
        </section>
    )
}

export default UseStateHook