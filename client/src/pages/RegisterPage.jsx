import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSignupData } from "../redux/slices/authSlice";
import { sendOTP } from "../services/operations/AUTH_API";
import signupImage from '../assets/signupImage.svg'; // Add your signup image

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userType: "Mentor",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleuserTypeChange = (userType) => {
    setFormData({ ...formData, userType });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const jsonData = { ...formData };
      dispatch(setSignupData(jsonData));
      dispatch(sendOTP(jsonData.email, navigate));
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center bg-white px-4 h-[91vh]">
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 rounded-lg overflow-hidden">

        {/* Left Side - Image Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center bg-white">
          <img 
            src={signupImage} 
            alt="Signup" 
            className="w-3/4 mb-6 rounded-lg"
          />
          <h1 className="text-3xl font-semibold mb-4 text-[#171717]">Join Our Platform</h1>
          <p className="text-lg mb-6 text-[#171717]">Find your mentor and boost your career</p>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 p-10 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#171717]">Create Account</h2>

          {/* userType Selection */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow ${formData.userType === "Mentor" ? "bg-[#1D4ED8] text-white" : "bg-gray-200 text-[#171717]"}`}
              onClick={() => handleuserTypeChange("Mentor")}
            >
              Be a mentor
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow ${formData.userType === "Mentee" ? "bg-[#1D4ED8] text-white" : "bg-gray-200 text-[#171717]"}`}
              onClick={() => handleuserTypeChange("Mentee")}
            >
              Be a mentee
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${errors.userName ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
              />
              {errors.userName && (
                <p className="text-red-500 text-sm mb-4">{errors.userName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${errors.email ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-4">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${errors.phone ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mb-4">{errors.phone}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${errors.password ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-4">{errors.password}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 mb-4 border ${errors.confirmPassword ? 'border-red-500' : 'border-[#808080]'} rounded-lg`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#1D4ED8] text-white py-3 rounded-lg shadow-lg hover:bg-[#171717] hover:text-white transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-[#171717]">
            Already have an account?{" "}
            <Link to={'/login'} className="text-[#1D4ED8] font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
