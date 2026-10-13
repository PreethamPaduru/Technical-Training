// import React from 'react'
// import './Register.css'

// function Register() {


//   return (
//     <>
//     <div className="Third-div">
//         <h1>Register</h1>
        
//             <h4>UserName  </h4>
//              <input type="text" name="" id="" />
//             <h4>Email  </h4>
//      <input type="text" name="" id="" />
//             <h4> Password</h4>
//      <input type="text" name="" id="" />
//             <button>Register</button>
//             <h4>Already have an account? <a href="/">Login</a></h4>
//      </div>
     
//     </>
//   )
// }

// export default Register



// import React from 'react'
// import './Register.css'
// import { useState } from 'react'

// function Register() {


//        const [name,setName]=useState("");
//        const [email,setEmail]=useState("");
//        const [password,setPassword]=useState("");

//   return (
//     <>
//     <div className="Third-div">
//        <h1>{name}</h1>
//        <h1>{email}</h1>
//        <h1>{password}</h1>
//         <h1>Register</h1>
        
//             <h4>UserName  </h4>
//              <input type="text" name="" id="" onChange={(e)=>setName(e.target.value)} />
//             <h4>Email  </h4>
//      <input type="text" name="" id="" onChange={(e)=>setEmail(e.target.value)} />
//             <h4> Password</h4>
//      <input type="text" name="" id="" onChange={(e)=>setPassword(e.target.value)} />
//             <button>Register</button>
//             <h4>Already have an account? <a href="/">Login</a></h4>
//      </div>
     
//     </>
//   )
// }

// export default Register



import { useState } from "react"
import "./Register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

       const navigate=useNavigate();

       const [RegisterUser,setRegisterUser]=useState({
              name:"",
              email:"",
              password:""
       })

       async function submit() {
       try{
              const response=  await axios.post(`http://localhost:8081/student/register`,RegisterUser);
              alert("User Registered Successfully..");
              navigate("/")
       }
       catch(err){
          alert("User failed to Register...");
   
       }
       }

       function a(e) {
              setRegisterUser({...RegisterUser,[e.target.name]:e.target.value});
       }

return (
       <div className="Third-div">
       <h1>Register here</h1>
       <h3>Username</h3>
       <input type="text" name="name" id="name" onChange={a} />
       <h3>Email</h3>
       <input type="email" name="email" id="email" onChange={a} />
       <h3>Password</h3>
       <input type="password" name="password" id="password" onChange={a} />

       <button onClick={submit}>Register</button>
       <h4>Already have an account?<a href="/">Login</a></h4>
       </div>
)

}

export default Register;