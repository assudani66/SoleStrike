import React from 'react'
import { useAuth } from '../context/authContext'

const LoginPage = () => {
    const {loginInfo,loginDispatch,getLoginData,signUpUser} = useAuth()
    console.log(loginInfo)
  return (
    <div>
      <p>Status:{loginInfo?.isLoggedIn > 0 ? 'online' : 'offline'}</p>
        <button onClick={()=>getLoginData("assudani66@gmail.com", "78585212")}>Login</button>
        <button onClick={()=>loginDispatch({type:"logout"})}>Logout</button>
        <button onClick={()=>getLoginData("adarshbalika@gmail.com", "adarshbalika")}>Login with TestCredits</button>
        <button onClick={()=>signUpUser("")}>signUp</button>
    </div>
  )
}

export default LoginPage
