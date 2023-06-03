import React from 'react';

const AddressCard = ({ name, street, state, city, zipcode, country, phoneNumber }) => {
  return (
    <div>
      <h2>Address</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Street:</strong> {street}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>State:</strong> {state}</p>
      <p><strong>ZIP Code:</strong> {zipcode}</p>
      <p><strong>Country:</strong> {country}</p>
      <p><strong>Phone Number:</strong> {phoneNumber}</p>
      <button>Edit</button>
      <button>Remove</button>
    </div>
  );
};

export default AddressCard;
