import React, { useState } from 'react';
import './AddressModal.css';
import { useUserData } from '../../context/userContext';

const AddressModal = () => {
    const {userDispatch,addAddress} = useUserData()

  const [formData, setFormData] = useState({
    city: '',
    country: '',
    name: '',
    phoneNumber: '',
    state: '',
    street: '',
    zipcode: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAdd = () => {
    userDispatch({type:"openAddress"})
    addAddress(formData)
    console.log(formData);
  };

  const handleCancel = () => {
    userDispatch({type:"openAddress"})
  };

  return (
    <div className="address-modal">
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={formData.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="zipcode"
        placeholder="Zipcode"
        value={formData.zipcode}
        onChange={handleChange}
      />
      <div>
        <button className="add" onClick={handleAdd}>Add</button>
        <button className="cancel" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AddressModal;