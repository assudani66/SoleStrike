import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const authContext = createContext();

const AuthContextProvider = (props) => {

  const creds = (userEmail, userPassword) => ({
    email: userEmail,
    password: userPassword
  });

  const getLoginData = async (userEmail, userPassword) => {
    
    try{
        const userToken = await fetch("/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(creds(userEmail, userPassword))
          });
          const userTokenJSON = await userToken.json();
          loginDispatch({type:"login",payload:userTokenJSON,login:true})
          localStorage.setItem('token', userTokenJSON.encodedToken);

          return userTokenJSON.encodedToken;
    }catch(error){
        console.log(error)
    }
  };

  const signUpUser = async () => {
    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: 'piyush',
              lastName: 'assudani',
              email: 'assudani66@gmail.com',
              password: '78585212',
            }),
          });
      console.log(response)
      localStorage.setItem("token", response.data.encodedToken);
      return response.data.encodedToken;
    } catch (error) {
      console.log(error);
    }
  };

  const getLocalToken = () => {
    return localStorage.getItem("token");
  };

  const loginReducer = (loginInfo, action) => {
    
    switch (action.type) {
    case "login":
        return{...loginInfo,
            token:action.payload,
            isLoggedIn:action.login}

      case "logout":
        localStorage.removeItem("token");
        return {
            ...loginInfo,
          token: "",
          isLoggedIn: false
        };

      case "loginWithTestUser":
          return {
            ...loginInfo,
            token: action.payload,
            isLoggedIn: true
          }

      case "signUp":
          return {
            token: action.payload,
            isLoggedIn: true
          };

      case "checkIsLoggedIn":
        const availableToken = getLocalToken();
        return {
          token: availableToken,
          isLoggedIn: true
        };

      default:
        return loginInfo;
    }
  };
  const initialState = {
    loading: false,
    loginInfo: null,
    error: null
  };

  const [loginInfo, loginDispatch] = useReducer(loginReducer, initialState);

  return (
    <authContext.Provider value={{ loginInfo, loginDispatch,getLoginData,signUpUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthContextProvider;
