 import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCart();

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  const totalItems = (cart || []).reduce((acc, item) => acc + (item.quantity || 1), 0);
  const isAuthenticated = !!localStorage.getItem("token");

  const handleExit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login"); 
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');

        .antique-nav {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: rgba(245, 239, 230, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(42, 30, 20, 0.08);
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

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 1.5px;
          background-color: #2a3c30;
          transition: width 0.25s ease;
        }

        .nav-link-item:hover::after, .nav-link-item.active::after {
          width: 100%;
        }

        .exit-btn {
          color: #e63946 !important;
        }

        .exit-btn::after {
          background-color: #e63946 !important;
        }

        .brand-title {
          font-weight: 800;
          font-size: 40px;
          letter-spacing: -1px;
          color: #1a1412;
          text-decoration: none;
          text-transform: uppercase;
        }

        .order-yours-btn {
          background-color: #2a3c30;
          color: #f5efe6;
          padding: 10px 22px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
          box-shadow: 0 4px 15px rgba(42, 60, 48, 0.2);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .order-yours-btn:hover {
          background-color: #1a271f;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(42, 60, 48, 0.35);
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
      `}</style>

      <nav className="antique-nav" style={styles.navContainer}>
        
        <div style={styles.leftGroup}>
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

          {/* PROFILE / LOGIN CONTROLS */}
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

        <Link to="/" className="brand-title">
          7TEEN
        </Link>

        <div style={styles.rightGroup}>
          <Link to="/cart" className="order-yours-btn">
            <span>ORDER YOURS NOW ↗</span>
            {totalItems > 0 && (
              <span className="cart-badge" style={{ backgroundColor: '#f5efe6', color: '#2a3c30' }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};

const styles = {
  navContainer: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 45px",
    boxSizing: "border-box",
  },
  leftGroup: {
    display: "flex",
    gap: "22px",
    alignItems: "center",
  },
  rightGroup: {
    display: "flex",
    alignItems: "center",
  },
};

export default Navbar;