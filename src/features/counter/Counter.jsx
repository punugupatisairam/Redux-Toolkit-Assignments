import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import {increment ,decrement,reset} from './counterSlice'


function Counter() {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button className='btn btn-primary m-2 p-2' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='btn btn-warning m-2 p-2' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger m-2 p-2' onClick={()=>dispatch(reset())}>Reset</button>
    </div> 
  )
}

export default Counter