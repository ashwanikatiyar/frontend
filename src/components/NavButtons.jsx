//src/components/NavButtons.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import "./../styles/common.css";

const NavButtons = () => {
  
  const navigate = useNavigate();

  return (
    <div className="nav-buttons-container">
      <button className="nav-button">
        <div className="original">My Account</div>
        <div className="letters">
          <span>M</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>A</span>
          <span>C</span>
          <span>C</span>
          <span>O</span>
          <span>U</span>
          <span>N</span>
          <span>T</span>
        </div>
      </button>
      <button className="nav-button" onClick={() => navigate("/recordings")} >
        <div className="original">My Recordings</div>
        <div className="letters">
          <span>M</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>R</span>
          <span>E</span>
          <span>C</span>
          <span>O</span>
          <span>R</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>S</span>
        </div>
      </button>
      <button className="nav-button">
        <div className="original">Logout</div>
        <div className="letters">
          <span>L</span>
          <span>O</span>
          <span>G</span>
          <span>O</span>
          <span>U</span>
          <span>T</span>
        </div>
      </button>
    </div>
  );
};

export default NavButtons;
