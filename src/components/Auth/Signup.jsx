// //src/components/Auth/Signup.jsx

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/common.css"; // Genie-effect CSS
import { signupUser } from "../../utils/api";

const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Debug form data
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await signupUser(formData);
      console.log("API Response:", response); // Debug API response
      if (response.message === "Signup successful") {
        alert("Signup Successful! Please log in.");
        navigate("/login");
      } else {
        alert(response.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error); // Debug API error
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <h1>Create Account</h1>
      <div className={`genie-effect ${isVisible ? "active" : ""}`}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Password:
            <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
          </label>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} required />
          </label>
          <button type="submit">Register</button>
        </form>
        <p>
          Existing User? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;


