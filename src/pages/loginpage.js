import React from 'react'
import { useAuth } from '../context/authContext'
import SignUp from '../components/LoginSection/SignUp'
import Login from '../components/LoginSection/Login'

const LoginPage = () => {
    const {loginInfo:{isLoggedIn},loginDispatch,loginUser} = useAuth()
  return (
    <div>
      <p>Status:{isLoggedIn > 0 ? 'online' : 'offline'}</p>
        <Login/>
       <button onClick={()=>loginDispatch({type:"logout"})}>Logout</button>
       isLoggedIn && <SignUp/>
    </div>
  )
}

export default LoginPage
