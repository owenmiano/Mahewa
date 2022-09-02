import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import {Alert } from 'react-native'

import React,{createContext, useEffect, useState} from 'react'
import { BASE_URL } from '../components/config'
import NetInfo from "@react-native-community/netinfo";

export const AuthContext=createContext()

export const AuthProvider=({children})=>{
  const [isConnected, setIsConnected] = useState() 
  const [errors,setErrors]=useState()
  const[userInfo,setUserInfo]=useState({})
   const [isLoading,setIsLoading]=useState(false)
   const [splashLoading,setSplashLoading]=useState(false)

    // Register User
 const register=async(password,email,userName,phoneNo)=>{
    try{
        setIsLoading(true)
        await axios.post(`${BASE_URL}/auth/register-user`,{
        password,email,userName,phoneNo 
    },
    {
        headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        }  
    }   
    ).then(res=>{
        let userInfo=res.data;
        console.log(userInfo)
        setUserInfo(userInfo)
        AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
        setIsLoading(false)
       
    })
}  catch (error) {
    // if(error.response) console.log(error.response.data);
    setIsLoading(false)
    // let makosas=JSON.stringify(error.response.data.errors.map((error)=>error.msg))
    // setErrors(makosas)
    console.log(error)
    if(error.message === 'Network Error'){
      Alert.alert("You are Offline!","Please Connect To the Internet",
      [
        {
            text:"Try Again",
        }
    ]
      )
    }

  
}
 }

  // Login User
  const login=async(email,password)=>{
    try {
       setIsLoading(true) 
      await axios.post(`${BASE_URL}/auth/login-user`,{
        email,password,
        },
        {
            headers: {
            'Content-Type': "application/json",
            'Accept': "application/json",
            }  
        }   
        ).then(res=>{
          let userInfo=res.data
          console.log(userInfo)
          setUserInfo(userInfo)
          AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
          setIsLoading(false)
       })
    } catch (error) {
        setIsLoading(false)
        // let makosas=JSON.stringify(error.response.data.errors.map((error)=>error.msg))
        // setErrors(makosas)
        // console.log(makosas)
        console.log(error.message)
      if(error.message === 'Network Error'){
        Alert.alert("You are Offline!","Please Connect To the Internet",
        [
          {
              text:"Try Again",
          }
      ]
        )
      }

    }
  }

// Logout user
  const logout=async()=>{
    try {
        setIsLoading(true)
        await axios.post(`${BASE_URL}/auth/logout-user`,
        {},
        {
            headers:{token: `Bearer ${userInfo.token}` }
        }
        ).then(res=>{
            console.log(res.data.message)
            AsyncStorage.removeItem('userInfo')
            setUserInfo({})
            setIsLoading(false)
        })
    } catch (error) {
        setIsLoading(false)
        console.log(`logout error:${error.message}`)
    }
  }

//   Check if user is logged in
const isLoggedIn=async()=>{
  try {
    setSplashLoading(true)
    let userInfo=await AsyncStorage.getItem('userInfo')
    userInfo=JSON.parse(userInfo)

    if(userInfo){
        setUserInfo(userInfo)
    }
    setSplashLoading(false)
  } catch (error) {
      
      console.log(`is logged in error:${error.message}`)
  }

}

// check network status
useEffect(()=>{
  // Subscribe to network state updates
    const network=NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected)
    
    })   
    return () => {
      // Unsubscribe to network state updates
      network();
    };
  })


useEffect(()=>{
    isLoggedIn()
},[])

  return (
      <AuthContext.Provider 
      value={{
        isConnected,
        errors,
        isLoading,
        splashLoading,
        userInfo,
        login,
        register,
        logout,
        isLoggedIn
        }}>
       {children}
    </AuthContext.Provider>
  )
}
