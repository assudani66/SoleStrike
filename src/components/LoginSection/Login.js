import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useLocation, useNavigate } from 'react-router-dom';
import "./Login.css"
const Login = () => {
  const { loginInfo, loginUser } = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    userName: 'adarshbalika@gmail.com',
    userPassword: 'adarshbalika'
  });
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = () => {
    loginUser(loginCredentials.userName, loginCredentials.userPassword);
    console.log(location);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <div className="login-container">
      <label>
        userName
        <input value={loginCredentials.userName} />
      </label>
      <label>
        password
        <input value={loginCredentials.userPassword} />
      </label>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => loginUser('adarshbalika@gmail.com', 'adarshbalika')}>
        Login with TestCredits
      </button>
    </div>
  );
};

export default Login;
