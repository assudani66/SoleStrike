import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
import { toast } from '../../../node_modules/react-hot-toast/dist/index';
const Login = () => {
  const { loginUser } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    userName: 'adarshbalika@gmail.com',
    userPassword: 'adarshbalika'
  });

  const handleLogin = () => {
    loginUser(loginCredentials.userName, loginCredentials.userPassword);
  };

  return (
    <div className="login-container">
      <label>
        User name
        <input value={loginCredentials.userName} onChange={(e) => setLoginCredentials({...loginCredentials,userName: e.target.value})} />
      </label>
      <label>
        Password
        <input value={loginCredentials.userPassword} onChange={(e) => setLoginCredentials({...loginCredentials,userPassword: e.target.value})} />
      </label>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => loginUser('adarshbalika@gmail.com', 'adarshbalika')}>
        Login with TestCredits
      </button>
    </div>
  );
};

export default Login;
