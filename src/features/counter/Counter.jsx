import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { increment,decrement,reset } from './counterSlice'

function Counter() {
    var {count} = useSelector(state=>state.c)
    var dispatch = useDispatch()
    console.log(count);
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button class='btn btn-primary m-2 p-2' onClick={()=>{dispatch(increment())}}>Increment</button>
        <button class='btn btn-warning m-2 p-2' onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button class='btn btn-info m-2 p-2' onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default Counter