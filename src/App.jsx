import { FaPen,FaTrash } from 'react-icons/fa';
import { BiEdit } from 'react-icons/bi';
import ControlledInput from './components/InputForm/ControlledInput';
// import Multiple from './components/Multiple/Multiple';
import './App.css'

function App() {


  return (
    <div className='h-screen w-screen bg-gray-900 px-5'>
   
      <h1 className='font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center py-10 '>Todo List
      
      {/* <FaPen className='text-white'/> */}
      </h1>
      <ControlledInput/>
      {/* <Multiple /> */}
      {/* <BiEdit/> */}
      {/* <FaTrash/> */}

    </div>
  )
}

export default App
