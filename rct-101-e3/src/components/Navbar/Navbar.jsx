import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from './../../context/AuthContext';
import {useContext} from 'react'
// use react-router Link or NavLink


const Navbar = () => {
  const nav = useNavigate();
  const {verify,logout} = useContext(AuthContext)

  const handleLogin = ()=>{
  if(verify){
    logout()
    nav("/login")

  }
  else{
    
   nav("/login") 
  } 
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to = "">Home</Link>

      <span data-cy="navbar-cart-items-count">cart:0</span>
      <button onClick={handleLogin} data-cy="navbar-login-logout-button">{verify?"Logout":"Login"}</button>


    </div>
  );
};

export default Navbar;
