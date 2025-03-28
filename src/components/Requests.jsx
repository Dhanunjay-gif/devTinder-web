import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addRequest } from '../utils/requestSlice';
import ConnectionRequestCard from './ConnectionRequestCard';


const Requests = () => {
    const dispatch = useDispatch();
    const RequestData = useSelector(store => store.request);
    const [loading,setLoading] =useState(true)

    const fetchRequest = async () => {
        if (RequestData?.length){
            setLoading(false)
            return;
        }
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true
            });
            dispatch(addRequest(res?.data?.data || []));
        } catch (err) {
            console.error("Error fetching connections:", err);
        }
        finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-center text-4xl font-semibold mb-6">Request Sent</h1>

            {RequestData?.length === 0 ? (
                <p className="text-center text-gray-500">No Request Found</p>
            ) : (
                <div className="w-full max-w-4xl mx-auto overflow-x-auto">
                    <table className="table-auto w-full min-w-[600px] border-collapse border border-gray-300">
                        {/* Table Header */}
                        <thead className='sticky top-0 z-10'>
                            <tr className="border-b border-gray-300">
                            <th className="p-4 text-center w-1/4">Name</th>
                            <th className="p-4 text-center w-1/4">Gender</th>
                            <th className="p-4 text-center w-1/4">Skills</th>
                            <th className="p-4 text-center w-1/4">About</th>
                        </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {RequestData?.map(request =>{
                                const requestData =request?.fromUserId
                                return (
                                    <ConnectionRequestCard key={requestData._id} user={requestData} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Requests;
