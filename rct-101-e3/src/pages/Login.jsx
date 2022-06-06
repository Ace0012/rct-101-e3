import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [data,setData] = useState({})
const {login} = useContext(AuthContext)

const nav = useNavigate()
  const handleChange = (e)=>{
    const {name, value} = e.target
    setData({
      ...data,[name]:value
    })
  }
  const submit = (e)=>{
    e.preventDefault();
login()
nav("/")
  }
  return (
    <div>
      
    <form onSubmit={submit} >
      <input onChange={handleChange}  name="email" type="email" data-cy="login-email" placeholder="Enter Email" /><br />



      <input onChange={handleChange} name="password" type="password" data-cy="login-password" placeholder="Enter Password" /><br />

      <button type="submit" data-cy="login-submit">Login</button>

    </form>
    </div>
  );
};

export default Login;
