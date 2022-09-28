import {useLocation,Navigate,Outlet} from "react-router-dom"
import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"

function RequireAuth() {
    const {auth}=useContext(AuthContext);
    const location = useLocation();
    
  return (
      auth?.userName
          ? <Outlet/>
          : <Navigate to="/login" state={{from : location}} replace/>
  )
}

export default RequireAuth