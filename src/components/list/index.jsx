import "./index.scss"

export default function List({ todos, setTodos }){
  
  function deleteTodo(todo){
    let remainingTodos = [...todos]
    const index = remainingTodos.indexOf(todo)
    remainingTodos.splice(index, 1)
    setTodos(remainingTodos)
  }

  return(
    <ul className="list">
      {todos.map( todo => <li>{todo}<button className="delete-button" onClick={()=>deleteTodo(todo)}>X</button></li>)}
    </ul>
  )
}