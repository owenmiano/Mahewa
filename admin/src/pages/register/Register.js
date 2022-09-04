import React, { useState } from 'react'
import  './register.css'

function Register() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  
  const handleSubmit=(e)=>{

    e.preventDefault()

  }


  return (
 
    <div class="form-container">
        
    <form class="Register-form" onSubmit={handleSubmit}>
      <h1>Admin Register</h1> 
      <label>Username</label>
         <input
          class="form-field"
          type="email"
          placeholder="Enter your Username"
          name="email"
          onChange={e=>setEmail(e.target.value)}
        />
        <label>Phone Number</label>
         <input
          class="form-field"
          type="email"
          placeholder="Enter your Phone Number"
          name="email"
          onChange={e=>setEmail(e.target.value)}
        />
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
          Register
        </button>
      </form>
    </div>
   
  )
}

export default Register