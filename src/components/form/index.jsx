import "./index.scss"

export default function Form({text, setText, todos, setTodos}){
  function createTodo(text){
    setTodos([...todos, text])
    console.log('api call placeholder')
  }
  return(
    <section className="todo-form">
      <label htmlFor="todo-input">Type the name of your todo</label>
      <input id="todo-input" value={text} onChange={event => setText(event.target.value)}/>
      <button onClick={()=> createTodo(text)}> Create todo</button>
    </section>
  )
}