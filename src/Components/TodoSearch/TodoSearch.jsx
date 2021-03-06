import React from 'react'
import './TodoSearch.css'

export default function TodoSearch({ searchValue, setSearchValue }) {

    const handleChange = (e) => {
        console.log(e.target.value);
        setSearchValue(e.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Cebolla"
            value={searchValue}
            onChange={ handleChange }
        />
)
}
