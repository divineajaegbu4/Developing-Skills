import React, { useState } from 'react'
import { Input, Products } from './Products';

const FilterListData = ({ data }) => {
    const [filter, setFilter] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div>
            <Input
                filter={filter}
                onSetFilter={setFilter}
                inStockOnly={inStockOnly}
                onSetInStockOnly={setInStockOnly}
            />

            <Products
                filter={filter}
                inStockOnly={inStockOnly}
                data={data}
            />
        </div>
    )
}

export default FilterListData