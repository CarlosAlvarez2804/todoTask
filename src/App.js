import React, { Fragment, useState } from 'react'
import CreateTodoButton from './Components/CreateTodoButton';
import TodoCounter from './Components/TodoCounter';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';


const defaultTodos = [
    {text: 'Cortar cebolla', completed: true},
    {text: 'Tomar el curso de React', completed: false},
    {text: 'Llorar con la llorona', completed: false},
    {text: 'LALALALA', completed: false},
    {text: 'Other', completed: true},
    {text: 'Task', completed: false},
    {text: 'To Do', completed: false},
]

function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const todosCompleted = todos.filter(todo => todo.completed).length
  const totalTodos = todos.length

  let serchedTodos = []

  if ( !searchValue.length >= 1 ) {
    serchedTodos = todos
  } else {
    serchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  return (
    <Fragment>
        <TodoCounter 
          total = { totalTodos }
          completed = { todosCompleted }
        />
        <TodoSearch
          searchValue = { searchValue }
          setSearchValue = { setSearchValue }
        /> 
        <CreateTodoButton text="+" />
        <TodoList> 
            {serchedTodos.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
            ))}
          </TodoList>

    </Fragment>
  )
}

export default App;
