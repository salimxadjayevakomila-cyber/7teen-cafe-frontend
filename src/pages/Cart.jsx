 import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import instance from "../utils/axios";
import OrderSuccessModal from "../components/OrderSuccessModal";

const translations = {
  uz: {
    brandTag: "☕️ 7TEEN CAFE & CO.",
    orderTicket: "BUYURTMA CHEKI",
    mainTitle: "Sizning Buyurtmangiz",
    itemsCount: "ta mahsulot",
    emptyTitle: "Stolingiz hali bo'sh...",
    emptyDesc: "7TEEN atmosferasidan bahramand bo'lish uchun yangi damlangan kofe, shirinliklar yoki issiq mualliflik taomlaridan tanlang.",
    openMenuBtn: "MENYUNI OCHISH",
    freeDeliveryAchieved: "🎉 Bepul yetkazib berish huquqiga ega bo'ldingiz!",
    freeDeliveryNeedMore: "Yana {amount} so'mlik buyurtma bering",
    itemDefaultTitle: "7TEEN Maxsus",
    totalLabel: "JAMI",
    currency: "so'm",
    checkTitle: "7TEEN CAFE",
    checkNumber: "CHEK #2026-BUYURTMA",
    productsLabel: "Mahsulotlar:",
    deliveryLabel: "Yetkazib berish:",
    deliveryFree: "BEPUL",
    serviceLabel: "Xizmat (0%):",
    grandTotalLabel: "TO'LANADIGAN SUMMA",
    checkoutBtn: "TASDIQLASH VA TO'LASH ⚡️",
    orderErrorAlert: "Xatolik: Buyurtma yuborilmadi",
    serverErrorAlert: "Backend serverga bog'lanib bo'lmadi!"
  },
  en: {
    brandTag: "☕️ 7TEEN CAFE & CO.",
    orderTicket: "ORDER TICKET",
    mainTitle: "Your Order",
    itemsCount: "items",
    emptyTitle: "Your table is empty...",
    emptyDesc: "To enjoy the 7TEEN atmosphere, choose from freshly brewed coffee, desserts, or signature hot dishes.",
    openMenuBtn: "OPEN MENU",
    freeDeliveryAchieved: "🎉 You have unlocked free delivery!",
    freeDeliveryNeedMore: "Add {amount} UZS more for free delivery",
    itemDefaultTitle: "7TEEN Special",
    totalLabel: "TOTAL",
    currency: "UZS",
    checkTitle: "7TEEN CAFE",
    checkNumber: "CHECK #2026-ORDER",
    productsLabel: "Products:",
    deliveryLabel: "Delivery:",
    deliveryFree: "FREE",
    serviceLabel: "Service (0%):",
    grandTotalLabel: "TOTAL AMOUNT DUE",
    checkoutBtn: "CONFIRM AND PAY ⚡️",
    orderErrorAlert: "Error: Order could not be sent",
    serverErrorAlert: "Could not connect to backend server!"
  },
  ru: {
    brandTag: "☕️ 7TEEN CAFE & CO.",
    orderTicket: "ЧЕК ЗАКАЗА",
    mainTitle: "Ваш Заказ",
    itemsCount: "товаров",
    emptyTitle: "Ваш стол пока пуст...",
    emptyDesc: "Чтобы насладиться атмосферой 7TEEN, выберите свежесваренный кофе, десерты или горячие авторские блюда.",
    openMenuBtn: "ОТКРЫТЬ МЕНЮ",
    freeDeliveryAchieved: "🎉 Вы получили бесплатную доставку!",
    freeDeliveryNeedMore: "Закажите еще на {amount} сум для бесплатной доставки",
    itemDefaultTitle: "7TEEN Специальное",
    totalLabel: "ИТОГО",
    currency: "сум",
    checkTitle: "7TEEN CAFE",
    checkNumber: "ЧЕК #2026-ЗАКАЗ",
    productsLabel: "Товары:",
    deliveryLabel: "Доставка:",
    deliveryFree: "БЕСПЛАТНО",
    serviceLabel: "Обслуживание (0%):",
    grandTotalLabel: "СУММА К ОПЛАТЕ",
    checkoutBtn: "ПОДТВЕРДИТЬ И ОПЛАТИТЬ ⚡️",
    orderErrorAlert: "Ошибка: Заказ не был отправлен",
    serverErrorAlert: "Не удалось связаться с сервером!"
  }
};

