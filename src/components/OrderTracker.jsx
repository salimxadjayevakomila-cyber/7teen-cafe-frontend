 import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import instance from "../utils/axios";

const STATUSES = [
  { key: "accepted", label: "Qabul qilindi", icon: "☕️", desc: "Buyurtmangiz baristaga uzatildi" },
  { key: "preparing", label: "Tayyorlanmoqda", icon: "🧑🏻‍🍳", desc: "Barista buyurtmangizni tayyorlamoqda" },
  { key: "delivering", label: "Tayyor / Yo'lda", icon: "🚚", desc: "Buyurtmangiz tayyor, bahramand bo'ling!" },
];

export default function TrackOrder() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [order, setOrder] = useState(null);

  const fetchOrder = () => {
    if (!id) return;
    instance
      .get(`/orders/${id}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log("Fetch error:", err));
  };

  useEffect(() => {
    fetchOrder();
    const interval = setInterval(fetchOrder, 4000);
    return () => clearInterval(interval);
  }, [id]);

  if (!order) {
    return (
      <div style={styles.loadingContainer}>
        <p style={{ color: "#6B7280", fontWeight: "500" }}>Buyurtma ma'lumotlari yuklanmoqda...</p>
      </div>
    );
  }

  const currentStep = Math.max(0, STATUSES.findIndex((s) => s.key === order.status));

  return (
    <div style={styles.pageWrapper}>
      <style>{`
        @keyframes pulseSoft {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
          100% { transform: scale(1); opacity: 1; }
        }
        .active-status-icon {
          animation: pulseSoft 2.5s infinite ease-in-out;
        }
      `}</style>

      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.brandBadge}>7TEEN CAFE</span>
          <h1 style={styles.title}>Buyurtmangiz Holati</h1>
          <p style={styles.ticketNumber}>CHEK #{order._id?.slice(-6).toUpperCase()}</p>
        </div>

        {/* Minimal Progress Bar */}
        <div style={styles.progressContainer}>
          <div style={styles.lineBg} />
          <div
            style={{
              ...styles.lineActive,
              width: `${(currentStep / (STATUSES.length - 1)) * 100}%`,
            }}
          />

          {STATUSES.map((step, idx) => {
            const isDone = idx <= currentStep;
            const isCurrent = idx === currentStep;

            return (
              <div key={step.key} style={styles.stepWrapper}>
                <div
                  className={isCurrent ? "active-status-icon" : ""}
                  style={{
                    ...styles.stepCircle,
                    backgroundColor: isDone ? "#1C2A20" : "#FFFFFF",
                    color: isDone ? "#FFFFFF" : "#A1A1AA",
                    border: isDone ? "2px solid #1C2A20" : "2px solid #E4E4E7",
                    boxShadow: isCurrent ? "0 4px 12px rgba(28, 42, 32, 0.15)" : "none",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>{step.icon}</span>
                </div>
                <span
                  style={{
                    ...styles.stepText,
                    color: isDone ? "#1C2A20" : "#A1A1AA",
                    fontWeight: isCurrent ? "700" : "500",
                  }}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Status Message */}
        <div style={styles.statusBox}>
          <p style={styles.statusDesc}>{STATUSES[currentStep]?.desc || "Kutilmoqda..."}</p>
        </div>

        {/* Minimalist Receipt Info */}
        <div style={styles.receiptDetails}>
          <div style={styles.row}>
            <span>Mijoz:</span>
            <strong>{order.customerName || "Mehmon"}</strong>
          </div>
          <div style={styles.row}>
            <span>To'lov summasi:</span>
            <strong style={{ color: "#1C2A20", fontSize: "16px" }}>
              {order.totalPrice?.toLocaleString()} so'm
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    minHeight: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF7F2",
    padding: "20px",
    fontFamily: "'Inter', sans-serif",
  },
  loadingContainer: {
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "36px 28px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
    border: "1px solid #EFEBE4",
  },
  header: {
    textAlign: "center",
    marginBottom: "32px",
  },
  brandBadge: {
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1.5px",
    color: "#D97706",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#1C2A20",
    margin: "4px 0 2px 0",
  },
  ticketNumber: {
    fontSize: "12px",
    color: "#9CA3AF",
    margin: 0,
    fontWeight: "600",
  },
  progressContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    padding: "0 10px",
  },
  lineBg: {
    position: "absolute",
    left: "25px",
    right: "25px",
    top: "20px",
    height: "2px",
    backgroundColor: "#E5E7EB",
    zIndex: 1,
  },
  lineActive: {
    position: "absolute",
    left: "25px",
    top: "20px",
    height: "2px",
    backgroundColor: "#1C2A20",
    transition: "width 0.4s ease",
    zIndex: 1,
  },
  stepWrapper: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  stepCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  },
  stepText: {
    fontSize: "11px",
    letterSpacing: "-0.2px",
  },
  statusBox: {
    backgroundColor: "#FAF7F2",
    borderRadius: "14px",
    padding: "14px 18px",
    textAlign: "center",
    marginBottom: "24px",
    border: "1px solid #EFEBE4",
  },
  statusDesc: {
    margin: 0,
    fontSize: "13px",
    color: "#4B5563",
    fontWeight: "600",
  },
  receiptDetails: {
    borderTop: "1px dashed #E5E7EB",
    paddingTop: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#6B7280",
  },
};