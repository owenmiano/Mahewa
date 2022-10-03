import React from 'react'
import  {Outlet} from "react-router-dom"
import Sidebar from './Sidebar'
// import "../app.css"
 function Layout() {
  return (
    <main className='app'>
      <Sidebar/>
       <Outlet/>
    </main>
    
  )
}

export default Layout