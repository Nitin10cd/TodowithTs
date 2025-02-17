import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import './App.css'
const App = () => {
  return (
    <main>
      <h1>ToDo Using React Js + Typescript</h1>
      <Addtodo/>
      <Todos/>
    </main>
  )
}

export default App