const parsePrice = (val) => {
  if (typeof val === "number") return isNaN(val) ? 0 : val;
  if (!val) return 0;
  const cleaned = String(val).replace(/[^0-9.]/g, "");
  const num = Number(cleaned);
  return isNaN(num) ? 0 : num;
};

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const [lang, setLang] = useState("uz");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState(null);
  
  const navigate = useNavigate();
  const t = translations[lang];

  const cartItems = cart || [];

  const totalPrice = cartItems.reduce((acc, item) => {
    const rawPrice = item.productId?.price ?? item.price ?? 0;
    const price = parsePrice(rawPrice);
    const qty = Number(item.quantity) || 1;
    return acc + price * qty;
  }, 0);

  const freeDeliveryTarget = 200000;
  const deliveryFee = totalPrice >= freeDeliveryTarget || totalPrice === 0 ? 0 : 15000;
  const grandTotal = totalPrice + deliveryFee;
  const progressPercent = Math.min(100, (totalPrice / freeDeliveryTarget) * 100);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;

    try {
      const formattedItems = cartItems.map((item) => {
        const prodId = item.productId?._id || item._id || item.productId || item.id;
        const rawPrice = item.productId?.price ?? item.price ?? 0;
        const productName = item.productId?.title || item.productId?.name || item.title || item.name || t.itemDefaultTitle;

        return {
          productId: String(prodId),
          name: productName,
          title: productName,
          quantity: Number(item.quantity) || 1,
          price: parsePrice(rawPrice),
        };
      });

      const orderData = {
        items: formattedItems,
        totalPrice: grandTotal,
        orderType: "dine-in",
        status: "accepted",
        customerName: "Mehmon",
      };

      const response = await instance.post("/orders", orderData);

      if (response.data) {
        const newOrderId = response.data._id || response.data.order?._id;
        setCreatedOrderId(newOrderId);
        setIsModalOpen(true);

        if (clearCart) clearCart();
      }
    } catch (error) {
      console.error("Order submit error:", error);
      alert(t.orderErrorAlert);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <style>{`
        @keyframes floatEffect {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .floating-coffee {
          animation: floatEffect 3.5s ease-in-out infinite;
        }
        .receipt-card {
          box-shadow: 0 20px 50px rgba(28, 42, 32, 0.08), 0 2px 10px rgba(0,0,0,0.02);
          transition: transform 0.3s ease;
        }
        .action-btn:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }
      `}</style>

      <div style={styles.contentWrapper}>
        <div style={styles.topHeader}>
          <div>
            <div style={styles.brandTag}>
              <span>{t.brandTag}</span>
              <span style={styles.dotSeparator}>•</span>
              <span style={{ color: "#D97706" }}>{t.orderTicket}</span>
            </div>
            <h1 style={styles.mainTitle}>{t.mainTitle}</h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={styles.langSwitchBox}>
              {["uz", "en", "ru"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    ...styles.langBtn,
                    backgroundColor: lang === l ? "#1C2A20" : "#FFFFFF",
                    color: lang === l ? "#FFFFFF" : "#1C2A20",
                    border: lang === l ? "none" : "1px solid #EAE3D9",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <div style={styles.counterBadge}>
              <span style={{ fontSize: "16px" }}>🛒</span>
              <span style={{ fontWeight: "900", color: "#1C2A20" }}>{cartItems.length}</span>
              <span style={{ color: "#6B7280", fontSize: "12px" }}>{t.itemsCount}</span>
            </div>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="receipt-card" style={styles.emptyReceiptBox}>
            <div style={{ padding: "40px 30px" }}>
              <div className="floating-coffee" style={styles.coffeeCircle}>
                <span style={{ fontSize: "52px" }}>☕️</span>
              </div>

              <h2 style={styles.emptyTitle}>{t.emptyTitle}</h2>
              <p style={styles.emptyDesc}>{t.emptyDesc}</p>

              <div style={styles.dividerDashed} />

              <Link to="/menu" className="action-btn" style={styles.menuRedirectBtn}>
                <span>{t.openMenuBtn}</span>
                <span style={{ fontSize: "18px" }}>➔</span>
              </Link>
            </div>
          </div>
        ) : (
          <div style={styles.gridContainer}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={styles.progressCard}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "800", color: "#1C2A20" }}>
                    {totalPrice >= freeDeliveryTarget 
                      ? t.freeDeliveryAchieved 
                      : t.freeDeliveryNeedMore.replace("{amount}", (freeDeliveryTarget - totalPrice).toLocaleString())}
                  </span>
                  <span style={styles.percentBadge}>{Math.round(progressPercent)}%</span>
                </div>
                <div style={styles.progressTrack}>
                  <div style={{ ...styles.progressBar, width: `${progressPercent}%` }} />
                </div>
              </div>

              {cartItems.map((item, idx) => {
                const id = item._id || item.productId?._id || item.id || idx;
                const title = item.productId?.title || item.productId?.name || item.title || item.name || t.itemDefaultTitle;
                const price = parsePrice(item.productId?.price ?? item.price ?? 0);
                const qty = Number(item.quantity) || 1;
                const image = item.imageSrc || item.image || item.productId?.image;

                return (
                  <div key={id} className="receipt-card" style={styles.itemCard}>
                    <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                      <div style={styles.itemIconBox}>
                        {image ? (
                          <img 
                            src={image} 
                            alt={title} 
                            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }} 
                          />
                        ) : (
                          <span>🥪</span>
                        )}
                      </div>

                      <div>
                        <h3 style={styles.itemTitle}>{title}</h3>
                        <p style={styles.itemSinglePrice}>{price.toLocaleString()} {t.currency}</p>

                        <div style={styles.qtyBox}>
                          <button style={styles.qtyBtn} onClick={() => updateQuantity(id, -1)}>-</button>
                          <span style={styles.qtyVal}>{qty}</span>
                          <button style={styles.qtyBtn} onClick={() => updateQuantity(id, 1)}>+</button>
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: "right", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                      <button style={styles.trashBtn} onClick={() => removeFromCart(id)} title="O'chirish">
                        ✕
                      </button>

                      <div>
                        <span style={styles.totalLabel}>{t.totalLabel}</span>
                        <p style={styles.totalPriceText}>{(price * qty).toLocaleString()} <small>{t.currency}</small></p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="receipt-card" style={styles.summaryReceipt}>
              <div style={styles.receiptHeader}>
                <div style={{ textAlign: "center", width: "100%" }}>
                  <span style={{ fontSize: "20px", letterSpacing: "4px", fontWeight: "900", color: "#1C2A20" }}>{t.checkTitle}</span>
                  <p style={{ margin: "4px 0 0 0", fontSize: "11px", color: "#888", letterSpacing: "1px" }}>{t.checkNumber}</p>
                </div>
              </div>

              <div style={styles.dividerDashed} />

              <div style={styles.receiptRow}>
                <span>{t.productsLabel}</span>
                <b>{totalPrice.toLocaleString()} {t.currency}</b>
              </div>

              <div style={styles.receiptRow}>
                <span>{t.deliveryLabel}</span>
                <b style={{ color: totalPrice >= freeDeliveryTarget ? "#059669" : "#1C2A20" }}>
                  {totalPrice >= freeDeliveryTarget ? t.deliveryFree : `15,000 ${t.currency}`}
                </b>
              </div>

              <div style={styles.receiptRow}>
                <span>{t.serviceLabel}</span>
                <b>0 {t.currency}</b>
              </div>

              <div style={styles.dividerDashed} />

              <div style={{ margin: "16px 0" }}>
                <span style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "700" }}>
                  {t.grandTotalLabel}
                </span>
                <div style={styles.bigPrice}>
                  {grandTotal.toLocaleString()} <span style={{ fontSize: "16px" }}>{t.currency}</span>
                </div>
              </div>

              <button className="action-btn" style={styles.checkoutBtn} onClick={handleCheckout}>
                {t.checkoutBtn}
              </button>

              <div style={styles.barcodeSection}>
                <div style={styles.barcodeLines} />
                <span style={{ fontSize: "9px", color: "#aaa", letterSpacing: "4px" }}>*7TEEN-EST-2026*</span>
              </div>
            </div>
          </div>
        )}

        <OrderSuccessModal 
          isOpen={isModalOpen} 
          orderId={createdOrderId} 
          onClose={() => setIsModalOpen(false)} 
        />
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
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: "920px",
  },
  topHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "35px",
    paddingBottom: "16px",
    borderBottom: "2px solid #EAE3D9"
  },
  langSwitchBox: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    padding: "3px",
    borderRadius: "20px",
    border: "1px solid #EAE3D9"
  },
  langBtn: {
    padding: "6px 14px",
    borderRadius: "16px",
    fontWeight: "800",
    fontSize: "12px",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  brandTag: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#1C2A20",
    letterSpacing: "1.5px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px"
  },
  dotSeparator: {
    color: "#D1C7BD"
  },
  mainTitle: {
    fontSize: "32px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: 0,
    letterSpacing: "-0.5px"
  },
  counterBadge: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #EAE3D9",
    padding: "8px 16px",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px"
  },
  emptyReceiptBox: {
    backgroundColor: "#FFFFFF",
    maxWidth: "480px",
    margin: "20px auto",
    borderRadius: "24px",
    textAlign: "center",
    position: "relative",
    border: "1px solid #EFEBE4",
    overflow: "hidden"
  },
  coffeeCircle: {
    width: "90px",
    height: "90px",
    backgroundColor: "#F5F0E6",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px auto",
    border: "2px dashed #D1C7BD"
  },
  emptyTitle: {
    fontSize: "22px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: "0 0 10px 0"
  },
  emptyDesc: {
    fontSize: "13px",
    color: "#6B7280",
    lineHeight: "1.6",
    maxWidth: "340px",
    margin: "0 auto 24px auto"
  },
  menuRedirectBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#1C2A20",
    color: "#FFC72C",
    padding: "16px 32px",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "13px",
    letterSpacing: "0.5px",
    boxShadow: "0 10px 25px rgba(28, 42, 32, 0.2)"
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "25px",
    alignItems: "start"
  },
  progressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "16px",
    padding: "16px 20px",
    border: "1px solid #EFEBE4"
  },
  percentBadge: {
    backgroundColor: "#F5F0E6",
    color: "#D97706",
    fontWeight: "900",
    fontSize: "11px",
    padding: "3px 8px",
    borderRadius: "8px"
  },
  progressTrack: {
    width: "100%",
    height: "8px",
    backgroundColor: "#F3EFE9",
    borderRadius: "10px",
    overflow: "hidden"
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#FFC72C",
    transition: "width 0.4s ease"
  },
  itemCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "20px",
    border: "1px solid #EFEBE4",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemIconBox: {
    width: "56px",
    height: "56px",
    backgroundColor: "#F8F5F0",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    border: "1px solid #EAE3D9",
    overflow: "hidden"
  },
  itemTitle: {
    margin: "0 0 4px 0",
    fontSize: "16px",
    fontWeight: "800",
    color: "#1C2A20"
  },
  itemSinglePrice: {
    margin: "0 0 10px 0",
    fontSize: "12px",
    color: "#888",
    fontWeight: "600"
  },
  qtyBox: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "#F5F0E6",
    borderRadius: "8px",
    padding: "2px 6px",
    gap: "10px"
  },
  qtyBtn: {
    border: "none",
    background: "transparent",
    fontWeight: "900",
    fontSize: "15px",
    cursor: "pointer",
    color: "#1C2A20"
  },
  qtyVal: {
    fontSize: "12px",
    fontWeight: "800",
    color: "#1C2A20"
  },
  trashBtn: {
    background: "transparent",
    border: "none",
    color: "#9CA3AF",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "700"
  },
  totalLabel: {
    fontSize: "9px",
    fontWeight: "800",
    color: "#aaa",
    letterSpacing: "0.5px"
  },
  totalPriceText: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "900",
    color: "#1C2A20"
  },
  summaryReceipt: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "24px",
    border: "1px solid #EFEBE4"
  },
  receiptHeader: {
    paddingBottom: "10px"
  },
  receiptRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "13px",
    color: "#6B7280",
    marginBottom: "10px"
  },
  dividerDashed: {
    borderBottom: "2px dashed #EAE3D9",
    margin: "16px 0"
  },
  bigPrice: {
    fontSize: "28px",
    fontWeight: "900",
    color: "#1C2A20",
    marginTop: "2px"
  },
  checkoutBtn: {
    width: "100%",
    backgroundColor: "#1C2A20",
    color: "#FFC72C",
    border: "none",
    padding: "16px",
    borderRadius: "14px",
    fontWeight: "900",
    fontSize: "13px",
    letterSpacing: "0.5px",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(28, 42, 32, 0.15)"
  },
  barcodeSection: {
    marginTop: "20px",
    textAlign: "center"
  },
  barcodeLines: {
    height: "24px",
    width: "70%",
    margin: "0 auto 4px auto",
    background: "repeating-linear-gradient(90deg, #1C2A20, #1C2A20 2px, transparent 2px, transparent 4px, #1C2A20 4px, #1C2A20 6px)"
  }
};

export default Cart;