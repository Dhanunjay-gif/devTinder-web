import axios from 'axios';
import React, { useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';
import { useLocation } from 'react-router-dom';

const Feed = () => {
  const feed = useSelector(store => store.feed);
  const dispatch = useDispatch();
  const location = useLocation()
  const getFeed = async () => {
    if (feed?.length) return; 
    
    try {
      const res = await axios.get(BASE_URL + "/feed", { withCredentials: true });
      dispatch(addFeed(res.data)); 
    } catch (err) {
      console.error("FEED Error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, [location]); 

  return feed && (
    <>
    {
      feed?.length ? (<div className='flex justify-center my-10'>
      <UserCard user={feed[0]} props={true}/>
    </div>) : (<div className="flex items-center justify-center">
              <h1 className="mt-16 text-red-300">No feed found</h1>
               </div>)
    }
    </>
  )
};

export default Feed;
