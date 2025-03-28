import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';
import ConnectionRequestCard from './ConnectionRequestCard';
import CardSkeletonEffect from '../Loading/CardSkeletonEffect';

const Connections = () => {
    const dispatch = useDispatch();
    const connectionData = useSelector(store => store.connection);
    const [loading, setLoading] =useState(true);

    const fetchConnection = async () => {
        if (connectionData?.length){
            setLoading(false)
            return;
        }
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true
            });
            dispatch(addConnection(res?.data?.data || []));
        } catch (err) {
            console.error("Error fetching connections:", err);
        }
        finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchConnection();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-center text-4xl font-semibold mb-6">My Connections</h1>
            {connectionData?.length === 0 ? (
                <p className="text-center text-gray-500">No Connections Found</p>
            ) : (
                <div className="w-full max-w-4xl mx-auto overflow-x-auto">
                    <table className="table-auto w-full min-w-[600px] border-collapse border border-gray-300">
                        {/* Table Header */}
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="p-4 text-center">Name</th>
                                <th className="p-4 text-center">Gender</th>
                                <th className="p-4 text-center">Skills</th>
                                <th className="p-4 text-center">About</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {connectionData?.map(connection => (
                                <ConnectionRequestCard key={connection._id} user={connection} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Connections;
