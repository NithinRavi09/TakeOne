import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  role: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpForm>({
    name: '',
    email: '',
    password: '',
    role: 'writer',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      if (res.data.success) {
        navigate('/login');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#006994] flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Join ScriptIn</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006994]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006994]"
          />
          <input
            type="password"
            name="password"
            placeholder="Password (6+ characters)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#006994]"
          />
          {/* Hidden role or role selector if needed */}
          <button
            type="submit"
            className="w-full bg-[#006994] text-white py-2 rounded font-medium hover:bg-[#005f82] cursor-pointer"
          >
            Agree & Join
          </button>
        </form>

        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

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
          Already on ScriptIn?{' '}
          <Link to="/login" className="text-[#006994] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
