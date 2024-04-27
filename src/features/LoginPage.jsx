import { logDOM } from '@testing-library/react'
import {  useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addlogindata } from './loginSlice';

function LoginPage() {
    
   const {logindata} =  useSelector((state)=>state.login) 
   const dispatch = useDispatch(()=>{})
   console.log(logindata);
    const userformik = useFormik({
        initialValues :{
            usermobile:'',
            userpassword:''
        },
        onSubmit:(values)=>{
            dispatch(addlogindata(values)) 
        }
    })
  return (
    
    <div className='border border-2 p-4  rounded regmdiv'>
     <h1 className='text-center text-secondary mb-5'>Login Form </h1>

        <form action="" onSubmit={userformik.handleSubmit}>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" name='usermobile' placeholder="enter your mobile number" onChange={userformik.handleChange}/>
            <label for="floatingInput">Mobile Number</label>
        </div>
        <div class="form-floating mb-5">
            <input type="password" class="form-control" id="floatingPassword" name='userpassword' placeholder="Password" onChange={userformik.handleChange}/>
            <label for="floatingPassword">Password</label>
        </div>
        <div>
            <button type='submit' class='btn btn-warning btn-lr w-20'>Login</button> 
        </div>
        </form>
        <p className='text-center mt-4'>Don't Have An Account <Link to='/register'><span>Register</span></Link>  </p>
    </div>

  )
}

export default LoginPage