import React from 'react'
import  {Outlet} from "react-router-dom"
// import "../app.css"
 function Layout() {
  return (
    <main className='app'>
       <Outlet/>
    </main>
    
  )
}

export default Layout