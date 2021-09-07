import React, { Fragment } from 'react'
import './styles/TodoItem.css'

export default function TodoItem(props) {

    const handleCompleted = () => {
        alert('Ya se completo el todo ' + props.text)
    }

    const handleDelete = () => {
        alert('Ya se elimino el todo ' + props.text)
    }

    return (
        <Fragment>
            <li className="TodoItem">
                <span 
                    onClick={ handleCompleted } 
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                >
                    C
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    { props.text }
                </p>
                <span 
                    onClick={ handleDelete } 
                    className="Icon Icon-delete" 
                >
                    X
                </span>
            </li>
        </Fragment>
    )
}
