import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo,deletetodo } from './todoSlice'

function Todolist() {
    const [newtodo,setNewtodo] = React.useState()
    const {alltodos} = useSelector((state,action)=>state.todolist
    )
    const dispatch = useDispatch()

  return (
    <div>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} />
        <button onClick={()=>{dispatch(addtodo(newtodo))}}>Add Task</button>
        {
            alltodos.map((todo,i)=>{
                return <li key={i}>{todo}
                    <button onClick={()=>{dispatch(deletetodo(i))}}>Delete</button>
                    </li>
            })
        }
    </div>
  )
}

export default Todolist