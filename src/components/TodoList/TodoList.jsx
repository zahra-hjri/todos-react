import React,{useState} from "react";
import EditTodo from "../EditTodo/EditTodo";
import { FaTrash,FaEdit } from 'react-icons/fa';
import {MdDoneAll} from "react-icons/md"

const TodoList = ({id,name,todo,setTodo}) =>{
    // const [showEdit , setShowEdit] = useState(false)
    const [complete,setComplete] = useState(false)

    const handleDeleteTodo = (id) =>{
        const deleteTodo = todo.filter((todos)=> todos.id !== id);
        setTodo(deleteTodo);
        
    };

    const handleCompleteTodo = (id) =>{
        setComplete(!complete)
    }

    return(
        <div className="flex justify-center">
       <div className="flex justify-between w-3/6 bg-slate-800 rounded-lg p-3 text-white my-1">
       <p className={complete && "com"}>{name}</p>
        <div className="flex">
        <FaTrash  onClick={()=>{handleDeleteTodo(id)}} className="text-red-700 cursor-pointer lg:text-xl hover:text-red-900"/>
        <MdDoneAll onClick={()=>{handleCompleteTodo(id)}} className="text-green-500 cursor-pointer mx-2 lg:text-2xl hover:text-green-700"/>

        <EditTodo id={id} todo={todo} setTodo={setTodo} />
        </div>
       </div>
        </div>
    )
}

export default TodoList;