import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'

function App() {

useEffect(()=>{
  SplashScreen.hide()
},[])

  return (
  //  <LoginScreen/>
  <RegisterScreen/>
  )
}

export default App