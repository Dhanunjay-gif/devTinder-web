import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest } from "../utils/requestSlice";
import ConnectionRequestCard from "./ConnectionRequestCard";
import Loading from "../Loading/Loading";

const Requests = () => {
    const dispatch = useDispatch();
    const RequestData = useSelector((store) => store.request);
    const [loading, setLoading] = useState(true);

    const fetchRequest = async () => {
        if (RequestData?.length) {
            setLoading(false);
            return;
        }
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true,
            });
            dispatch(addRequest(res?.data?.data || []));
        } catch (err) {
            console.error("Error fetching connections:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-center text-4xl font-semibold mb-6">Friend Requests</h1>

            {loading ? (
                <div className="text-center text-gray-500 flex justify-center"><Loading/></div>
            ) : RequestData?.length === 0 ? (
                <p className="text-center text-gray-500">No Requests Found</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {RequestData?.map((request) => {
                        const requestData = request?.fromUserId;
                        const {firstName,lastName,age,skils,photourl,about}=requestData;
                        return (
                            <div
                                key={requestData._id}
                                className="bg-gray-200 shadow-md p-4 rounded-lg flex flex-col items-center"
                            >
                                {/* Profile Picture */}
                                <img
                                    src={photourl}
                                    alt="User"
                                    className="h-24 w-24 rounded-full object-cover"
                                />

                                {/* Name */}
                                <h2 className=" text-black text-lg font-semibold mt-2">
                                    {firstName} {lastName}
                                </h2>

                                {/* Mutual Connections (optional) */}
                                <p className="text-sm text-gray-500">{about}</p>

                                {/* Buttons */}
                                <div className="mt-3 flex gap-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                                        Confirm
                                    </button>
                                    <button className="bg-gray-600 px-4 py-2 rounded-lg">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Requests;
