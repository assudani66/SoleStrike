import { useAuth } from "../context/authContext";

const creds = (userEmail, userPassword) => ({
    email: userEmail,
    password: userPassword
  });

export const useLoginData = async (userEmail, userPassword) => {
const {loginDispatch} = useAuth()    
    try{
        const userToken = await fetch("/api/auth/login", {
            method: 'POST',
            body: JSON.stringify(creds(userEmail, userPassword))
          });
          if(userToken.status === 200 ){
            const userTokenJSON = await userToken.json();
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