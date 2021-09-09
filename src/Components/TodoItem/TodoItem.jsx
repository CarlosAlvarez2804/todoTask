import React, { Fragment } from 'react'
import './TodoItem.css'

export default function TodoItem(props) {
    const { onComplete, onDelete } = props
    return (
        <Fragment>
            <li className="TodoItem">
                <span 
                    onClick={ onComplete } 
                    className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                >
                    C
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    { props.text }
                </p>
                <span 
                    onClick={ onDelete } 
                    className="Icon Icon-delete" 
                >
                    X
                </span>
            </li>
        </Fragment>
    )
}
