import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


function Home() {
  const { auth } = useContext(AuthContext)
  const {userName}=auth
  return (
    <div><p>Welcome,{userName}</p></div>
  )
}

export default Home