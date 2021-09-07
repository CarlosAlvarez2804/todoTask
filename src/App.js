import React, { Fragment } from 'react'
import CreateTodoButton from './Components/CreateTodoButton';
import TodoCounter from './Components/TodoCounter';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';


const todos = [
    {text: 'Cortar cebolla', completed: false},
    {text: 'Tomar el curso de React', completed: false},
    {text: 'Llorar con la llorona', completed: false},
]

function App() {
  return (
    <Fragment>
        <TodoCounter />
        <TodoSearch /> 
        <CreateTodoButton text="+" />
        <TodoList> 
            {todos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} />
            ))}
          </TodoList>

    </Fragment>
  )
}

export default App;
