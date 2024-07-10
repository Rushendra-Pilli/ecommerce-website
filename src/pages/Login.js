import React from 'react';
import './Login.css';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let navigate=useNavigate();

  function navtoregister(){
    navigate('/Register')
  }
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <label>Email: <input type="email" name="email" {...register('email',{required:true})}/></label>
        {errors.email?.type==='required' && <p className='text-danger'>Email is required</p>}
        <label>Password: <input type="password" name="password" {...register('password',{required:true})}/></label>
        {errors.password?.type==='required' && <p className='text-danger'>Password is required</p>}
        <button type="submit">Login</button>
        <p className='text-center'>If you have not registered? <a href='' onClick={navtoregister}>Register</a> Here</p>
      </form>
    </div>
  );
};

export default Login;