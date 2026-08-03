import { useNavigate } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import axios from 'axios';

function Login() {

  const navigate=useNavigate();

  const[login,setLogin]=useState({
    email:"",
    password:""
  })
  function a(e){
    setLogin({...login,[e.target.name]:e.target.value});
  }

  async function submit() {
         try{
            const response=  await  axios.post(`http://localhost:8081/student/login`,login)
       alert("User Login Success..");
       navigate("/home")
          }catch(err){
            alert("Email or Password Incorrect....");
          }
    }

  return (
    <div className="Third-div">
    <h1>Login Page</h1>
    <h4>Email</h4>
    <input type="email" name="email" placeholder="Enter your email" id="email" onChange={a}/>
    <h4>Password</h4>
    <input type="password" placeholder="Enter your password" name="password" id="password" onChange={a}/>
    <button onClick={submit}>Login</button>
    <h4>Don't have an account? <a href="/register">Register</a></h4>
    </div>
  )
}

export default Login

