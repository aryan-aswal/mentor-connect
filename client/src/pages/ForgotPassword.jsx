import React, { useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetPasswordToken } from '../services/operations/AUTH_API';

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(resetPasswordToken(email, setEmailSent));
    console.log(email);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-md w-full'>
        <h1 className='text-2xl font-semibold text-gray-800 mb-4'>
          {emailSent ? 'Check your email' : 'Reset your password'}
        </h1>
        
        <p className='text-gray-600 mb-4'>
          {emailSent 
            ? `We have sent a reset email to ${email}`
            : 'Enter your email address below to receive password reset instructions. If you don’t have access to your email, we can try account recovery.'}
        </p>

        <form onSubmit={submitHandler}>
          {!emailSent && (
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>
                Email <span className='text-red-500'>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Enter your email address'
                className='w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                value={email}
              />
            </div>
          )}
          <button
            type="submit"
            className={`w-full py-2 px-4 font-medium rounded-md ${emailSent ? 'bg-blue-600 text-white' : 'bg-yellow-400 text-gray-800'} transition-colors duration-300 hover:${emailSent ? 'bg-blue-700' : 'bg-yellow-300'}`}
          >
            {emailSent ? 'Resend Mail' : 'Reset Password'}
          </button>
        </form>
        
        <div className='mt-4 text-center'>
          <Link to="/login" className='flex items-center justify-center text-blue-600 hover:underline'>
            <FaArrowLeftLong className='mr-2' />
            Back To Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;