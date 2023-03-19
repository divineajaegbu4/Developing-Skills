import React, { useEffect, useState } from 'react'

function DataFetcher({ render, url }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.includes("desserts")) {
            setData(["cake", "ice cream", "pie", "brownie"])
        } else {
            setData(["water", "soda", "juice"])
        }
    }, [url])
    return render(data)
}



const DessertCount = () => {
    return (
        <DataFetcher url="https://littlelemon/desserts" render={(data) => <p>{data?.length} desserts</p>} />
    )
}


const DessertDrinks = () => {
    return (
        <DataFetcher url="https://littlelemon/drinks" render={(data) => <p>{data?.length} drinks</p>} />
    )
}


const DessertFn = () => {
    return (
        <div>
            <header>DateFetcher</header>
            <DessertCount />
            <DessertDrinks />
        </div>
    )
}


export default DessertFn;