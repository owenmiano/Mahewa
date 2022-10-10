import React,{ useState,useContext } from 'react'
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
}from "react-icons/fa";
import "./sidebar.css"
import { NavLink } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext"


function Sidebar({children}) {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const { auth } = useContext(AuthContext)
  const {userName}=auth;

 const menuItem = [
   {
     name: "Dashboard",
     path: "/",
     icon:<FaTh/>
   },
   {
    name: "Product",
    path: "/product",
    icon:<FaThList/>
  },
 ];


  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Mahewa
          </h1>
          <div style={{ marginLeft: isOpen ? "40px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="">
            <p>Welcome, {userName}</p>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar