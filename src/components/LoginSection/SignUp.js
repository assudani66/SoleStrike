import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';

const SignUp = () => {

    const {signUpUser} = useAuth()
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });

      const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name] : value
        }))
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
      }
  return (
    <div>
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
        <label htmlFor="lastName">Last Name:</label>
            <input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
            />
        </form>
    </div>
  )
}

export default SignUp