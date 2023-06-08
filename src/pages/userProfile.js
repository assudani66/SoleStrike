import React from 'react'
import AddressCard from '../components/AddressCard/AddressCard'
import { useUserData } from '../context/userContext'
import { useAuth } from '../context/authContext'
import { useNavigate } from '../../node_modules/react-router-dom/dist/index'

const UserProfile = () => {
const {removeAddress} = useUserData()
const navigate = useNavigate()
const {loginDispatch} = useAuth()
const logoutUser = () => {
  loginDispatch({type:"logout"})
  navigate("/login")
}
  return (
    <div className='login-container'>
      <button  onClick={()=>logoutUser()}>Logout</button>
    </div>
  )
}

export default UserProfile