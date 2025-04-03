import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signup = () => {
    const [emailId,setEmailId] =useState("")
    const [password,setPassword] =useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName,setLastName] =useState("")
    const [responseMsg,setResponseMsg] =useState("");
    const [error,setError] =useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignup =  async () =>{
        try{
            const res = await axios.post(BASE_URL+"/signup",{firstName,lastName,email:emailId,password},{withCredentials:true});
            dispatch(addUser(res?.data.data))
            setResponseMsg(res?.data)
            setTimeout(()=>{
                setResponseMsg(null)
            },2000)
            setTimeout(()=>{
                navigate("/login")
            },2000) 
        }
        catch(err){
            setError(err?.message)
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-300">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-8">
                <h1 className="text-5xl font-bold text-center">Sign Up!</h1>
                <div className="card-body">
                    <fieldset className="fieldset">
                    <label className="fieldset-label block text-left">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                            placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label className="fieldset-label block text-left">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                            placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}
                        />
                        <label className="fieldset-label block text-left">Email</label>
                        <input
                            type="email"
                            value={emailId}
                            className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                            placeholder="Email" onChange={(e) => setEmailId(e.target.value)}
                        />
                        <label className="fieldset-label block text-left mt-4">Password</label>
                        <input
                            type="password"
                            value={password}
                            className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                            placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <div className="text-left mt-2">
                            <a className="link link-hover">Forgot password?</a>
                            <p className="mt-2 text-red-400">{error}</p>
                        </div> */}
                        <button className="btn btn-neutral w-full mt-4" onClick={handleSignup}>Signup</button>
                        { error &&
                            <p className="mt-2 text-red-400">User already exist, please Login</p>
                        }
                        <div className="mt-2">
                            <p className="underline text-blue-200"><Link to="/login">Existing User? Login Here</Link></p>
                        </div>
                        {
                            responseMsg?.message && (
                                <div className="toast toast-top toast-center">
                            <div className="alert alert-success">
                                <span>{responseMsg.message}.</span>
                            </div>
                        </div>
                            )
                        }
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Signup;