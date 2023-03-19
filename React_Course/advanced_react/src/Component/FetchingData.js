import React, { useState, useEffect } from "react"


const FetchingData = () => {
    const [user, setUser] = useState([]);

    const fetchDataHandler = () => {
        fetch("https://randomuser.me/api/?result=1")
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
                console.log("data_view", data)
            })

    }

    useEffect(() => {
        fetchDataHandler()
    }, [])

    return Object.keys(user).length > 0 ? (
        <div>
            <h1>Fetching Data</h1>
            <p>Female name is: {user.results[0].gender}</p>
            <p>Email: {user.results[0].email}</p>
        </div>
    ) : (
        <h1>Pending...</h1>
    )
}


export default FetchingData;