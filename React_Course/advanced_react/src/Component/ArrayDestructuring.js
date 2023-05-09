import React from 'react'

function ArrayDestructuring() {
    let cars = ["Toyota", "Camry", "Jeep"];

    const [v1, v2, v3] = cars

    console.log(v1, v2, v3)
    
    return (
        <section>
            <div>V1: {v1}</div>
            <div>V2: {v2}</div>
            <div>V3: {v3}</div>
        </section>
    )
}

export default ArrayDestructuring