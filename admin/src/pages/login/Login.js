import axios from 'axios'
import React, { useState,useRef,useEffect, useContext} from 'react'
import  './login.css'
import {BASE_URL} from '../../components/Api'
import { AuthContext } from '../../context/AuthContext'
import {useNavigate,useLocation} from "react-router-dom"

function Login() {
  const { setAuth } = useContext(AuthContext)
  const emailRef=useRef()
  const errRef=useRef()

  const navigate=useNavigate();
  const location=useLocation();
  const from =location.state?.from?.pathname || "/"


  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [errorMessage,setErrorMessage]=useState("")

  useEffect(()=>{
    emailRef.current.focus();
  },[])
  
  useEffect(()=>{
    setErrorMessage('')
  },[email,password])

  const handleSubmit=async(e)=>{
      e.preventDefault()
       try {
        const response=await axios.post(`${BASE_URL}/admin/login`,
          JSON.stringify({ email, password }),
          {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
        }   
      )
      let userInfo=response.data;
      setAuth(userInfo)
      localStorage.setItem('token',JSON.stringify(userInfo.token))
      setEmail("")
      setPassword("")
      navigate(from, {replace: true})
      console.log(userInfo)
       } catch (error) {
        console.log(error.response.data.message)
        setErrorMessage(error.response.data.message)
    }
  }


  return (
 
    <div class="form-container">
        <h1>Admin Login</h1> 
        <span>
        <p ref={errRef} className={errorMessage ? "error" :  "offscreen"} aria-live="assertive">{errorMessage}</p>
        </span>
        <form class="login-form" onSubmit={handleSubmit}>
      <label>Email</label>
         <input
         ref={emailRef}
          class="form-field"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          class="form-field"
          type="password"
          value={password}
          placeholder="Enter your Password"
          onChange={e=>setPassword(e.target.value)}
          required
        />
        
        <button class="form-field" type="submit">
          Login
        </button>
      </form>
    </div>
   
  )
}

export default Login