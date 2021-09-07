import React from 'react'
import './styles/TodoList.css'

export default function TodoList(props) {
    return (
        <section>
            <ul>
                { props.children }
            </ul>
        </section>
    )
}
