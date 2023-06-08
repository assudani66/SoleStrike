import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { toast } from '../../node_modules/react-hot-toast/dist/index';

const authContext = createContext();

const notify =  (message) => toast(message)

const AuthContextProvider = (props) => {

  const creds = (userEmail, userPassword) => ({
    email: userEmail,
    password: userPassword
  });

  const loginUser = async (userEmail, userPassword) => {
 
    try{
        const userToken = await fetch("/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(creds(userEmail, userPassword))
          });
          if(userToken.ok){
            const userTokenJSON = await userToken.json();
            notify("user LoggedIn")
            loginDispatch({type:"login",payload:userTokenJSON.encodedToken,login:true})
            localStorage.setItem('token', userTokenJSON.encodedToken);
          }
          else{
            console.log(loginInfo)
            notify("user doesnot exist")
            loginDispatch({type:"login",payload:"",login:false})
            localStorage.setItem('token', "");
          }
    }catch(error){
        console.log(error)
        loginDispatch({type:"login",payload:"tokenNotAllowed",login:true})
    }
  };

  const signUpUser = async ({firstName,lastName,email,password}) => {
    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              password: password,
            }),
          });
      if(response.ok){
        notify("You are signed Up")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginReducer = (state, action) => {

    switch (action.type) {
      case "login":
        return {
          ...state,
          token: action.payload,
          isLoggedIn: action.login
        };
      case "logout":
        localStorage.removeItem("token");
        return {
          ...state,
          token: "",
          isLoggedIn: false
        };
      case "loginWithTestUser":
        return {
          ...state,
          token: action.payload,
          isLoggedIn: action.login
        };
      case "signUp":
        return {
          ...state,
          token: action.payload,
          isLoggedIn: true
        };
      case "loadLocalToken":
        return {
          ...state,
          token: action.payload,
          isLoggedIn: action.login
        };
      default:
        return state;
    }
  };

  const initialState = {
    token:"",
    loggedInEmail:"",
    userDetails:"",
    isLoggedIn:false
  };

  const [loginInfo, loginDispatch] = useReducer(loginReducer, initialState);

  useEffect(()=>{
    const localToken = localStorage.getItem("token")
    loginDispatch({type:"loadLocalToken",payload:localToken,login:localToken ? true : false})
  },[])

  return (
    <authContext.Provider value={{ loginInfo, loginDispatch,loginUser,signUpUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthContextProvider;
