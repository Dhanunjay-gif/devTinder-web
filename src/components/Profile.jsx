import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

const Profile = () => {
  const user =useSelector(store=>store.user)
  if(!user){
    return <Loading/>
  }
  return user ? (
    <div>
      <EditProfile user={user}/>
    </div>
  ) : null
}

export default Profile