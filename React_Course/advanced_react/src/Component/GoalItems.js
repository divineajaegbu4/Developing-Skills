import React, { useState } from 'react'

const GoalItems = (props) => {
    const [formData, setFormData] = useState({ goal: "", by: "" })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.onAdd(formData)
        setFormData({ goal: "", by: "" })
        console.log("formData", formData)


    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="goal"
                placeholder='Your goal'
                value={formData.goal}
                onChange={handleChange}
            />

            <input
                type="text"
                name="by"
                placeholder='By...'
                value={formData.by}
                onChange={handleChange}
            />

            <button style={{ cursor: "pointer" }}>Add Data</button>
        </form>
    )
}


const ShowListItems = (props) => {
    return (
        <ul>
            {props.showList.map((show) => <li key={show.goal || show.by}>
                <span>{show.goal} by {show.by}</span>
            </li>)}
        </ul>
    )

}



export const CompileItems = () => {
    const [items, setItems] = useState([])

    const goalHandler = (goal) => {
        return setItems([...items, goal])
    }


    return (
        <div>
            <GoalItems onAdd={goalHandler} />
            <ShowListItems showList={items} />
        </div>
    )
}


export default GoalItems

