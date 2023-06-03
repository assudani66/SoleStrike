import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import { useUserData } from '../context/userContext'

const UserProfile = () => {
const {getAddresses,removeAddress} = useUserData()

console.log(getAddresses())
  return (
    <div>
    </div>
  )
}

export default UserProfile