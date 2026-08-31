 import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Registr from "./pages/Registr";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Menu from "./pages/Menu";
import About from "./pages/About"; 
import Brand from "./pages/Brand"; 
import Create from "./pages/Create";
import TrackOrder from "./pages/TrackOrder";
import Profile from "./pages/Profile"; 
import { jwtDecode } from "jwt-decode";
import { CartProvider } from './context/CartContext';
import BaristaDashboard from "./pages/BaristaDashboard";

const App = () => {
  const [token, setToken] = useState(null);
  const [decode, setDecode] = useState({});
  const [loading, setLoading] = useState(true);

  const checkToken = () => {
    let savedToken = localStorage.getItem("token");
    if (savedToken) {
      try {
        let _decode = jwtDecode(savedToken);
        setDecode(_decode);
        setToken(savedToken);
      } catch (err) {
        console.error("Token xatosi:", err.message);
        localStorage.removeItem("token");
        setToken(null);
        setDecode({});
      }
    } else {
      setToken(null);
      setDecode({});
    }
  };

  useEffect(() => {
    checkToken();
    setLoading(false);
  }, []);

  if (loading) {
    return <div style={{ color: "#fff", textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/register" element={token ? <Navigate to="/" replace /> : <Registr />} />
          <Route path="/registr" element={token ? <Navigate to="/" replace /> : <Registr />} />
          
          <Route 
            path="/login" 
            element={token ? <Navigate to="/" replace /> : <Login onLoginSuccess={checkToken} />} 
          />

          <Route path="/" element={token ? <Layout /> : <Navigate to="/login" replace />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="admin" element={<BaristaDashboard />} />
            
            <Route path="menu" element={<Menu />} />
            <Route path="products/:id" element={<Menu />} />

            <Route path="brand" element={<Brand />} />  
            <Route path="about" element={<About />} />  

            {/* 2. <h1> o'rniga Profile komponenti qo'yildi */}
            <Route path="profile" element={<Profile />} />
            
            <Route path="orders" element={<Orders />} />
            <Route path="track-order" element={<TrackOrder />} />

            {decode.role === "ADMIN" && (
              <>
                <Route path="create" element={<Create />} />
                <Route path="comments" element={<h1>Comments</h1>} />
              </>
            )}

            {decode.role !== "ADMIN" && (
              <Route path="cart" element={<Cart />} />
            )}
          </Route>

          <Route path="*" element={<Navigate to={token ? "/" : "/login"} replace />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;