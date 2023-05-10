import React,{useState} from "react";
import { FaTrash,FaEdit } from 'react-icons/fa';


const EditTodo = ({id,todo,setTodo}) =>{
    const [showEdit , setShowEdit] = useState(false)
    const [updateInput , setUpdateInput] = useState("")

    const handleEdit = () =>{
        {setShowEdit(!showEdit)}
    }

    const handleUpdateTodo = (id) =>{
        const updateNameTodo = todo.map((todos) =>{
            return todos.id === id ? {...todos , name:updateInput} : todos;
        })
        setTodo(updateNameTodo)
        setShowEdit(!showEdit)
    }

    return(
        <div>
            <FaEdit className="text-pink-500 cursor-pointer lg:text-xl  hover:text-pink-700 " onClick={()=> {handleEdit();}}/>
            {showEdit && (<div className="py-0">
                <input className="text-slate-200 rounded-lg w-64 p-3 bg-slate-600 mx-2" type="text" onChange={(e) =>{setUpdateInput(e.target.value)}}/>
            <button className="btn btn-info px-2" onClick={()=>{handleUpdateTodo(id)}}>update todo</button>
            </div>)}
        </div>
    )
}

export default EditTodo;