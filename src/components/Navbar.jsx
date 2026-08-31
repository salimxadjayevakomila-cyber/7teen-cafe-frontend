 import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  const totalItems = (cart || []).reduce((acc, item) => acc + (item.quantity || 1), 0);
  const isAuthenticated = !!localStorage.getItem("token");

  const handleExit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsOpen(false);
    navigate("/login"); 
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .antique-nav {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: rgba(245, 239, 230, 0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(42, 30, 20, 0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 12px 24px;
        }

        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
        }

        .nav-link-item {
          color: #3a2e28;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          transition: all 0.2s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .nav-link-item:hover, .nav-link-item.active {
          color: #2a3c30;
        }

        .exit-btn {
          color: #e63946 !important;
        }

        .brand-title {
          font-weight: 800;
          font-size: 28px;
          letter-spacing: -1px;
          color: #1a1412;
          text-decoration: none;
          text-transform: uppercase;
        }

        @media (min-width: 768px) {
          .brand-title {
            font-size: 36px;
          }
        }

        .order-yours-btn {
          background-color: #2a3c30;
          color: #f5efe6;
          padding: 8px 16px;
          border-radius: 40px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .order-yours-btn {
            padding: 10px 22px;
            font-size: 12px;
          }
        }

        .cart-badge {
          background-color: #e63946;
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .desktop-menu {
          display: none;
          gap: 20px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .desktop-menu {
            display: flex;
          }
        }

        .burger-btn {
          display: flex;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #1a1412;
        }

        @media (min-width: 992px) {
          .burger-btn {
            display: none;
          }
        }

        .mobile-dropdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 0 8px 0;
          border-top: 1px solid rgba(42, 30, 20, 0.08);
          margin-top: 12px;
        }

        @media (min-width: 992px) {
          .mobile-dropdown {
            display: none;
          }
        }
      `}</style>

      <nav className="antique-nav">
        <div className="nav-wrapper">
          
          {/* DESKTOP MENU LEFT */}
          <div className="desktop-menu">
            <Link to="/menu" className={`nav-link-item ${isActive('/menu') ? 'active' : ''}`}>
              Menu
            </Link>
            <Link to="/about" className={`nav-link-item ${isActive('/about') ? 'active' : ''}`}>
              About us
            </Link>
            <Link to="/brand" className={`nav-link-item ${isActive('/brand') ? 'active' : ''}`}>
              7teen Brand
            </Link>
            <Link to="/cart" className={`nav-link-item ${isActive('/cart') ? 'active' : ''}`}>
              <span>Cart 🛒</span>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/profile" className={`nav-link-item ${isActive('/profile') ? 'active' : ''}`}>
                  Profile 👤
                </Link>
                <button onClick={handleExit} className="nav-link-item exit-btn">
                  Exit
                </button>
              </>
            ) : (
              <Link to="/login" className={`nav-link-item ${isActive('/login') ? 'active' : ''}`}>
                Login 🔑
              </Link>
            )}
          </div>

          {/* BRAND LOGO */}
          <Link to="/" className="brand-title">
            7TEEN
          </Link>

          {/* RIGHT ACTION BUTTON & BURGER */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link to="/cart" className="order-yours-btn">
              <span>ORDER YOURS ↗</span>
              {totalItems > 0 && (
                <span className="cart-badge" style={{ backgroundColor: '#f5efe6', color: '#2a3c30' }}>
                  {totalItems}
                </span>
              )}
            </Link>

            <button className="burger-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </button>
          </div>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {isOpen && (
          <div className="mobile-dropdown">
            <Link to="/menu" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/menu') ? 'active' : ''}`}>
              Menu
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/about') ? 'active' : ''}`}>
              About us
            </Link>
            <Link to="/brand" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/brand') ? 'active' : ''}`}>
              7teen Brand
            </Link>
            <Link to="/cart" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/cart') ? 'active' : ''}`}>
              <span>Cart 🛒</span>
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/profile') ? 'active' : ''}`}>
                  Profile 👤
                </Link>
                <button onClick={handleExit} className="nav-link-item exit-btn">
                  Exit
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setIsOpen(false)} className={`nav-link-item ${isActive('/login') ? 'active' : ''}`}>
                Login 🔑
              </Link>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;