import React from "react";
import TodoList from "../TodoList/TodoList";

const Todo = ({todo,setTodo}) =>{
  return(

    <div>
      {todo.map((todos) =>{
        return(
        <div>
          <TodoList {...todos} todo={todo} setTodo={setTodo} />  
        </div>
        )
      })}
    </div>
  )
}
export default Todo;