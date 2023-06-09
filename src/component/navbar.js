import React from 'react';
import '../css/styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/homepage">Hot Beans Web</a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/">Course</a>
          </li>
          <li>
            <a href="/apply">Apply</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
