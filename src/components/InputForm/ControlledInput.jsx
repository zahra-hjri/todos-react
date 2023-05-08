
import { useState } from "react"
import { FaTrash,FaEdit } from 'react-icons/fa';
import {MdDoneAll} from "react-icons/md"

const ControlledInput = ()=>{
    const [ inputValue , setInputValue ] = useState("")
    const [todoList , setTodoList] = useState([])

const handlerChangeInput = (e)=>{
    setInputValue(e.target.value)
}

    const handleSubmit = (e)=>{
        e.preventDefault();
    }
 
    const handleClick = ()=>{
        const id = todoList.length +1;
        setTodoList((prev) => [...prev , {
            id:id,
            task:inputValue,
            complete:false,
        }])
        setInputValue("")

       
    
    }
    const handleClearAllTodo = ()=>{
        setTodoList([])
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="flex justify-center mx-2">
            <input value={inputValue} onInput={handlerChangeInput} placeholder="Enter your task ..." className="p-1 md-p-3 w-96 bg-slate-700 rounded-lg outline-none mr-2 text-white"></input>
            {/* <button onClick={handleClick} className="btn btn-success" type="submit">Submit</button> */}
            <button onClick={()=> handleClick()} className="btn btn-success px-3 py-2">Add</button>

        </form>

        <div>
        <ul className="flex flex-col items-center my-10 ">
        
        {todoList.map((todo) => {
            return (
            <li
                className="bg-gray-800 text-slate-400 rounded-lg w-72 md:w-2/5 p-2 lg:p-3 my-1"
                complete={todo.complete}
                id={todo.id}
            >
               <div className="flex justify-between">
               {todo.task}
                <div className="flex">
                <FaEdit className="text-pink-500 cursor-pointer lg:text-xl  hover:text-pink-700"/>
                <MdDoneAll className="text-green-500 cursor-pointer mx-2 lg:text-2xl hover:text-green-800"/>
                <FaTrash className="text-red-700 cursor-pointer lg:text-xl hover:text-red-900"/>
                </div>
               </div>
            </li>
            );
        })}

        </ul>

        <button onClick={() => handleClearAllTodo()} className="bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-2 px-14 border border-red-600 hover:border-transparent rounded flex mx-auto">Delete All</button>
        </div>
     
        </>
    )
}

export default ControlledInput;