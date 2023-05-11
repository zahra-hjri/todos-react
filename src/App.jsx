// import ControlledInput from './components/InputForm/ControlledInput';

import { useState } from 'react';
import Todo from './components/Todo/Todo';

import './App.css'

function App() {
const [inputeValues , setInputValues] = useState({name : ""})
const [todo , setTodo] = useState([])

const onChangeHandle = (event) =>{
  setInputValues({...inputeValues , [event.target.name] : event.target.value ,
     id: todo.length + 1 , })

    //  console.log(inputeValues)
    }
    
    const handleSubmitForm = (event) =>{
      event.preventDefault();
      setTodo([...todo , inputeValues])
      setInputValues({name:''})
      // console.log(id)
}

const handleDeleteAllTodo = ()=>{
  setTodo([])
}





  return (
    <div className='h-screen w-screen bg-gray-900 px-5'>
      <h1 className='font-extrabold text-transparent text-xl sm:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-10 '>Todo List
      </h1>
      <div>
        <form className='flex justify-center my-8' action='' onSubmit={handleSubmitForm}>
          <input className='px-2 sm:p-3 w-3/4 md:w-3/5 lg:w-2/5 bg-slate-700 rounded-lg outline-none mr-1 lg:mr-2 text-white' placeholder='Enter your task ...' type='text' value={inputeValues.name} name='name' onChange={onChangeHandle}/>
          <button className='bg-green-500 p-2 rounded-lg text-white' type='submit'>Add</button>
        </form>
        <Todo todo={todo} setTodo={setTodo}/>
        <button onClick={handleDeleteAllTodo} className='block mx-auto mt-8 bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded'>Delete all todos</button>
      </div>

      {/* <ControlledInput/> */}
     

    </div>
  )
}

export default App
