import React from 'react';
import { useTheme } from './ThemeContext';
import '../css/App.css'

const ThemeToggler = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggler;
