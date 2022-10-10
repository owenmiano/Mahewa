import React from 'react'
import  {Outlet} from "react-router-dom"
import Sidebar from './Sidebar'
 function Layout() {
  return (
    <main className='app'>
      <Sidebar/>
    </main>
    
  )
}

export default Layout