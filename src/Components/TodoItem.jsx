import React, { Fragment } from 'react'

export default function TodoItem(props) {
    return (
        <Fragment>
            <li className="TodoItem">
                <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} >
                    C
                </span>
                <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                    { props.text }
                </p>
                <span className="Icon Icon-delete" >
                    X
                </span>
            </li>
        </Fragment>
    )
}
