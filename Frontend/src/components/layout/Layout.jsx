import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout-root">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
