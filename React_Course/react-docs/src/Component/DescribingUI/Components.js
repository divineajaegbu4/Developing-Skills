import React from "react"

import Markups from "./Markups"


import { people } from "./data"
import { getImageUrl } from "./Util"

const Component = ({ url, isPicked }) => {
    const style = {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 100
    }
    return (
        <React.Fragment>
            {isPicked && "****"}

            <img
                src={url}
                alt="Katherine Johnson"
                style={style}
            />
        </React.Fragment>
    )
}


const RenderList = () => {
    const listItems = people.map((person) => {
        return (
            <li key={person?.id}>
                <img src={getImageUrl(person)} alt={person.name} />

                <p>
                    <b>{person?.name}</b>
                    {"" + person?.profession + ""}
                    known for {person?.accomplishment}
                </p>

            </li>
        )
    })
    return (
        <>
            <h1>Rendering List</h1>
            <header>List of people</header>
            {listItems}
        </>
    )
}


let guest = 0

const ImpureFunctions = () => {
    // Bad: changing a preexisting variable!
    guest = guest + 2;

    return (
        <div>
            <strong>Tea cup for #{guest}</strong>
        </div>
    )
}

// You can make this component pure by passing a prop instead of modifying a preexisting variable:

const PureFunctions = ({ guest }) => {
    return (
        <div>
            <strong>Tea cup for #{guest}</strong>
        </div>
    )
}

export const Components = () => {
    const style = {
        width: 900,
        height: 300,
        url: "https://i.imgur.com/MK3eW3As.jpg"

    }

    const forwardedProps = "How are you?"

    return (
        <Card styleView={style}>
            <Component url={style.url} isPicked={true} />
            <Component url={style.url} isPicked={false} />
            <Component url={style.url} isPicked={true} />
            <RenderList />

            <h1>Impure Functions</h1>

            <ImpureFunctions />
            <ImpureFunctions />
            <ImpureFunctions />

            <h1>Pure Functions</h1>

            <PureFunctions guest={1} />
            <PureFunctions guest={2} />
            <PureFunctions guest={3} />

            <Markups forwardProps={forwardedProps}/>

        </Card>
    )
}


const Card = (props) => {
    return (
        <div className="children" style={props.styleView}>
            {props.children}
        </div>
    )
}

