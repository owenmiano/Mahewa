import React, { useState } from 'react'
import  './login.css'

function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  
  const handleSubmit=(e)=>{

    e.preventDefault()

  }


  return (
 
    <div class="form-container">
        
    <form class="login-form" onSubmit={handleSubmit}>
      <h1>Admin Login</h1> 
        <label>Email</label>
         <input
          class="form-field"
          type="email"
          placeholder="Enter your email address"
          name="email"
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          class="form-field"
          type="password"
          placeholder="Enter your Password"
          onChange={e=>setPassword(e.target.value)}
        />
        
        <button class="form-field" type="submit">
          Login
        </button>
      </form>
    </div>
   
  )
}

export default Login