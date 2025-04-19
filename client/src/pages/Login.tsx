import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        navigate('/home');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#006994] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl text-white font-bold">ScriptIn</h1>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email or Phone"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006994]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006994]"
          />
          <button
            type="submit"
            className="w-full bg-[#006994] text-white py-2 rounded font-medium hover:bg-[#005f82] cursor-pointer"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2 mb-3 hover:bg-gray-100 cursor-pointer">
          <FaGoogle className="mr-2" /> Continue with Google
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2 mb-3 hover:bg-gray-100 cursor-pointer">
          <FaMicrosoft className="mr-2" /> Continue with Microsoft
        </button>
        <button className="w-full flex items-center justify-center border border-gray-300 rounded py-2 hover:bg-gray-100 cursor-pointer">
          <FaApple className="mr-2" /> Continue with Apple
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          New to ScriptIn?{' '}
          <Link to="/signup" className="text-[#006994] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
