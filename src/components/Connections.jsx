import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../utils/connectionSlice'
import ConnectionRequestCard from './ConnectionRequestCard'

const Connections = () => {
    const dispatch = useDispatch();
    const connectionData =useSelector(store=>store.connection)
    const fetchConnection =  async ()=>{
        if(connectionData?.length) return
        try{
            const res = await axios.get(BASE_URL+"/user/connections",{
                withCredentials:true
            })
            dispatch(addConnection(res?.data?.data || []))
        }
        catch (err) {
            console.error("Error finding connection:", err);
        }
    }

    useEffect(()=>{
        fetchConnection();
    },[])

  return (
    <div>
        {
            connectionData && connectionData?.map((connection)=>{
                const {firstName,lastName,age,about,gender,photourl,_id,skills} = connection;
                return (
                    <div key={_id}>
                        <ConnectionRequestCard user={{firstName,lastName,age,about,gender,photourl,_id,skills}}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Connections