import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import './layout.css';

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className="logo-link">
        <h1 className="logo">VideoTube</h1>
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search videos..." />
      </div>
      <div className="header-actions">
        <Link to="/upload"><Button variant="secondary">Upload</Button></Link>
        <Link to="/login"><Button variant="primary">Login</Button></Link>
      </div>
    </header>
  );
};
export default Header;
