import React from 'react';
import './Register.css';
import {useNavigate} from 'react-router-dom'

const Register = () => {
  let navigate=useNavigate()
  function navtologin(){
    navigate('/Login')
  }
  return (
    <div className="container">
      <h1>Registration</h1>
      <form>
        <label>First Name: <input type="text" name="firstName" /></label>
        <label>Last Name: <input type="text" name="lastName" /></label>
        <label>Email: <input type="email" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <label>Confirm Password: <input type="password" name="confirmPassword" /></label>
        <label>Phone: <input type="text" name="phone" /></label>
        <label>Address: <input type="text" name="address" /></label>
        <label>City: <input type="text" name="city" /></label>
        <label>State: <input type="text" name="state" /></label>
        <label>Zip Code: <input type="text" name="zip" /></label>
        <label>Country: <input type="text" name="country" /></label>
        <label>Birthday: <input type="date" name="birthday" /></label>
        <label>Gender: 
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>Newsletter: <input type="checkbox" name="newsletter" /></label>
        <button type="submit">Register</button>
        <p className='text-center'>If you have already registered? <a href='' onClick={navtologin}>Login</a> Here</p>
      </form>
    </div>
  );
};

export default Register;