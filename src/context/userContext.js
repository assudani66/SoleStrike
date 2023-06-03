import { createContext, useContext, useReducer } from "react";

const userContext = createContext()

const UserContextProvider = ({children}) => {
    const userToken = localStorage.getItem("token")
    const userReducer = (action,dispatch) =>{
        switch (action.type) {
            case "LoginUserData":
                
                break;
            case "addAdress":
                break;
            
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
                console.log(data)
                const addresses = data.address;
                // console.log('Addresses:', addresses);
              } else {
                const errorData = await response.json();
                console.error('Error retrieving addresses:', errorData);
              }
            } catch (error) {
              console.error('Error retrieving addresses:', error);
            }
          };

          const removeAddress = async (addressId) => {
            try {
              const response = await fetch(`/api/user/address/${addressId}`, {
                method: 'DELETE',
                headers: {
                  'authorization': userToken,
                },
              });
          
              if (response.ok) {
                console.log('Address removed successfully');
              } else {
                const errorData = await response.json();
                console.error('Error removing address:', errorData);
              }
            } catch (error) {
              console.error('Error removing address:', error);
            }
          };
          

        const intialUserData = {
            name: "",
            email: "",
            address: {},
            
        }
        const [userData,dispatch] = useReducer(userReducer,intialUserData)
        
   return(<userContext.Provider value={{getAddresses,removeAddress}}>
        {children}
    </userContext.Provider>)
}

export default UserContextProvider

export const useUserData = () => useContext(userContext)
