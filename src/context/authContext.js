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
          if(userToken.status === 200 ){
            const userTokenJSON = await userToken.json();
            console.log(userToken)
            notify("user LoggedIn")
            console.log(userTokenJSON)
            loginDispatch({type:"login",payload:userTokenJSON.encodedToken,login:true})
            localStorage.setItem('token', userTokenJSON.encodedToken);
          }

          else{
            console.log(userToken)
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
      console.log(response)
      if(response.ok){
        notify("You are signed Up")
      }
    } catch (error) {
      console.log(error);
    }
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
            isLoggedIn: action.login
          }
      case "signUp":
          return {
            token: action.payload,
            isLoggedIn: true
          };

      case "loadLocalToken":
          return{
            token:action.payload,
            isLoggedIn:action.login
          }
      default:
        return loginInfo;
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
