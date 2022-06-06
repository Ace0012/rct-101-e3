import React, { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [verify, setVerify]  = useState(false)
 const login =()=> {
   setVerify(true)
   }
   const logout = ()=>{
     setVerify(false)
     }



  return <AuthContext.Provider value = {{verify, login , logout}}>

    {children}
    </AuthContext.Provider>;
};
