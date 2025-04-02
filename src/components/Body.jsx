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
    const fetchUser = async () => {
        if(userData) return
        try {
            const res = await axios.get(`${BASE_URL}/profile/view`, { withCredentials: true });
            dispatch(addUser(res?.data?.data));
        } catch (err) {
            if (err.response?.status === 401) {  
                navigate("/login");
            } else {
                console.error("Error fetching user:", err?.message);
            }
        }
    };
    useEffect(() => {
        if (!userData || Object.keys(userData).length === 0) { 
            fetchUser();
        }
    }, []);
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Body;