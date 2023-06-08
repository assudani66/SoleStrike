import React from 'react'
import { useAuth } from '../context/authContext'
import { Navigate, useLocation } from '../../node_modules/react-router-dom/dist/index'


export const RequiresAuth = ({children}) => {
    const token = localStorage.getItem("token")

    const location = useLocation();
  return token ? children : <Navigate to="/login" state={{ from: location }} replace  />
}
