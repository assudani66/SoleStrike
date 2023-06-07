import { createContext, useContext, useEffect, useReducer } from "react";

const userContext = createContext()

const UserContextProvider = ({children}) => {
    const userToken = localStorage.getItem("token")
    const resetAddress = (action) => {
      if(action === "reset"){
        return {
          city: '',
          country: '',
          name: '',
          phoneNumber: '',
          state: '',
          street: '',
          zipcode: ''
        }
      }
    }
    const userReducer = (userState,action) =>{
        switch (action.type) {
            case "LoginUserData":
                break;
            case "addAddress":
                return {...userState,address:action.payload}
            case "editAddress":
                return {...userState,selectedAddress:action.payload,editAddress:true}
            case "removeAddress":
                return {...userState,address:action.payload}
            case "openAddress":
                return {...userState,addressModalVisible:!userState.addressModalVisible}
            case"openFreshAddress":
                return{...userState,addressModalVisible:!userState.addressModalVisible,selectedAddress:resetAddress(action.payload),editAddress:false}

            default:
                break;
        }
        }
        
        const getAddresses = async () => {
            try {
              const response = await fetch('/api/user/addresses', {
                method: 'GET',
                headers: {
                  'authorization': userToken,
                },
              });
              if (response.ok) {
                const data = await response.json();
                const addresses = data.address;
                userDispatch({type:"addAddress",payload:addresses})
              } else {
                const errorData = await response.json();
                console.error('Error retrieving addresses:', errorData);
              }
            } catch (error) {
              console.error('Error retrieving addresses:', error);
            }
          };

          const addAddress = async(address) => {
            try{
              const response = await fetch('/api/user/address',{
                method:'POST',
                headers:{
                  'authorization' : userToken,
                },
                body: JSON.stringify({
                  address: address,
                }),
              });
              if (response.ok) {
                const data = await response.json();
                console.log(data.address)
                const addresses = data.address;
                userDispatch({type:"addAddress",payload:addresses})
              } else {
                const errorData = await response.json();
                console.error('Error retrieving addresses:', errorData);
              }
              }
              catch(error){
                console.error('Error retrieving addresses:', error)
              }
            }

          const editAddress = async(address,addressId) => {
            try{
              const response = await fetch(`/api/user/address/${addressId}`,{
                method:'POST',
                headers:{
                  'authorization' : userToken,
                },
                body: JSON.stringify({
                  address: address,
                }),
              });
              if (response.ok) {
                const data = await response.json();
                console.log(data.address)
                const addresses = data.address;
                userDispatch({type:"addAddress",payload:addresses})
              } else {
                const errorData = await response.json();
                console.error('Error retrieving addresses:', errorData);
              }
              }
              catch(error){
                console.error('Error retrieving addresses:', error)
              }
            }

          const removeAddress = async (addressId) => {
            try {
              const response = await fetch(`/api/user/address/${addressId}`, {
                method: 'DELETE',
                headers: {
                  'authorization': userToken,
                },
              });
          
              if (response.ok) {
                const data = await response.json();
                console.log(data.address)
                const addresses = data.address;
                userDispatch({type:"addAddress",payload:addresses})
              } else {
                const errorData = await response.json();
                console.error('Error retrieving addresses:', errorData);
              }
              }
              catch(error){
                console.error('Error retrieving addresses:', error)
              }
          };

          useEffect(()=>{
            getAddresses()
          },[])

        const intialUserData = {
            name: "",
            email: "",
            selectedAddress:{
              city: '',
              country: '',
              name: '',
              phoneNumber: '',
              state: '',
              street: '',
              zipcode: ''
            },
            editAddress:false,
            addressModalVisible:false,
            address: [],
            
        }
        const [userData,userDispatch] = useReducer(userReducer,intialUserData)
        
   return(<userContext.Provider value={{getAddresses,editAddress,addAddress,removeAddress,userData,userDispatch}}>
        {children}
    </userContext.Provider>)
}

export default UserContextProvider

export const useUserData = () => useContext(userContext)
