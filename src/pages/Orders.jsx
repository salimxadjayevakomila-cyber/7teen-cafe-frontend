 import { useEffect, useState } from "react";
import instance from "../utils/axios";

const translations = {
  uz: {
    brandTag: "LIVE ORDERS",
    title: "Mijozlar Buyurtmalari 📋",
    refresh: "Yangilash",
    loading: "Buyurtmalar yuklanmoqda...",
    emptyTitle: "Hozircha buyurtmalar yo'q",
    emptyDesc: "Yangi buyurtmalar tushishi bilan ushbu ro'yxatda paydo bo'ladi.",
    guest: "Mehmon",
    unknownPhone: "Noma'lum",
    detailsHeader: "BUYURTMA TAFSILOTLARI",
    qtyPriceHeader: "MIQDOR / NARX",
    productFallback: "Mahsulot",
    noItems: "Mahsulot tafsilotlari mavjud emas",
    type: "Turi",
    totalPrice: "Jami Summa",
    currency: "so'm",
    today: "Bugun",
    accepted: "Qabul qilindi",
    preparing: "Tayyorlanmoqda",
    delivering: "Yo'lda",
    completed: "Bajarildi",
    cancelled: "Bekor qilindi",
  },
  ru: {
    brandTag: "ЗАКАЗЫ В РЕАЛЬНОМ ВРЕМЕНИ",
    title: "Заказы Клиентов 📋",
    refresh: "Обновить",
    loading: "Загрузка заказов...",
    emptyTitle: "Пока нет заказов",
    emptyDesc: "Как только поступят новые заказы, они появятся в этом списке.",
    guest: "Гость",
    unknownPhone: "Неизвестно",
    detailsHeader: "ДЕТАЛИ ЗАКАЗА",
    qtyPriceHeader: "КОЛ-ВО / ЦЕНА",
    productFallback: "Товар",
    noItems: "Детали товара отсутствуют",
    type: "Тип",
    totalPrice: "Итоговая Сумма",
    currency: "сум",
    today: "Сегодня",
    accepted: "Принят",
    preparing: "Готовится",
    delivering: "В пути",
    completed: "Завершен",
    cancelled: "Отменен",
  },
  en: {
    brandTag: "LIVE ORDERS",
    title: "Customer Orders 📋",
    refresh: "Refresh",
    loading: "Loading orders...",
    emptyTitle: "No orders yet",
    emptyDesc: "New orders will appear in this list as soon as they are placed.",
    guest: "Guest",
    unknownPhone: "Unknown",
    detailsHeader: "ORDER DETAILS",
    qtyPriceHeader: "QTY / PRICE",
    productFallback: "Product",
    noItems: "No item details available",
    type: "Type",
    totalPrice: "Total Amount",
    currency: "UZS",
    today: "Today",
    accepted: "Accepted",
    preparing: "Preparing",
    delivering: "Delivering",
    completed: "Completed",
    cancelled: "Cancelled",
  },
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("uz");

  const t = translations[lang];

  const getOrders = () => {
    setLoading(true);
    instance
      .get("/orders")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error loading orders:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  // Statusni almashtirish uchun funksiya
  const handleStatusChange = (orderId, newStatus) => {
    instance
      .patch(`/orders/${orderId}/status`, { status: newStatus })
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.map((ord) =>
            ord._id === orderId ? { ...ord, status: newStatus } : ord
          )
        );
      })
      .catch((err) => {
        console.log("Error updating status:", err);
      });
  };

  const getStatusText = (status) => {
    const st = (status || "accepted").toLowerCase();
    return t[st] || t.accepted;
  };

  return (
    <div style={styles.pageContainer}>
      <style>{`
        .order-ticket-card {
          box-shadow: 0 10px 30px rgba(28, 42, 32, 0.05);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .order-ticket-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(28, 42, 32, 0.08);
        }
        .lang-btn {
          border: 1px solid #1C2A20;
          background: transparent;
          color: #1C2A20;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .lang-btn.active {
          background: #1C2A20;
          color: #FFC72C;
        }
        .status-btn {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          border: 1px solid #EAE3D9;
          background: #FFF;
          cursor: pointer;
          transition: all 0.2s;
        }
        .status-btn.active {
          background: #1C2A20;
          color: #FFC72C;
          border-color: #1C2A20;
        }
      `}</style>

      <div style={styles.contentWrapper}>
        <div style={styles.header}>
          <div>
            <div style={styles.brandTag}>
              <span>☕️ 7TEEN CAFE ADMIN</span>
              <span style={styles.dotSeparator}>•</span>
              <span style={{ color: "#D97706" }}>{t.brandTag}</span>
            </div>
            <h1 style={styles.title}>{t.title}</h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
            <div style={{ display: "flex", gap: "6px" }}>
              {["uz", "ru", "en"].map((item) => (
                <button
                  key={item}
                  className={`lang-btn ${lang === item ? "active" : ""}`}
                  onClick={() => setLang(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>

            <button style={styles.refreshBtn} onClick={getOrders}>
              🔄 {t.refresh} ({orders.length})
            </button>
          </div>
        </div>

        {loading ? (
          <div style={styles.loadingBox}>
            <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>⚡️</span>
            <span style={{ color: "#1C2A20", fontWeight: "800", fontSize: "16px" }}>
              {t.loading}
            </span>
          </div>
        ) : orders.length === 0 ? (
          <div className="order-ticket-card" style={styles.emptyCard}>
            <div style={styles.emptyIconBox}>📦</div>
            <h3 style={styles.emptyTitle}>{t.emptyTitle}</h3>
            <p style={styles.emptyDesc}>{t.emptyDesc}</p>
          </div>
        ) : (
          <div style={styles.ordersList}>
            {orders.map((order, index) => {
              const rawStatus = (order.status || "accepted").toLowerCase();

              return (
                <div key={order._id || index} className="order-ticket-card" style={styles.orderCard}>
                  <div style={styles.orderHeader}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={styles.orderId}>
                          #TICKET-{order._id ? order._id.slice(-6).toUpperCase() : index + 1}
                        </span>
                        <span style={styles.timeTag}>
                          📅 {order.createdAt ? new Date(order.createdAt).toLocaleString(lang === "uz" ? "uz-UZ" : lang === "ru" ? "ru-RU" : "en-US") : t.today}
                        </span>
                      </div>

                      <p style={styles.userInfo}>
                        <span style={{ fontSize: "16px" }}>👤</span>
                        <strong style={{ color: "#1C2A20", marginLeft: "4px" }}>
                          {order.userId?.name || order.userName || `${t.guest}`}
                        </strong>
                        <span style={{ color: "#A39B8E", margin: "0 6px" }}>•</span>
                        <span style={{ color: "#6B7280" }}>
                          📞 {order.userId?.phone || order.phone || t.unknownPhone}
                        </span>
                      </p>
                    </div>

                    <div style={styles.statusBadge(rawStatus)}>
                      <span>
                        {rawStatus === "accepted" && "📋"}
                        {rawStatus === "preparing" && "👨‍🍳"}
                        {rawStatus === "delivering" && "🛵"}
                        {rawStatus === "completed" && "✅"}
                        {rawStatus === "cancelled" && "❌"}
                      </span>
                      <span>{getStatusText(rawStatus)}</span>
                    </div>
                  </div>

                  <div style={styles.itemsContainer}>
                    <div style={styles.itemsHeader}>
                      <span>{t.detailsHeader}</span>
                      <span>{t.qtyPriceHeader}</span>
                    </div>

                    {order.items && order.items.length > 0 ? (
                      order.items.map((item, idx) => {
                        const title = item.productId?.title || item.productId?.name || item.title || t.productFallback;
                        const price = Number(item.price || item.productId?.price) || 0;
                        const qty = item.quantity || 1;

                        return (
                          <div key={idx} style={styles.itemRow}>
                            <span style={styles.itemTitle}>☕️ {title}</span>
                            <span style={styles.itemPrice}>
                              x{qty} <small style={{ color: "#888", fontWeight: "normal" }}>({(price * qty).toLocaleString()} {t.currency})</small>
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <p style={{ color: "#9CA3AF", fontSize: "13px", margin: 0 }}>{t.noItems}</p>
                    )}
                  </div>

                  {/* ADMIN STATUS NI O'ZGARTIRISH TUGMALARI */}
                  <div style={styles.statusActions}>
                    {["accepted", "preparing", "delivering", "completed"].map((st) => (
                      <button
                        key={st}
                        className={`status-btn ${rawStatus === st ? "active" : ""}`}
                        onClick={() => handleStatusChange(order._id, st)}
                      >
                        {st === "accepted" && "📋 "}
                        {st === "preparing" && "👨‍🍳 "}
                        {st === "delivering" && "🛵 "}
                        {st === "completed" && "✅ "}
                        {t[st]}
                      </button>
                    ))}
                  </div>

                  <div style={styles.orderFooter}>
                    <div style={{ fontSize: "12px", color: "#6B7280" }}>
                      {t.type}: <strong style={{ color: "#1C2A20", textTransform: "uppercase" }}>{order.orderType || "dine-in"}</strong>
                    </div>

                    <div style={{ textAlign: "right" }}>
                      <span style={{ color: "#888", fontSize: "10px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>
                        {t.totalPrice}:
                      </span>
                      <div style={styles.totalPrice}>
                        {(order.totalPrice || 0).toLocaleString()} <small style={{ fontSize: "14px" }}>{t.currency}</small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#FAF7F2",
    padding: "40px 20px 80px 20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Inter', -apple-system, sans-serif",
    boxSizing: "border-box",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: "880px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "2px solid #EAE3D9",
    paddingBottom: "18px",
    marginBottom: "30px",
  },
  brandTag: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#1C2A20",
    letterSpacing: "1.5px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },
  dotSeparator: {
    color: "#D1C7BD",
  },
  title: {
    color: "#1C2A20",
    fontSize: "32px",
    fontWeight: "900",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  refreshBtn: {
    backgroundColor: "#1C2A20",
    color: "#FFC72C",
    padding: "10px 20px",
    borderRadius: "20px",
    fontWeight: "800",
    fontSize: "13px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(28, 42, 32, 0.15)",
  },
  loadingBox: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "60px 20px",
    border: "1px solid #EFEBE4",
  },
  emptyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "60px 20px",
    border: "1px solid #EFEBE4",
    textAlign: "center",
  },
  emptyIconBox: {
    fontSize: "48px",
    marginBottom: "12px",
  },
  emptyTitle: {
    color: "#1C2A20",
    fontSize: "22px",
    fontWeight: "800",
    margin: "0 0 8px 0",
  },
  emptyDesc: {
    color: "#6B7280",
    fontSize: "14px",
    margin: 0,
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  ordersList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  orderCard: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #EFEBE4",
    borderRadius: "20px",
    padding: "24px",
    borderLeft: "6px solid #1C2A20",
  },
  orderHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderBottom: "1px dashed #EAE3D9",
    paddingBottom: "14px",
    marginBottom: "16px",
  },
  orderId: {
    color: "#D97706",
    fontWeight: "900",
    fontSize: "13px",
    letterSpacing: "1px",
  },
  timeTag: {
    fontSize: "11px",
    color: "#888",
    fontWeight: "600",
    backgroundColor: "#F5F0E6",
    padding: "2px 8px",
    borderRadius: "6px",
  },
  userInfo: {
    margin: "6px 0 0 0",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  },
  statusBadge: (status) => {
    const isCompleted = status === "completed";
    const isPreparing = status === "preparing" || status === "delivering";
    return {
      backgroundColor: isCompleted ? "#ECFDF5" : isPreparing ? "#FEF3C7" : "#EFF6FF",
      border: `1px solid ${isCompleted ? "#A7F3D0" : isPreparing ? "#FDE68A" : "#BFDBFE"}`,
      color: isCompleted ? "#047857" : isPreparing ? "#B45309" : "#1D4ED8",
      padding: "6px 14px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "800",
      display: "flex",
      alignItems: "center",
      gap: "6px",
    };
  },
  itemsContainer: {
    backgroundColor: "#FAF7F2",
    padding: "16px",
    borderRadius: "14px",
    marginBottom: "16px",
    border: "1px solid #EFEBE4",
  },
  itemsHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: "#888888",
    fontSize: "10px",
    fontWeight: "800",
    letterSpacing: "1px",
    marginBottom: "10px",
    paddingBottom: "6px",
    borderBottom: "1px solid #EAE3D9",
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    marginBottom: "8px",
  },
  itemTitle: {
    color: "#1C2A20",
    fontWeight: "700",
  },
  itemPrice: {
    color: "#1C2A20",
    fontWeight: "800",
  },
  statusActions: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "16px",
    paddingBottom: "12px",
    borderBottom: "1px dashed #EAE3D9",
  },
  orderFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "6px",
  },
  totalPrice: {
    color: "#1C2A20",
    fontSize: "22px",
    fontWeight: "900",
    lineHeight: "1.2",
  },
};

export default Orders;