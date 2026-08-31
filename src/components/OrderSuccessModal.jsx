import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessModal({ isOpen, orderId, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleTrack = () => {
    onClose();
    navigate(`/track-order?id=${orderId}`);
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        {/* Animated Check / Coffee Icon */}
        <div style={styles.iconCircle}>
          <span style={{ fontSize: "28px" }}>☕️</span>
        </div>

        <span style={styles.badge}>7TEEN CAFE</span>
        <h3 style={styles.title}>Buyurtmangiz Qabul Qilindi!</h3>
        <p style={styles.subtitle}>
          Buyurtmangiz baristaga uzatildi. Tayyorlanish jarayonini real-vaqt rejimida kuzatishingiz mumkin.
        </p>

        <div style={styles.btnGroup}>
          <button onClick={handleTrack} style={styles.primaryBtn}>
            Buyurtmani kuzatish ➔
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(15, 23, 17, 0.6)",
    backdropFilter: "blur(6px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    padding: "20px",
  },
  modalCard: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    border: "1px solid #EFEBE4",
    animation: "fadeInUp 0.3s ease-out",
  },
  iconCircle: {
    width: "64px",
    height: "64px",
    backgroundColor: "#FAF7F2",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px auto",
    border: "2px solid #1C2A20",
  },
  badge: {
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    color: "#D97706",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#1C2A20",
    margin: "6px 0 8px 0",
  },
  subtitle: {
    fontSize: "13px",
    color: "#6B7280",
    lineHeight: "1.5",
    margin: "0 0 24px 0",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  primaryBtn: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#1C2A20",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "30px",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};