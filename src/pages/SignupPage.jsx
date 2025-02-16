// src/pages/SignupPage.jsx
import React, { useState, useEffect } from "react";
import SignupParallax from "../components/SignupParallax";
import "../styles/common.css";

const SignupPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Trigger animation
  }, []);

  return (
    <div className="signup-page">
      <SignupParallax />
      <div className={`genie-effect ${isVisible ? "active" : ""}`}>
        <h1>Create Account</h1>
        <form>
          <div className="input__container">
            <input
              type="text"
              className="input__search"
              placeholder="Enter your name"
            />
          </div>
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
            <input
              type="password"
              className="input__search"
              placeholder="Confirm your password"
            />
          </div>
          <div className="input__container">
            <button type="submit" className="input__button__shadow">
              Register
            </button>
          </div>
        </form>

        <p>
          Existing User? <a href="/login">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
