import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../services/operations/AUTH_API';
import { useNavigate } from 'react-router';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupData } = useSelector((state) => state.auth)

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {...signupData, otp}
    dispatch(signup(data, navigate));
  };

  return (
    <div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center text-2xl text-gray-700">Loading...</div>
      ) : (
        <div className="min-h-[calc(100vh-3.5rem)] flex justify-center items-center bg-gradient-to-r bg-gray-200 h-screen">
          <div className="bg-white shadow-lg rounded-lg max-w-[400px] p-6 sm:p-8">
            <h1 className="text-blue-900 font-semibold text-2xl mb-4">Verify Email</h1>
            <p className="text-gray-700 text-lg mb-6">
              A verification code has been sent to your email. Please enter the code below.
            </p>
            <form onSubmit={submitHandler}>
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle="rounded border border-gray-300 text-5xl text-center bg-gray-100 text-black"
                focusStyle="border-blue-500"
                isInputNum={true}
                shouldAutoFocus={true}
                containerStyle="flex justify-between space-x-2"
                renderInput={(props) => <input {...props} />}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-6 hover:bg-blue-700 transition-all"
              >
                Verify Email
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyOtp;