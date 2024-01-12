import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your login logic here
    console.log("Logging in with:", email, password);
  };
  return (
    <div>
      <div className="container mx-auto mt-8">
        <Link
          to="/signup"
          type="button"
          className="text-stone-700 font-bold py-1.5 px-5 border-2 rounded-xl focus:outline-none focus:shadow-outline mb-16"
        >
          Create Account
        </Link>
        <h2 className="text-2xl font-bold mb-10 text-stone-500">Login</h2>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block">
              {/* Email: */}
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block">
              {/* Password: */}
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-red-500 text-white font-bold py-1.5 px-5 rounded focus:outline-none focus:shadow-outline"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
