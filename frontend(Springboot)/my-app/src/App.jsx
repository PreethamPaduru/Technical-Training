// import react from 'react'
// import { useState } from 'react'
// import "./App.css"
// function App() {

// const [name,setName] = useState('');


//   return (
//     <div className="container">
//     {/* <button >Greet</button> */}
//     {/* <h1 onClick={handleClick}>{state}</h1> */}
//     <h1 className="first-name">Name</h1>
//     <input type="text" placeholder='Enter your name'  onChange={(e)=>setName(e.target.value)}  />
//     <h1>{name}</h1>
//     <h1 id="first-name" >Email</h1>
//     <input type="email" placeholder='Enter your email' />
//     <h1>Password</h1>
//     <input type="password" placeholder='Enter your password' />'
    
    
//     </div>
//   )
// }

// export default App

// import { use, useState } from 'react'
// import './App.css'

// function App() {

//   const [regUser,setRegUser]=useState({
//     name:"",
//     email:"",
//     password:""
//   })
// function a(){
//   setRegUser([])
// }
//   return (
//     <div className="container">
//       <h1>Register Here</h1>

//       <h4>Username</h4>
//       <input type="text" placeholder="Enter your username" id="name" />

//       <h4>Email</h4>
//       <input type="email" placeholder="Enter your email" id="email"/>

//       <h4>Password</h4>
//       <input type="password" placeholder="Enter your password" id="password" />

//       <button onClick={a}>Register</button>


//     </div>
//   );
// }

// export default App;


import React from 'react'
import Register from './components/Register'
import Login from './components/Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Weather from './components/Weather'
import Sms from './components/Sms'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>ss
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/Weather" element={<Weather />}/>
        <Route path="/sms" element={<Sms />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

