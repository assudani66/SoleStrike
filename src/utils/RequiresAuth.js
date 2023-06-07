import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useLocation } from '../../node_modules/react-router-dom/dist/index'


export const RequiresAuth = ({children}) => {
    const {loginInfo} = useAuth()
    const location = useLocation();
    console.log(location)
  return loginInfo.isLoggedIn ? children : <Navigate to="/login" state={{ from: location }} replace  />
}
