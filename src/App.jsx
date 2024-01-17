import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

// import { UserContext } from "./context/UserContext";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/login"></Link>
            </li>
            <li>
              <Link to="/signup"></Link>
            </li>
            <li>
              <Link to="/users"></Link>
            </li>
            <li>
              <Link to="/profile"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <UserContext.Provider value={{}}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Feed />} />
          {/* </UserContext.Provider> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
