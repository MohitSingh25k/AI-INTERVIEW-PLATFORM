import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🤖 AI Job Platform
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
        <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
        <button className="register-btn">Register</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;