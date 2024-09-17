import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSignupData } from "../redux/slices/authSlice";
import { sendOTP } from "../services/operations/AUTH_API";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "Mentor", // Default selected role
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

  const handleRoleChange = (role) => {
    setFormData({ ...formData, role });
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
      console.log("Form Data Submitted: ", jsonData);
      dispatch(setSignupData(jsonData));
      dispatch(sendOTP(jsonData.email, navigate))
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r bg-gray-200 px-4">
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Updated Image Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-blue-500 to-teal-500 p-8 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-semibold mb-4">Join Our Platform</h1>
          <p className="text-lg mb-6">Find your mentor and boost your career</p>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 p-10 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Create Account</h2>
          
          {/* Role Selection */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow ${formData.role === "Mentor" ? "bg-teal-600 text-white" : "bg-gray-200"}`}
              onClick={() => handleRoleChange("Mentor")}
            >
              Be a mentor
            </button>
            <button
              className={`px-4 py-2 mx-2 rounded-lg shadow ${formData.role === "Mentee" ? "bg-teal-600 text-white" : "bg-gray-200"}`}
              onClick={() => handleRoleChange("Mentee")}
            >
              Be a mentee
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              />
            </div>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              value={formData.userName}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.userName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>
            )}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link to={'/login'} className="text-teal-600 font-semibold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;