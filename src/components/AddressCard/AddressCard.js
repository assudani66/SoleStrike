import React from 'react';
import { useUserData } from '../../context/userContext';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "./AddressCard.css"
const AddressCard = (address) => {
  const { _id, name, street, state, city, zipcode, country, phoneNumber } = address;
  const { removeAddress, editAddress,userData, userDispatch } = useUserData();

  const openAddressModal = (address) => {
    userDispatch({ type: 'openAddress' });
    userDispatch({type:'editAddress',payload:address})
    console.log(userData)
  };

  return (
    <div className="address-card">
      <p className="name">{name}</p>
      <p>{phoneNumber}</p>
      <div className="address-line">
        <p>{street}</p>
        <p>{city}</p>
        <p>{state}</p>
        <p>{country}</p>
      </div>
      <p>{zipcode}</p>
      <div className="buttons">
        <button onClick={() => openAddressModal(address)}>
          <FaPencilAlt />
        </button>
        <button onClick={() => removeAddress(_id)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
