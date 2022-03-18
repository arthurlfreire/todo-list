import React, { useState } from 'react'
import Header from './components/header/index'
import Form from './components/form/index'
import List from './components/list/index'
import "./styles.css"

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  return (
    <div className="App">
      <Header />
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      text={text} 
      setText={setText}
      />
      <List 
      todos={todos} 
      setTodos={setTodos}
      />
    </div>
  );
}
