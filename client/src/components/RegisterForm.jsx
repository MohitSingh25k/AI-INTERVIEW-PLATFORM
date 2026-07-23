import { Link } from "react-router-dom";
import "../styles/Register.css";

function RegisterForm() {
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 🚀</h2>
        <p>Join AI Job Platform</p>

        <form>
          <input type="text" placeholder="Full Name" />

          <input type="email" placeholder="Enter your email" />

          <input type="password" placeholder="Create Password" />

          <input type="password" placeholder="Confirm Password" />

          <button type="submit">Create Account</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;