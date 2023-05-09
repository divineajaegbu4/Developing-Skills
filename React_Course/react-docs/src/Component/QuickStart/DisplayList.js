import React from 'react'
import { PRODUCTS } from './data'
import  FilterListData  from './FilterListData';

function DisplayList() {

    return (
        <div>
            <FilterListData data={PRODUCTS} />
        </div>
    )
}

export default DisplayList