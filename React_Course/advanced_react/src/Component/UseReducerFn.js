import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type) {
        case "buy_ingredients":
            return { money: state.money + 10 }
        case "sell_a_meal":
            return { money: state.money - 10 }
        case "celebrity_visit":
            return { money: state.money * 10 }
        default: return null;
    }
}

const UseReducerFn = () => {
    const initialState = { money: 100 }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>Wallet: {state.money}</h1>
            <div>
                <button onClick={() => dispatch({ type: "buy_ingredients" })}>Shopping for veggies</button>
                <button onClick={() => dispatch({ type: "sell_a_meal" })}>Shopping for veggies</button>
                <button onClick={() => dispatch({ type: "celebrity_visit" })}>Shopping for veggies</button>
            </div>
        </div>
    )
}


export default UseReducerFn;