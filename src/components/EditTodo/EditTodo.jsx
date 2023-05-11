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
        <div className="flex justify-between">
            <FaEdit className="text-pink-500 cursor-pointer lg:text-xl  hover:text-pink-700 " onClick={()=> {handleEdit();}}/>
            {showEdit && (<div className="ml-2">
                <input className="text-slate-200 rounded-lg w-24 sm:w-44 lg:w-52 p-1 lg:p-2 bg-slate-600 mr-1 lg:mr-2" type="text" onChange={(e) =>{setUpdateInput(e.target.value)}}/>
            <button className="bg-blue-400 rounded-xl p-1 lg:p-2" onClick={()=>{handleUpdateTodo(id)}}>Update</button>
            </div>)}
        </div>
    )
}

export default EditTodo;