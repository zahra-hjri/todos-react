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

     console.log(inputeValues)
    }
    
    const handleSubmitForm = (event) =>{
      event.preventDefault();
      setTodo([...todo , inputeValues])
      setInputValues({name:''})
      // console.log(id)
}





  return (
    <div className='h-screen w-screen bg-gray-900 px-5'>
      <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-10 '>Todo List
      </h1>
      <div>
        <form className='flex justify-center my-8' action='' onSubmit={handleSubmitForm}>
          <input className='p-3 w-2/5 bg-slate-700 rounded-lg outline-none mr-2 text-white' placeholder='Enter your task ...' type='text' value={inputeValues.name} name='name' onChange={onChangeHandle}/>
          <button className='btn btn-success' type='submit'>submit</button>
        </form>
        <Todo todo={todo} setTodo={setTodo}/>
      </div>

      {/* <ControlledInput/> */}
     

    </div>
  )
}

export default App
