// //src/components/Auth/Login.jsx

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/common.css"; 
import { loginUser } from "../../utils/api";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debug form data
    try {
      const response = await loginUser(formData);
      console.log("API Response:", response); // Debug API response
      if (response.token) {
        login(response.user, response.token);
        alert("Login Successful!");
        navigate("/home");
      } else {
        alert(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error); // Debug API error
      alert("An error occurred. Please try again.");
    }
  };


  return (
    <div className="login-page">
      <h1>Welcome Back</h1>
      <div className={`genie-effect ${isVisible ? "active" : ""}`}>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          New User? <Link to="/signup">Sign Up Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


