"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    username: "", 
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.durlavparajuli.com.np/api/auth/register",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      localStorage.setItem("token", response.data.token);
      alert("Registration Successful!");
      router.push("/login");
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      alert("Registration Failed! Check your credentials.");
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-[#12122a] text-white rounded-2xl shadow-lg p-10 w-[400px]">
        <div className="flex justify-center">
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-pink-500">
            <span className="text-6xl">👤</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mt-5">Register Here</h2>

        <form onSubmit={handleRegister}>
          <div className="mt-5">
            <label className="block font-semibold">Username</label>
            <div className="flex items-center bg-white text-black px-3 py-2 rounded-md">
              <FaEnvelope className="mr-2 text-gray-500" />
              <input
                type="text"
                name="username"
                value={login.username}
                placeholder="Enter your username"
                className="outline-none w-full bg-transparent"
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block font-semibold">Email</label>
            <div className="flex items-center bg-white text-black px-3 py-2 rounded-md">
              <FaEnvelope className="mr-2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={login.email}
                placeholder="Enter your email address"
                className="outline-none w-full bg-transparent"
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block font-semibold">Phone</label>
            <div className="flex items-center bg-white text-black px-3 py-2 rounded-md">
              <FaEnvelope className="mr-2 text-gray-500" />
              <input
                type="tel"
                name="phone"
                value={login.phone}
                placeholder="Enter your phone number"
                className="outline-none w-full bg-transparent"
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block font-semibold">Password</label>
            <div className="flex items-center bg-white text-black px-3 py-2 rounded-md">
              <FaLock className="mr-2 text-gray-500" />
              <input
                type="password"
                name="password"
                value={login.password}
                placeholder="Enter your password"
                className="outline-none w-full bg-transparent"
                onChange={handleInput}
                required
              />
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-md"
            >
              Register Now
            </button>
          </div>
        </form>

        <div className="text-center mt-5">
          <Link href="/" className="text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
