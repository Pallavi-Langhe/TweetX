import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

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
            <li>
              <Link to="/posts"></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
