import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import { useUserData } from '../context/userContext'
import { useAuth } from '../context/authContext'

const UserProfile = () => {
const {getAddresses,removeAddress} = useUserData()
const {loginDispatch} = useAuth()
  return (
    <div>
      <button onClick={()=>loginDispatch({type:"logout"})}>Logout</button>
    </div>
  )
}

export default UserProfile