import React from 'react'
import { useSelector } from 'react-redux'

function Todolist() {
    const todos = useSelector((state)=>{state.todolist})
    console.log(todos);
  return (
    <div>

    </div>
  )
}

export default Todolist