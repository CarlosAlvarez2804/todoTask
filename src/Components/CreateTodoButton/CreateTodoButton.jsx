import React from 'react'
import './CreateTodoButton.css'

export default function CreateTodoButton(props) {

    const handleClick = () => {
        alert('Click')
    }

    return (
        <button 
            className = "CreateTodoButton"
            onClick = { handleClick }
        >
            { props.text }
        </button>
    )
}
