import React, { Fragment, useState } from 'react'
import CreateTodoButton from './Components/CreateTodoButton/CreateTodoButton';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoList from './Components/TodoList/TodoList';
import TodoSearch from './Components/TodoSearch/TodoSearch';


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

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
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
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
            ))}
          </TodoList>

    </Fragment>
  )
}

export default App;
