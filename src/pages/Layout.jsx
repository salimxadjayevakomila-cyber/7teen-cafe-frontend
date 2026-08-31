 import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="layout-container" style={{ width: '100%', minHeight: '100vh', backgroundColor: '#1C2A20', margin: 0, padding: 0 }}>
      <Navbar />
      <main style={{ width: '100%', minHeight: '80vh', margin: 0, padding: 0 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;