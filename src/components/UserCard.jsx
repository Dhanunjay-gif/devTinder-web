import axios from 'axios';
import React from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({ user,props }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, photourl, age, gender, about,skills,_id } = user;
  const handleSendRequest = async (status,userId) =>{
    try{
      const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true})
      dispatch(removeFeed(userId))
    }
    catch(err){

    }
  }

  return (
    <div className="card bg-base-300 w-96 shadow-md rounded-lg overflow-hidden mt-8">
      <figure className="h-68 w-full">
        <img
          src={photourl}
          alt={`${firstName} ${lastName}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body text-center p-4">
        <h2 className="card-title text-lg text-gray-300 font-semibold">{firstName} {lastName}</h2>
        {age && <p className="text-gray-600">Age: {age}</p>}
        {gender && <p className="text-gray-600 capitalize">Gender: {gender}</p>}
        {skills && <p className="text-gray-700 mt-2">Skills: {skills.join(", ")}</p> }
        {about && <p className="text-gray-700 mt-2">{about}</p> }
        { props &&
        <div className="card-actions justify-center mt-4">
          <button className="btn btn-outline btn-error" onClick={()=>handleSendRequest("ignored",_id)}>Ignore</button>
          <button className="btn btn-outline btn-success" onClick={()=>handleSendRequest("interested",_id)}>Interested</button>
        </div>
        }
      </div>
    </div>
  );
};

export default UserCard;
