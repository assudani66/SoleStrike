import React from 'react'
import { useAuth } from '../../context/authContext'

const Login = () => {
  const {loginInfo,loginUser} =useAuth()
  return (
    <div>
      <label>userName<input/></label>
      <label>password<input/></label>
      <button onClick={()=>loginUser("assudani66@gmail.com", "78585212")}>Login</button>
      <button onClick={()=>loginUser("adarshbalika@gmail.com", "adarshbalika")}>Login with TestCredits</button>
    </div>
  )
}

export default Login