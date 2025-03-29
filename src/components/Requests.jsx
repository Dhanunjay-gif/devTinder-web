import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";
import { addConnection } from "../utils/connectionSlice"; // ✅ Import connection slice
import Loading from "../Loading/Loading";

const Requests = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const RequestData = useSelector((store) => store.request);

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/requests/recieved", {
                withCredentials: true,
            });
            dispatch(addRequest(res?.data?.data || []));
        } catch (err) {
            console.error("Error fetching requests:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    const reviewRequest = async (status, _id, requestData) => {
        try {
            await axios.post(BASE_URL + "/request/review/" + status + "/" + _id, {}, { withCredentials: true });

            dispatch(removeRequest(_id));

            if (status === "accepted") {
                dispatch(addConnection(requestData));
            }
        } catch (err) {
            console.error("Something went wrong:", err.message);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-center text-4xl font-semibold mb-6">Friend Requests</h1>

            {loading ? (
                <div className="text-center text-gray-500 flex justify-center"><Loading /></div>
            ) : RequestData?.length === 0 ? (
                <h1 className="text-center text-gray-500 text-4xl my-50">No Requests Found</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {RequestData?.map((request) => {
                        const requestData = request?.fromUserId;
                        const { firstName, lastName, age, skills, photourl, about, _id } = requestData;

                        return (
                            <div key={_id} className="bg-gray-200 shadow-md p-4 rounded-lg flex flex-col items-center">
                                <img src={photourl} alt="User" className="h-24 w-24 rounded-full object-cover" />
                                <h2 className="text-black text-lg font-semibold mt-2">{firstName} {lastName}</h2>
                                <p className="text-sm text-gray-500">{about}</p>

                                <div className="mt-3 flex gap-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                        onClick={() => reviewRequest("accepted", _id, requestData)}>
                                        Accept
                                    </button>
                                    <button className="bg-gray-600 px-4 py-2 rounded-lg"
                                        onClick={() => reviewRequest("rejected", _id)}>
                                        Reject
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
