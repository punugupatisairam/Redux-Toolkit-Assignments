import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset } from './counterSlice'
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter() {
    const  {count} = useSelector(state=>state.counter)
    const dispatch = useDispatch()
  return (
    <div> <br /><br /><br /> 
        <h1>counter : {count}</h1>
        <button className='btn btn-primary m-2 p-2' onClick={()=>dispatch(increment())} > increment</button> 
        <button className='btn btn-info m-2 p-2' onClick={()=>dispatch(decrement())} > decrement</button>
        <button className='btn btn-success m-2 p-2' onClick={()=>dispatch(reset())} > reset</button>
    </div>
  )
}

export default Counter