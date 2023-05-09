import React, { useState } from "react"



export const CreatingAndNestingComponent = () => {
    return (
        <div className="Button">
            <button>I'm a button!</button>
        </div>
    )
}

export const AboutPage = () => {
    let user = {
        name: "Divine",
        imgUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imgSize: 100

    }

    return (
        <>
            <header>About</header>
            <p>Hello there. <br /> How do you do?</p>
            <img
                src={user.imgUrl}
                className="avatar"
                alt={`View ${user.name}`}
                style={{ width: user.imgSize, height: user.imgSize }}
            />
        </>
    )
}


export const RenderingList = () => {
    const products = [
        { title: 'Cabbage', isFruit: true, id: 1 },
        { title: 'Garlic', isFruit: true, id: 2 },
        { title: 'Apple', isFruit: false, id: 3 },
    ];

    const renderProducts = products?.map((product) => {
        const listProducts = {
            title: product?.title,
            id: product?.id,
            isFruit: product?.isFruit
        }

        console.log("Products", listProducts)

        return (
            <li
                key={listProducts?.id}
                style={{ color: listProducts?.isFruit ? "crimson" : "blue", listStyle: "none" }}
            >
                {listProducts?.title}
            </li>
        )
    })


    return (
        <div className="render__list">
            <h1>Render List</h1>
            <ul>{renderProducts}</ul>
        </div>
    )

}


export const RespondingToEvents = () => {
    const handleClick = () => {
        alert("You clicked me!")
    }

    return (
        <div className="handle__click">
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}


export const UpdatingTheScreen = (props) => {
    const { count, clickHandler } = props;

    return (
        <div className="counter">
            <p>Click {count} times</p>
            <button onClick={clickHandler}>Click to count</button>
        </div>
    )
}


export const SeperateUpdatingTheScreen = () => {
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div className="counter">
            <p>Click {count} times</p>
            <button onClick={clickHandler}>Click to count</button>
        </div>
    )
}



