import React from "react"


export const Input = (props) => {
    const { name, label, changeHandler, value, ...rest } = props;

    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} name={name} value={value} onChange={changeHandler} {...rest} />
        </div>
    )
}


export const Gender = (props) => {
    const { name, label, changeHandler, gender, value, ...rest } = props;

    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} value={value} onChange={changeHandler} {...rest} >
                <option value="">--Select gender--</option>
                {gender?.map((gender) => <option key={gender?.id} value={gender?.value}>{gender?.value}</option>)}
            </select>
        </div>
    )
}


export const Car = (props) => {
    const { name, label, changeHandler, car, value, ...rest } = props;
    return (
        <div className="form_control">
            <label htmlFor={name}>{name}</label>

            {
                car?.map((car) => {
                    return (
                        <div key={car?.id}>
                            <input type="radio"  {...rest} id={name} name={name} value={value} onChange={changeHandler} />
                            <label htmlFor={car?.value}>{car?.value}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}


export const Book = (props) => {
    const { name, label, changeHandler, book, value, ...rest } = props;

    return (
        <div className="form_control">
            <label htmlFor={name}>{label}</label>
            {book?.map((book) => {
                return (
                    <div key={book?.id}>
                        <input type="checkbox" id={name} name={name} value={book?.value === value} onChange={changeHandler} selected={value === book?.value} {...rest} />
                        <label htmlFor={book?.value}>{book?.value}</label>
                    </div>
                )
            })}
        </div>
    )
}