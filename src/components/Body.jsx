import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";


const Body = () =>{
    const dispatch = useDispatch()
    const userData = useSelector(store=>store.user)
    const navigate = useNavigate()
    const fetchUser = async () =>{
        try{
            const res= await axios.get(BASE_URL+"/profile/view", {withCredentials:true})
            dispatch(addUser(res.data.data))
        }
        catch(err) {
            if (err.response?.status === 401) {  
                return navigate("/login");
            }
            // console.log(err.message);
        }
    }
    useEffect(()=>{
        if(!userData){
            fetchUser()
        }
    },[])
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;