import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-rose-500 ml-16">
          TweetX
        </Link>

        {/* Navigation Links */}
        <div className="space-x-8 mr-48">
          <Link to="/posts" className="text-rose-500 font-medium">
            Feed
          </Link>
          <Link to="/users" className="text-rose-500 font-medium">
            Users
          </Link>
          <Link to="/profile" className="text-rose-500 font-medium">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
