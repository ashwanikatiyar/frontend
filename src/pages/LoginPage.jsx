// src/pages/LoginPage.jsx
import React, { useState, useEffect } from "react";
import LoginParallax from "../components/LoginParallax";
import "../styles/common.css";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation
  }, []);

  return (
    <div className="login-page">
      <LoginParallax />
      <div className={`genie-effect ${isVisible ? "active" : ""}`}>
        <h1>Welcome Back</h1>
        <form>
          <div className="input__container">
            <input
              type="email"
              className="input__search"
              placeholder="Enter your email"
            />
          </div>
          <div className="input__container">
            <input
              type="password"
              className="input__search"
              placeholder="Enter your password"
            />
          </div>
          <div className="input__container">
            <button type="submit" className="input__button__shadow">
              Login
            </button>
          </div>
        </form>

        <p>
          New User? <a href="/signup">Sign Up Here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
