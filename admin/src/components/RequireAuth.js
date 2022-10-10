import {useLocation,Navigate,Outlet} from "react-router-dom"
import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext"
import Layout from "./Layout";

function RequireAuth() {
    const {auth}=useContext(AuthContext);
    const location = useLocation();
    
  return (
      auth?.userName
          ? <Layout/>
          : <Navigate to="/login" state={{from : location}} replace/>
  )
}

export default RequireAuth