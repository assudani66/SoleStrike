import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import SignUp from '../components/LoginSection/SignUp'
import Login from '../components/LoginSection/Login'

const LoginPage = () => {
    const {loginInfo:{isLoggedIn},loginDispatch} = useAuth()

    const [login,setLogin] = useState("true")
  return (
    <div className='login-container'>
      <p>Status:{isLoggedIn === true ? 'you are Logged In' : 'you are Logged Out'}</p>
        {!isLoggedIn && login &&  <Login/>}
      {!isLoggedIn && <p> you can  {login ? "sign up " : "login " }<span style={{color:'blue',cursor:'pointer'}} onClick={()=>setLogin(!login)} >here</span></p>}
       {isLoggedIn && <button className='login' onClick={()=>loginDispatch({type:"logout"})}>Logout</button>}
       {!login && !isLoggedIn && <SignUp/>}
    </div>
  )
}

export default LoginPage
