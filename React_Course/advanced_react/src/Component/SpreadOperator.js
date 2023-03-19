import React from 'react'

function SpreadOperator() {
    const fruits = {
        item1: "Mango",
        id: 3,
        location: "Lagos"
    }

    const myFruits = {
        ...fruits,
        itme1: "Cashew"
    }

    console.log("MyFruits", myFruits)

    return (
        <div>SpreadOperator</div>
    )
}

export default SpreadOperator