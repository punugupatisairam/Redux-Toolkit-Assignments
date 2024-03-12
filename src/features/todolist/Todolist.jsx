import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo,deletetodo } from './todoSlice'

function Todolist() {
    const [newtodo,setNewtodo]=React.useState()
    const {alltodos} = useSelector((state)=>state.t)
    console.log(alltodos);
    var dispatch = useDispatch()
  return (
    <div>
        <span>ADD YOUR TASK : </span>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} /> <br /> <br />
        <button class='btn btn-success rounded' onClick={()=>{dispatch(addtodo(newtodo))}}>Add Task</button>
        {
            alltodos?.map((todo,i)=>{
                return ( <div>
                    <span>{todo}</span> &nbsp;&nbsp;
                    <button class='rounded' onClick={()=>{dispatch(deletetodo(i))}}>Delete</button>
                </div> )

            })
        }
        
    </div>
  )
}

export default Todolist