import React, { useState } from 'react';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { addFeed } from '../utils/feedSlice';

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photourl, setPhotourl] = useState(user.photourl);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [error,setError] =useState("")
    const [responseMsg,setResponseMsg]= useState(null)
    const dispatch=useDispatch()
    const saveProfile = async () => {
        
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                { firstName, lastName, photourl, gender, age, about},
                { withCredentials: true },
            );
            dispatch(addUser(res?.data?.data));
            setResponseMsg(res?.data)
            setTimeout(()=>{
                setResponseMsg(null)
            },2000)
        } catch (err) {
            console.error("Error updating profile:", err);
            setError(err.response?.data || "Something went wrong"); // ✅ Prevents crashes if err.response is undefined
        }
    };
    return (
        <div className="flex justify-center items-center space-x-10">
            <div className="flex items-center justify-center bg-base-200">
                <div className="card bg-base-100 w-96 max-w-lg shadow-2xl p-8">
                    <h1 className="text-3xl text-center">Edit Profile</h1>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label block text-left">First Name</label>
                            <input 
                                type="text" 
                                value={firstName}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="First Name" 
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label className="fieldset-label block text-left">Last Name</label>
                            <input 
                                type="text" 
                                value={lastName}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="Last Name" 
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label className="fieldset-label block text-left">Photourl</label>
                            <input 
                                type="text" 
                                value={photourl}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="Photourl" 
                                onChange={(e) => setPhotourl(e.target.value)}
                            />
                            <label className="fieldset-label block text-left">Age</label>
                            <input 
                                type="text" 
                                value={age}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="Age" 
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <label className="fieldset-label block text-left">Gender</label>
                            <input 
                                type="text" 
                                value={gender}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="Gender" 
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="fieldset-label block text-left">About</label>
                            <input 
                                type="text" 
                                value={about}
                                className="input w-full border-2 focus:border-gray-600 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                                placeholder="About" 
                                onChange={(e) => setAbout(e.target.value)}
                            />
                            <button className="btn btn-neutral w-full mt-4" onClick={saveProfile}>Save Profile</button>
                            {responseMsg && <p className='text-green-400'>{responseMsg.message}</p>}
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <UserCard user={{ firstName, lastName, photourl, age, gender, about }} />
            </div>
        </div>
    );
};

export default EditProfile;
