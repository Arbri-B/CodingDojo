import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Display from './components/Display'

function App() {

  const [todo, setTodo] = useState([])

  return (
    <>
    <Todo todo={todo} setTodo={setTodo}/>
    <Display todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
