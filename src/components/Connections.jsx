import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import CardSkeletonEffect from "../Loading/CardSkeletonEffect";

const Connections = () => {
    const dispatch = useDispatch();
    const connectionData = useSelector((store) => store.connection);
    const [loading, setLoading] = useState(true);

    const fetchConnection = async () => {
        if (connectionData?.length) {
            setLoading(false);
            return;
        }
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {
                withCredentials: true,
            });
            dispatch(addConnection(res?.data?.data || []));
        } catch (err) {
            console.error("Error fetching connections:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchConnection();
    }, []);

    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-center text-4xl font-semibold mb-6">My Connections</h1>

            {loading ? (
                <div className="flex flex-col items-center gap-4">
                    {[...Array(3)].map((_, index) => (
                        <CardSkeletonEffect key={index} />
                    ))}
                </div>
            ) : connectionData?.length === 0 ? (
                <p className="text-center text-gray-500">No Connections Found</p>
            ) : (
                <div className="flex flex-col items-center gap-6 w-full max-w-xl">
                    {connectionData?.map((connection) => (
                        <div
                            key={connection._id}
                            className="bg-white shadow-lg p-5 rounded-xl flex items-center text-left w-full transition-transform transform hover:scale-105"
                        >
                            {/* Profile Picture on the Left */}
                            <img
                                src={connection.photourl}
                                alt="User"
                                className="h-20 w-20 rounded-full object-cover border-2 border-gray-300 mr-4"
                            />

                            {/* User Details on the Right */}
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {connection.firstName} {connection.lastName}
                                </h2>
                                <p className="text-sm text-gray-500">{connection.gender}</p>
                                <p className="text-sm text-gray-700 mt-1">
                                    Skills: {connection.skills?.join(", ") || "N/A"}
                                </p>
                                <p className="text-sm text-gray-600 mt-2">{connection.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Connections;
