import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Register.css";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      formData
    );

    alert(res.data.message || "Registration Successful!");
  } catch (err) {
    alert(err.response?.data?.message || "Registration Failed");
  }
};
  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account 🚀</h2>
        <p>Join AI Job Platform</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name:e.target.value })
          } />

          <input type="email" placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email:e.target.value })} />

          <input type="password" placeholder="Create Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password:e.target.value })} />

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