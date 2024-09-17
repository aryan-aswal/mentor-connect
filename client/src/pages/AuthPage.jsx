import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/operations/AUTH_API'
import { useDispatch } from 'react-redux'

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      dispatch(login(formData.email, formData.password, navigate));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-200 to-blue-300 px-4">
      <div className="flex flex-col lg:flex-row w-full lg:w-4/5 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Side - Image Section */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-blue-500 to-teal-500 p-8 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl font-semibold mb-4">Welcome Back</h1>
          <p className="text-lg mb-6">Login to continue your mentorship journey</p>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 p-10 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-600">Login</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-4">{errors.email}</p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 mb-4 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-4">{errors.password}</p>
            )}

            <Link to={'/forgot-password'} className="text-teal-600 hover:underline mb-4 block text-right">
              Forgot password?
            </Link>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-teal-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
