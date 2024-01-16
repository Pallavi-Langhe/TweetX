import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    !name ||
    !email ||
    !password ||
    !confirmPassword ||
    !(password == confirmPassword)
      ? alert("Invaild data")
      : console.log("Signing up with:", name, email, password, confirmPassword);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile({
        displayName: name,
      });
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <Link
        to="/login"
        type="button"
        className="text-stone-700 font-bold py-1.5 px-14 border-2 rounded-xl focus:outline-none focus:shadow-outline mb-16"
      >
        Login
      </Link>
      <h2 className="text-2xl font-bold mb-10 text-stone-500">
        Create Account
      </h2>
      <form className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {/* Name: */}
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {/* Email: */}
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {/* Password: */}
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {/* Confirm Password: */}
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-red-500 text-white font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
