import React from 'react';
import { useUserData } from '../../context/userContext';

const AddressCard = (address) => {
  const { _id,name, street, state, city, zipcode, country, phoneNumber } = address
  const {removeAddress,editAddress,addressModalVisible,userDispatch} = useUserData() 
const openAddressModal = (address) => {
  userDispatch({type:'openAddress'})
}
  return (
    <div>
      <p><strong>{name}</strong> </p>
      <p><strong>{phoneNumber}</strong> </p>
      <p><strong>{street}</strong> </p>
      <p><strong>{city}</strong> </p>
      <p><strong>{state}</strong> </p>
      <p><strong>{country}</strong> </p>
      <p><strong>{zipcode}</strong> </p>
      <button onClick={()=>openAddressModal(address)}>Edit</button>
      <button onClick={()=>removeAddress(_id)}>remove</button>
    </div>
  );
};

export default AddressCard;
