import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      // Handle form submission
      console.log('Form submitted successfully');
    } else {
      alert('Please agree to the terms and conditions.');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>Your name</label>
        <input type='text' />
        <label>Email</label>
        <input type='email' />
        <label>Subject</label>
        <select>
          <option value='subject1'>Subject 1</option>
          <option value='subject2'>Subject 2</option>
          {/* Add more options as needed */}
        </select>
        <label>Message</label>
        <textarea rows={6} placeholder='Type your message Here' />
        <div className='checkbox-container'>
          <input
            type='checkbox'
            id='terms'
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor='terms'>I agree to the terms and conditions</label>
        </div>
        <button className='btn' type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
