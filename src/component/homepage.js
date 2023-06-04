import React from "react";
import "../css/styles.css";
import logo from '../img/logo.png';

const Homepage = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={logo} alt="ABC Corp logo" className="image" />
      </div>
    </div>
  );
};

export default Homepage;
