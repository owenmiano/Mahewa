import React from 'react'
import useAuth from '../../hooks/UseAuth'


function Home() {
  const { auth } = useAuth()
console.log(auth.userName)
  return (
    <div><p>Welcome admin:{auth.userName}</p></div>
  )
}

export default Home