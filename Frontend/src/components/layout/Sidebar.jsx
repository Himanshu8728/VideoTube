import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css';

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/liked">Liked Videos</Link></li>
          <li><Link to="/subscriptions">Subscriptions</Link></li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
