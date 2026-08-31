 import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../utils/axios";

const Profile = () => {
  const navigate = useNavigate();

  // LocalStorage-dan ro'yxatdan o'tgan user ma'lumotlarini o'qish
  const localUser = JSON.parse(localStorage.getItem("user") || "{}");

  const [user, setUser] = useState(localUser);
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Backend-dan eng so'nggi ma'lumotni olish
        const userRes = await api.get("/auth/me");
        if (userRes.data) {
          setUser(userRes.data);
          localStorage.setItem("user", JSON.stringify(userRes.data)); // yangilab qo'yamiz
        }

        const ordersRes = await api.get("/orders/my-orders");
        setRecentOrders(ordersRes.data || []);
      } catch (err) {
        console.error("Profile fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Foydalanuvchi ismi va telefonini aniqlash
  const userName =
    user?.name ||
    user?.fullName ||
    user?.username ||
    localUser?.name ||
    localUser?.fullName ||
    "Mijoz";

  const userPhone =
    user?.phone ||
    user?.phoneNumber ||
    user?.phone_number ||
    localUser?.phone ||
    localUser?.phoneNumber ||
    "";

  if (loading && !userName) {
    return (
      <div className="profile-loader">
        <span>☕️</span>
      </div>
    );
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');

        .profile-page {
          min-height: 85vh;
          background-color: #F5EFE6;
          padding: 40px 20px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          color: #1C2A20;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .profile-wrapper {
          width: 100%;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* USER MAIN CARD */
        .user-main-card {
          background-color: #FAF7F2;
          border-radius: 24px;
          padding: 28px 32px;
          border: 1px solid rgba(42, 60, 48, 0.08);
          box-shadow: 0 4px 20px rgba(28, 42, 32, 0.02);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-left-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .user-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #1C2A20;
          color: #F5EFE6;
          font-size: 24px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-heading h2 {
          margin: 0;
          font-size: 24px;
          font-weight: 800;
          color: #1C2A20;
        }

        .user-heading p {
          margin: 4px 0 0 0;
          font-size: 14px;
          color: #7A6E65;
          font-weight: 500;
        }

        .logout-btn-header {
          background: transparent;
          border: 1.5px solid #E63946;
          color: #E63946;
          padding: 10px 22px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .logout-btn-header:hover {
          background: #E63946;
          color: #FFFFFF;
        }

        /* BUYURTMALAR CARD */
        .info-card {
          background-color: #FAF7F2;
          border-radius: 24px;
          padding: 28px 32px;
          border: 1px solid rgba(42, 60, 48, 0.08);
          box-shadow: 0 4px 20px rgba(28, 42, 32, 0.02);
        }

        .card-title {
          font-size: 18px;
          font-weight: 800;
          color: #1C2A20;
          margin-top: 0;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .order-row-item {
          background-color: #F5EFE6;
          border-radius: 16px;
          padding: 16px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid rgba(42, 60, 48, 0.04);
        }

        .order-code {
          font-size: 14px;
          font-weight: 800;
          color: #1C2A20;
          display: block;
        }

        .order-date {
          font-size: 12px;
          color: #8A7E75;
        }

        .order-status {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(42, 60, 48, 0.08);
          color: #1C2A20;
          display: inline-block;
          margin-bottom: 2px;
        }

        .profile-loader {
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #F5EFE6;
          font-size: 32px;
        }

        @media (max-width: 640px) {
          .user-main-card { flex-direction: column; align-items: flex-start; gap: 16px; }
        }
      `}</style>

      <div className="profile-page">
        <div className="profile-wrapper">
          
          {/* USER CARD */}
          <div className="user-main-card">
            <div className="user-left-info">
              <div className="user-avatar">
                {userName ? userName.charAt(0).toUpperCase() : "👤"}
              </div>
              <div className="user-heading">
                <h2>{userName}</h2>
                {userPhone ? <p>{userPhone}</p> : null}
              </div>
            </div>

            <button onClick={handleLogout} className="logout-btn-header">
              Chiqish
            </button>
          </div>

          {/* OXIRGI BUYURTMALAR */}
          <div className="info-card">
            <div className="card-title">
              <span>Oxirgi Buyurtmalar</span>
              <Link to="/menu" style={{ fontSize: "13px", color: "#D97706", textDecoration: "none", fontWeight: "700" }}>
                + Yangi buyurtma
              </Link>
            </div>

            {recentOrders.length === 0 ? (
              <p style={{ fontSize: "14px", color: "#8A7E75", fontStyle: "italic", margin: 0, padding: "10px 0" }}>
                Hali buyurtmalar tarixi mavjud emas.
              </p>
            ) : (
              <div className="orders-list">
                {recentOrders.map((order) => (
                  <div key={order._id} className="order-row-item">
                    <div>
                      <span className="order-code">#{order._id.slice(-6)}</span>
                      <span className="order-date">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <span className="order-status">{order.status || "Qabul qilindi"}</span>
                      <strong style={{ display: "block", fontSize: "14px", color: "#1C2A20" }}>
                        {order.totalAmount?.toLocaleString()} so'm
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;