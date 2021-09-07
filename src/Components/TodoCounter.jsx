import React from 'react'
import './styles/TodoCounter.css'

export default function TodoCounter({ total, completed }) {
    return (
        <h2 className="TodoCounter" >Has completado { completed } de { total } ToDos</h2>
    )
}
