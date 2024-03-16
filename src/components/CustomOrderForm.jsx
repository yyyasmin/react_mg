// CustomOrderForm.jsx

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { baseUrl } from '../helpers/ServerRoutes';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const CustomOrderFormWrapper = styled.form`
  width: 400px;
  padding: 20px;
  background-color: #bbfad1;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  margin-top: 5px;

  div {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    font-size: 20px;
  }

  input,
  select {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    width: 100%;
    padding: 15px; /* Increased padding for bigger size */
    font-size: 20px; /* Increased font size */
    background-color: #00cc00; /* Green color */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }
`;

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    ageGroup: '',
    skillLevel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${baseUrl}/submit_order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
        alert('Order placed successfully!');
      } else {
        console.error('Failed to submit form');
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    console.log('IN CUSTOMORDER - useEffect[formData] -- formData:', formData);
  }, [formData]);

  return (
    <FormContainer>
      <CustomOrderFormWrapper onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age Group:</label>
          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
            <option value="">Select Age Group</option>
            <option value="kids">Kids</option>
            <option value="teens">Teens</option>
            <option value="adults">Adults</option>
          </select>
        </div>
        <div>
          <label>Skill Level:</label>
          <select name="skillLevel" value={formData.skillLevel} onChange={handleChange} required>
            <option value="">Select Skill Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <button type="submit">Place Custom Order</button> {/* Updated button text */}
      </CustomOrderFormWrapper>
    </FormContainer>
  );
};

export default CustomOrderForm;
