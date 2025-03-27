import React from "react";
import { useState } from "react";
import axios from 'axios';

const Login = () => {
  const [emailId,setEmailId] =useState("dhanu@gmail.com");
  const [password,setPassword] =useState("Dhanu@123");
  const handleLogin = async () =>{
    try{
      const res = await axios.post("http://localhost:5000/login", { email:emailId, password }, { withCredentials: true });
      console.log(res.data)
    }
    catch(err){
      console.log("ERROR :"+err)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-8">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="fieldset-label block text-left">Email</label>
            <input 
              type="email" 
              value={emailId}
              className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
              placeholder="Email" onChange={(e)=>setEmailId(e.target.value)}
            />
            <label className="fieldset-label block text-left mt-4">Password</label>
            <input 
              type="text"
              value={password} 
              className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
              placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}
            />
            <div className="text-left mt-2">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral w-full mt-4" onClick={handleLogin}>Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
