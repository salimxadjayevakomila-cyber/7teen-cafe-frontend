 import React, { useState, useEffect } from "react";

const BaristaDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("cafe");  
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await fetch("https://seventeen-cafe-backend.onrender.com/api/orders");
      const data = await response.json();

      if (Array.isArray(data)) {
        setOrders(data);
      } else if (data.orders && Array.isArray(data.orders)) {
        setOrders(data.orders);
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error("Xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await fetch(`https://seventeen-cafe-backend.onrender.com/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setOrders((prev) =>
          prev.map((ord) => (ord._id === orderId ? { ...ord, status: newStatus } : ord))
        );
      } else {
        console.error("Status yangilanmadi, status kodi:", response.status);
      }
    } catch (error) {
      console.error("Status xatoligi:", error);
    }
  };

  // Mahsulot nomini obyekt yoki stringligiga qarab to'g'ri matn shaklida ajratib olish
  const renderProductName = (item) => {
    if (!item) return "7TEEN Product";

    // 1. item ichidan nomini qidiramiz
    const rawVal = item.title || item.name || item.productId?.title || item.productId?.name;

    // 2. Agar rawVal ko'p tilli (i18n) obyekt bo'lsa { uz: '...', ru: '...' }
    if (typeof rawVal === "object" && rawVal !== null) {
      return rawVal.uz || rawVal.ru || rawVal.en || Object.values(rawVal)[0] || "7TEEN Product";
    }

    // 3. Agar rawVal oddiy string matn bo'lsa
    if (typeof rawVal === "string" && rawVal.trim() !== "") {
      return rawVal;
    }

    return "7TEEN Product";
  };

  const filteredOrders = (orders || []).filter((ord) => {
    const isBrand = ord.orderType === "brand";
    const isCompleted = ord.status === "ready" || ord.status === "completed" || ord.status === "delivering";

    if (activeTab === "cafe") return !isBrand && !isCompleted;
    if (activeTab === "brand") return isBrand && !isCompleted;
    if (activeTab === "history") return isCompleted;
    return true;
  });

  const cafeCount = orders.filter((o) => o.orderType !== "brand" && o.status !== "ready" && o.status !== "completed" && o.status !== "delivering").length;
  const brandCount = orders.filter((o) => o.orderType === "brand" && o.status !== "ready" && o.status !== "completed" && o.status !== "delivering").length;
  const totalRevenue = orders.reduce((acc, o) => acc + (o.totalPrice || 0), 0);

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#16251A", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #233829; border-radius: 10px; }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          border-radius: 30px;
          border: none;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          width: 100%;
          text-align: left;
        }
        .order-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .order-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* Sidebar */}
      <aside
        style={{
          width: "280px",
          backgroundColor: "#111E15",
          color: "#F5EFE6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "32px 24px",
          borderRight: "1px solid #233829",
          position: "sticky",
          top: 0,
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div style={{ borderBottom: "1px solid #233829", paddingBottom: "24px", marginBottom: "32px" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "900", letterSpacing: "3px", margin: 0, color: "#FFC72C" }}>
              7TEEN
            </h1>
            <span style={{ fontSize: "11px", letterSpacing: "1.5px", color: "#A3B899", textTransform: "uppercase", marginTop: "6px", display: "block", fontWeight: "700" }}>
              ☕ ADMIN OPERATIONS
            </span>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              className="tab-btn"
              onClick={() => setActiveTab("cafe")}
              style={{
                backgroundColor: activeTab === "cafe" ? "#FFC72C" : "#213526",
                color: activeTab === "cafe" ? "#16251A" : "#F5EFE6",
              }}
            >
              <span>☕</span> Kafe Buyurtmalari
              {cafeCount > 0 && (
                <span style={{ marginLeft: "auto", backgroundColor: activeTab === "cafe" ? "#16251A" : "#FFC72C", color: activeTab === "cafe" ? "#FFC72C" : "#16251A", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>
                  {cafeCount}
                </span>
              )}
            </button>

            <button
              className="tab-btn"
              onClick={() => setActiveTab("brand")}
              style={{
                backgroundColor: activeTab === "brand" ? "#FFC72C" : "#213526",
                color: activeTab === "brand" ? "#16251A" : "#F5EFE6",
              }}
            >
              <span>🛍️</span> Brand Buyurtmalari
              {brandCount > 0 && (
                <span style={{ marginLeft: "auto", backgroundColor: activeTab === "brand" ? "#16251A" : "#FFC72C", color: activeTab === "brand" ? "#FFC72C" : "#16251A", padding: "2px 8px", borderRadius: "10px", fontSize: "11px" }}>
                  {brandCount}
                </span>
              )}
            </button>

            <button
              className="tab-btn"
              onClick={() => setActiveTab("history")}
              style={{
                backgroundColor: activeTab === "history" ? "#FFC72C" : "#213526",
                color: activeTab === "history" ? "#16251A" : "#F5EFE6",
              }}
            >
              <span>📜</span> Buyurtmalar Tarixi
            </button>

            <button
              className="tab-btn"
              onClick={() => setActiveTab("menu")}
              style={{
                backgroundColor: activeTab === "menu" ? "#FFC72C" : "#213526",
                color: activeTab === "menu" ? "#16251A" : "#F5EFE6",
              }}
            >
              <span>🥐</span> Menyuni Boshqarish
            </button>
          </nav>
        </div>

        <div style={{ borderTop: "1px solid #233829", paddingTop: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", backgroundColor: "#00E676", borderRadius: "50%", display: "inline-block" }}></span>
                <p style={{ margin: 0, fontSize: "13px", fontWeight: "bold", color: "#F5EFE6" }}>Tizim Faol</p>
              </div>
              <span style={{ fontSize: "11px", color: "#A3B899" }}>Admin Panel</span>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
              style={{ background: "none", border: "none", color: "#FF5252", cursor: "pointer", fontSize: "18px" }}
              title="Chiqish"
            >
              ➔
            </button>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
          <div>
            <span style={{ fontSize: "12px", fontWeight: "700", color: "#FFC72C", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              INTERAKTIV MONITORING
            </span>
            <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#F5EFE6", margin: "4px 0 0 0" }}>
              {activeTab === "cafe"
                ? "☕ Kafe Buyurtmalari"
                : activeTab === "brand"
                ? "🛍️ Brand Kiyim va Aksessuarlar"
                : activeTab === "history"
                ? "📜 Buyurtmalar Tarixi"
                : "🥐 Menyuni Boshqarish"}
            </h2>
          </div>

          <button
            onClick={fetchOrders}
            style={{
              backgroundColor: "#213526",
              color: "#FFC72C",
              border: "1px solid #FFC72C",
              padding: "12px 24px",
              borderRadius: "30px",
              fontWeight: "700",
              cursor: "pointer",
              fontSize: "13px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>↻</span> Yangilash
          </button>
        </div>

        {/* Dynamic Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          <div style={{ backgroundColor: "#213526", padding: "20px", borderRadius: "18px", border: "1px solid #2D4733" }}>
            <span style={{ fontSize: "12px", color: "#A3B899", fontWeight: "600" }}>☕ Kafe Zakazlari</span>
            <h3 style={{ margin: "6px 0 0 0", color: "#FFC72C", fontSize: "28px", fontWeight: "900" }}>
              {cafeCount} <small style={{ fontSize: "14px", color: "#A3B899" }}>ta</small>
            </h3>
          </div>

          <div style={{ backgroundColor: "#213526", padding: "20px", borderRadius: "18px", border: "1px solid #2D4733" }}>
            <span style={{ fontSize: "12px", color: "#A3B899", fontWeight: "600" }}>🛍️ Brand Zakazlari</span>
            <h3 style={{ margin: "6px 0 0 0", color: "#FFC72C", fontSize: "28px", fontWeight: "900" }}>
              {brandCount} <small style={{ fontSize: "14px", color: "#A3B899" }}>ta</small>
            </h3>
          </div>

          <div style={{ backgroundColor: "#213526", padding: "20px", borderRadius: "18px", border: "1px solid #2D4733" }}>
            <span style={{ fontSize: "12px", color: "#A3B899", fontWeight: "600" }}>Bugungi Jami Kassa</span>
            <h3 style={{ margin: "6px 0 0 0", color: "#FFF", fontSize: "24px", fontWeight: "900" }}>
              {totalRevenue.toLocaleString()} <small style={{ fontSize: "13px", color: "#FFC72C" }}>UZS</small>
            </h3>
          </div>
        </div>

        {activeTab !== "menu" && (
          <>
            {loading ? (
              <p style={{ color: "#F5EFE6" }}>Yuklanmoqda...</p>
            ) : filteredOrders.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 20px", color: "#A3B899", backgroundColor: "#213526", borderRadius: "24px", border: "1px dashed #2D4733" }}>
                <span style={{ fontSize: "48px" }}>📦</span>
                <h3 style={{ margin: "16px 0 8px 0", color: "#F5EFE6" }}>Ushbu bo'limda buyurtmalar yo'q</h3>
                <p style={{ fontSize: "13px", margin: 0 }}>Yangi buyurtma tushganda avtomatik ravishda shu yerda paydo bo'ladi.</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
                {filteredOrders.map((order) => {
                  const createdAtFormatted = order.createdAt
                    ? new Date(order.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                    : "Hozirgina";

                  const isBrandOrder = order.orderType === "brand";
                  const st = order.status || "accepted";

                  return (
                    <div
                      key={order._id}
                      className="order-card"
                      style={{
                        backgroundColor: isBrandOrder ? "#1C2A20" : "#213526",
                        borderRadius: "20px",
                        padding: "24px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        border: isBrandOrder ? "2px solid #FFC72C" : "1px solid #2D4733",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <span style={{ fontSize: "12px", fontWeight: "800", background: isBrandOrder ? "#FFC72C" : "#16251A", color: isBrandOrder ? "#16251A" : "#FFC72C", padding: "6px 14px", borderRadius: "20px" }}>
                            {isBrandOrder ? "🛍️ BRAND CLOTHES" : `CHECK #${order._id ? order._id.slice(-4).toUpperCase() : "XXXX"}`}
                          </span>
                          <span
                            style={{
                              fontSize: "11px",
                              fontWeight: "800",
                              padding: "6px 12px",
                              borderRadius: "20px",
                              color: "#FFF",
                              backgroundColor: st === "accepted" || st === "pending" ? "#FFC72C" : st === "preparing" ? "#2196F3" : "#00C853",
                            }}
                          >
                            {st === "accepted" || st === "pending" ? "QABUL QILINDI" : st === "preparing" ? "TAYYORLANMOQDA" : "YETKAZILDI"}
                          </span>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", color: "#A3B899", marginBottom: "12px", fontWeight: "600" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span>⏰ {createdAtFormatted}</span>
                            <span style={{ color: "#FFC72C", textTransform: "uppercase" }}>
                              📍 {isBrandOrder ? (order.customerPhone ? `📞 ${order.customerPhone}` : "ONLINE") : order.tableNumber ? `Stol #${order.tableNumber}` : "Dine-in"}
                            </span>
                          </div>
                          {isBrandOrder && order.customerName && (
                            <span style={{ color: "#FFF", fontSize: "13px", fontWeight: "700" }}>👤 Mijoz: {order.customerName}</span>
                          )}
                        </div>

                        <div style={{ borderTop: "1px dashed #2D4733", borderBottom: "1px dashed #2D4733", padding: "12px 0", margin: "12px 0" }}>
                          {order.items?.map((item, idx) => {
                            // item'ning to'liq ob'ektini renderProductName ga uzatamiz
                            const prodName = renderProductName(item);
                            const itemPrice = typeof item.price === "number" ? item.price.toLocaleString() : 0;

                            return (
                              <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px", margin: "8px 0", color: "#F5EFE6" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                  <span style={{ fontWeight: "600" }}>{prodName}</span>
                                  <span style={{ fontSize: "11px", color: "#A3B899" }}>{itemPrice} UZS</span>
                                </div>
                                <span style={{ fontWeight: "800", color: "#FFC72C", fontSize: "15px" }}>x{item.quantity || 1}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                          <span style={{ color: "#A3B899", fontSize: "12px", fontWeight: "600" }}>SUMMA:</span>
                          <span style={{ fontSize: "20px", fontWeight: "900", color: "#FFC72C" }}>
                            {order.totalPrice ? order.totalPrice.toLocaleString() : 0} UZS
                          </span>
                        </div>

                        {/* BOSQICHMA-BOSQICH BOSHQARISH TUGMALARI */}
                        {(st === "accepted" || st === "pending") && (
                          <button
                            onClick={() => handleStatusChange(order._id, "preparing")}
                            style={{
                              width: "100%",
                              padding: "14px",
                              backgroundColor: "#FFC72C",
                              color: "#16251A",
                              border: "none",
                              borderRadius: "30px",
                              fontWeight: "800",
                              cursor: "pointer",
                              fontSize: "13px",
                            }}
                          >
                            👨‍🍳 TAYYORLASHNI BOSHLASH
                          </button>
                        )}

                        {st === "preparing" && (
                          <button
                            onClick={() => handleStatusChange(order._id, "delivering")}
                            style={{
                              width: "100%",
                              padding: "14px",
                              backgroundColor: "#2196F3",
                              color: "#FFF",
                              border: "none",
                              borderRadius: "30px",
                              fontWeight: "800",
                              cursor: "pointer",
                              fontSize: "13px",
                            }}
                          >
                            🛵 YO'LGA CHIQARISH / TAYYOR
                          </button>
                        )}

                        {(st === "delivering" || st === "ready" || st === "completed") && (
                          <div
                            style={{
                              width: "100%",
                              padding: "14px",
                              textAlign: "center",
                              backgroundColor: "#16251A",
                              color: "#00C853",
                              border: "1px solid #00C853",
                              borderRadius: "30px",
                              fontWeight: "800",
                              fontSize: "13px",
                              boxSizing: "border-box",
                            }}
                          >
                            ✓ YAKUNLANDI
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {activeTab === "menu" && (
          <div style={{ backgroundColor: "#213526", padding: "40px", borderRadius: "24px", border: "1px solid #2D4733", color: "#F5EFE6" }}>
            <h3>🥐 Menyu Boshqaruvi</h3>
            <p style={{ color: "#A3B899" }}>Ushbu bo'lim orqali kofe va kiyimlarni tahrirlashingiz mumkin.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BaristaDashboard;