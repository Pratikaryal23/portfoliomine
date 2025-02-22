"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/auth";

const Login = () => {
  const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth(); // Ensure useAuth is properly used
  if (!auth) {
    console.error("Auth context is undefined. Ensure it is properly set up.");
  }
  const { storeToken, isLoggedIn } = auth || {}; // Avoid destructuring if auth is undefined

  

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://api.durlavparajuli.com.np/api/auth/login",
        login,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      if (storeToken) {
        storeToken(response.data.token);
      } else {
        localStorage.setItem("token", response.data.token); 
      }

      alert("Login Successful!");
      router.push("/");
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      alert("Login Failed! Check your credentials.");
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

        <h2 className="text-2xl font-bold text-center mt-5">Login Here</h2>

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
            />
          </div>
        </div>

        <div className="flex gap-3 mt-5">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white w-1/2 py-2 rounded-md"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white w-1/2 py-2 rounded-md"
            onClick={() => {
              router.push("/register");
            }}
          >
            Register Now
          </button>
        </div>

        <div className="mt-4 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-md">
            Forgot Password
          </button>
        </div>

        <div className="text-center mt-5">
          <Link href="/" className="text-green-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
