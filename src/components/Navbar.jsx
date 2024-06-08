import React from 'react';
import ThemeToggler from './ThemeToggler';
import '../css/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Weather App
      </div>
      <div className="navbar-actions">
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
