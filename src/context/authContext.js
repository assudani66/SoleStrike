import React, { createContext, useContext, useEffect, useReducer } from 'react';

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
          console.log(userToken,"userInfo")
          if(userToken.status === 200 ){
            const userTokenJSON = await userToken.json();
            console.log(userToken)
            loginDispatch({type:"login",payload:userTokenJSON.encodedToken,login:true})
            localStorage.setItem('token', userTokenJSON.encodedToken);
          }
          else{
            loginDispatch({type:"login",payload:"",login:false})
            localStorage.setItem('token', "");
          }
    }catch(error){
        console.log(error)
        loginDispatch({type:"login",payload:"tokenNotAllowed",login:true})
    
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

      localStorage.setItem("token", response.data.encodedToken);
      
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
    isLoggedIn:false
  };

  const [loginInfo, loginDispatch] = useReducer(loginReducer, initialState);

  useEffect(()=>{
    const localToken = localStorage.getItem("token")
    console.log(localToken? true :false)

    loginDispatch({type:"loadLocalToken",payload:localToken,login:localToken ? true : false})
  },[])

  return (
    <authContext.Provider value={{ loginInfo, loginDispatch,getLoginData,signUpUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthContextProvider;
