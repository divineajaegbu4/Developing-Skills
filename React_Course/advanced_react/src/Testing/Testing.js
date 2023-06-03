import React from 'react'

function Testing() {
    const obj1 = {
        name: "Divine",
        age: 19,
        work: "Software engineer"
    }

   console.log("object.values", Object.values(obj1))
    return (
        <div>

            Testing
            <h1>{Object.values(obj1)}</h1>
        </div>


    )
}

export default Testing