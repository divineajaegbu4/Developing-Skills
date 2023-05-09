import React from 'react'

export const Products = ({ filter, inStockOnly, data }) => {

    const rows = [];


    data?.forEach((data) => {
        if (data?.name?.toLowerCase().indexOf(filter?.toLowerCase()) === -1) return;

        if (inStockOnly && !data?.stocked) return;

        if (data?.name !== null) {
            rows.push(<ProductList name={data?.name} price={data?.price} />)
        }

        rows.push(<ProductCategory category={data?.category} stocked={data?.stocked} />)
    })

    return (
        <ol>
            <header>Products</header>
            {rows}
        </ol>
    )
}

const ProductList = (props) => {
    const { name, price } = props;
    return (
        <>
            <li>{name}</li>
            <li>{price}</li>
        </>
    )
}

const ProductCategory = ({ category, stocked }) => {
    const handleStocked = stocked ? category : <span style={{ color: "red" }}>{category}</span>

    return (
        <li>{handleStocked}</li>
    )
}




export const Input = ({ filter, inStockOnly, onSetFilter, onSetInStockOnly }) => {
    return (
        <form>
            <input type="text" placeholder="Search..." value={filter} onChange={e => onSetFilter(e.target.value)} />
            <label>
                <input type="checkbox" checked={inStockOnly} onChange={e => onSetInStockOnly(e.target.checked)} />
                Clicked to checked result!
            </label>
        </form>
    )
}
