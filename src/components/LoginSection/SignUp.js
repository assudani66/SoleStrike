import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import "./SignUp.css"
import { toast } from '../../../node_modules/react-hot-toast/dist/index';
const SignUp = () => {
  const { signUpUser } = useAuth();

  const notify = (message) => toast(message)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [confirmPassword,setConfirmPassword] = useState("")
  const [submitHandle,setHandleSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password === confirmPassword){
      setHandleSubmit(true)
      signUpUser(formData);

    }
    else{
      notify("incorrect Password")
    }
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Confirm Passowrd:</label>
        <input
          type="password"
          id="confirm_password"
          name="password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
