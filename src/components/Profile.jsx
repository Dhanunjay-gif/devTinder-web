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
    <div className='bg-base-300'>
      <EditProfile user={user} props={false}/>
    </div>
  ) : null
}

export default Profile