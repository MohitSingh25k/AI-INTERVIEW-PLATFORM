import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>AI Job</h2>
      </div>

      <ul className="menu">
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/resume">📄 Resume</Link>
        </li>

        <li>
          <Link to="/interview">🎤 AI Interview</Link>
        </li>

        <li>
          <Link to="/jobs">💼 Jobs</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

        <li>
          <Link to="/settings">⚙️ Settings</Link>
        </li>

        <li>
          <Link to="/login">🚪 Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;