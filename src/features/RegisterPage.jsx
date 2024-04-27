
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import { useGetRegMutation } from '../services/usersdataApi';


function RegisterPage() {
    let [datafn] = useGetRegMutation()
    const userformik = useFormik({ 
        initialValues :{
            username:'',
            usermobile:'',
            userpassword:'',
            role:'customer'
        },
        onSubmit:(values)=>{
           datafn(values).then((res)=>{
            console.log(res);
           })
        }
    

    })
  return (
    
    <div className='border border-2 p-4  rounded regmdiv'>
     <h1 className='text-center text-secondary mb-5'>Register Form </h1>

        <form action="" onSubmit={userformik.handleSubmit}>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" name='username' placeholder="enter your name" onChange={userformik.handleChange}/>
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" name='usermobile' placeholder="enter your mobile number" onChange={userformik.handleChange}/>
            <label for="floatingInput">Mobile Number</label>
        </div>
        <div class="form-floating mb-5">
            <input type="password" class="form-control" id="floatingPassword" name='userpassword' placeholder="Password" onChange={userformik.handleChange}/>
            <label for="floatingPassword">Password</label>
        </div>
        <div>
            <button type='submit' class='btn btn-warning btn-lr w-20'>Register here</button> 
        </div>
        </form>
        <p className='text-center mt-4'>Already Have An Account <Link to='/'><span>Login</span></Link> </p>
    
    </div>
   

  )
}

export default RegisterPage