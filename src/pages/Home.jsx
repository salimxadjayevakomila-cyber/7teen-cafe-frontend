 import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 

const homeTranslations = {
  uz: {
    openStatus: "Hozir kafemiz ochiq (8:00 - 22:00)",
    closedStatus: "Kafemiz hozir yopiq (Ertaga 8:00 da ochiladi)",
    heroTitle1: "Eski qoidalarni unuting.",
    heroTitle2: "7TEEN — Atmosfera & Madaniyat.",
    heroSubText: "Toshkentdagi birinchi kontseptual konteyner-kafe va Gen-Z ruhiyati. Har bir qultumda — samimiyat, shinamlik va ilhom.",
    discoverMenu: "☕️ Menyuni Kashf Etish",
    interactiveTag: "INTERAKTIV SELEKTOR",
    interactiveHeading: "Bugun qanday kayfiyatdasiz?",
    energyBtn: "⚡️ Energetika & Quvvat",
    cozyBtn: "🧘‍♂️ Shinamlik & Ish Rejimi",
    sweetBtn: "🍓 Shirin Kayfiyat",
    energyTitle: "Double Espresso & Cold Brew Mix 🚀",
    energyDesc: "Kunga tezkor start berish va drayv olishni xohlovchilar uchun ideal tanlov.",
    cozyTitle: "Velvet Flat White & Yutib Yuborgudek San'at ☕️",
    cozyDesc: "Noutbukda ishlash, kitob o'qish yoki samimiy suhbatlar uchun yumshoq ta'm.",
    sweetTitle: "Iced Matcha Latte & San-Sebastian Cheesecake 🍰",
    sweetDesc: "O'zingizga va do'stlaringizga kichik bayram ulashish va kayfiyatni ko'tarish uchun.",
    ecosystemTag: "7TEEN EKOSISTEMASI",
    ecosystemHeading: "Faqat kafe emas — Bu yangi brend madaniyati",
    concept1Title: "Container Cafe Concept",
    concept1Desc: "Zamonaviy mini-konteyner arxitekturasi va shinam ochiq hudud. Shahar o'rtasida o'zgarib turadigan eng estetik burchak.",
    concept2Title: "Tashkent City Expansion",
    concept2Desc: "Tez orada loyihamiz Toshkentning eng nufuzli biznes markazlariga va Tashkent City hududiga kengayadi.",
    concept3Title: "7TEEN Clothes Line",
    concept3Desc: "Tez kunda kafe brendining rasmiy va minimalist streetwear kiyimlar to'plami namoyish etiladi.",
    calcTag: "MINI KALKULYATOR",
    calcHeading: "O'z Ideal Setingizni Yashing (-10% Chegirma)",
    selectDrink: "Ichimlikni tanlang:",
    selectDessert: "Shirinlikni tanlang:",
    comboPriceLabel: "Combo Narxi:",
    orderSetBtn: "🛒 Shu Setni Buyurtma Qilish"
  },
  ru: {
    openStatus: "Сейчас наше кафе открыто (8:00 - 22:00)",
    closedStatus: "Кафе сейчас закрыто (Откроется завтра в 8:00)",
    heroTitle1: "Забудьте старые правила.",
    heroTitle2: "7TEEN — Атмосфера и Культура.",
    heroSubText: "Первое концептуальное контейнер-кафе в Ташкенте с духом Gen-Z. В каждом глотке — искренность, уют и вдохновение.",
    discoverMenu: "☕️ Исследовать меню",
    interactiveTag: "ИНТЕРАКТИВНЫЙ СЕЛЕКТОР",
    interactiveHeading: "Какое у вас сегодня настроение?",
    energyBtn: "⚡️ Энергия и Драйв",
    cozyBtn: "🧘‍♂️ Уют и Работа",
    sweetBtn: "🍓 Сладкое Настроение",
    energyTitle: "Double Espresso & Cold Brew Mix 🚀",
    energyDesc: "Идеальный выбор для тех, кто хочет быстро начать день и зарядиться энергией.",
    cozyTitle: "Velvet Flat White & Искусство Кофе ☕️",
    cozyDesc: "Мягкий вкус для работы за ноутбуком, чтения книг или душевных бесед.",
    sweetTitle: "Iced Matcha Latte & Чизкейк Сан-Себастьян 🍰",
    sweetDesc: "Чтобы подарить себе и друзьям маленький праздник и поднять настроение.",
    ecosystemTag: "ЭКОСИСТЕМА 7TEEN",
    ecosystemHeading: "Не просто кафе — Это культура нового бренда",
    concept1Title: "Концепция Container Cafe",
    concept1Desc: "Современная архитектура мини-контейнеров и уютная открытая терраса. Самый эстетичный уголок в центре города.",
    concept2Title: "Расширение в Tashkent City",
    concept2Desc: "В скором времени наш проект расширится на престижные бизнес-центры Ташкента и территорию Tashkent City.",
    concept3Title: "Линейка одежды 7TEEN",
    concept3Desc: "Совсем скоро будет представлена официальная коллекция минималистичной streetwear одежды от бренда.",
    calcTag: "МИНИ-КАЛЬКУЛЯТОР",
    calcHeading: "Соберите свой идеальный сет (Скидка -10%)",
    selectDrink: "Выберите напиток:",
    selectDessert: "Выберите десерт:",
    comboPriceLabel: "Цена комбо:",
    orderSetBtn: "🛒 Заказать этот сет"
  },
  en: {
    openStatus: "Our cafe is currently open (8:00 - 22:00)",
    closedStatus: "Our cafe is currently closed (Opens tomorrow at 8:00)",
    heroTitle1: "Forget the old rules.",
    heroTitle2: "7TEEN — Vibe & Culture.",
    heroSubText: "Tashkent's first conceptual container cafe infused with Gen-Z spirit. Sincerity, comfort, and inspiration in every sip.",
    discoverMenu: "☕️ Explore Menu",
    interactiveTag: "INTERACTIVE SELECTOR",
    interactiveHeading: "How are you feeling today?",
    energyBtn: "⚡️ Energy & Boost",
    cozyBtn: "🧘‍♂️ Cozy & Work Mode",
    sweetBtn: "🍓 Sweet Mood",
    energyTitle: "Double Espresso & Cold Brew Mix 🚀",
    energyDesc: "The ideal pick for those who want a fast start and an energy rush.",
    cozyTitle: "Velvet Flat White & Soft Art ☕️",
    cozyDesc: "Smooth taste perfect for working on a laptop, reading books, or cozy talks.",
    sweetTitle: "Iced Matcha Latte & San-Sebastian Cheesecake 🍰",
    sweetDesc: "Treat yourself and your friends to a little joy and lift up your spirits.",
    ecosystemTag: "7TEEN ECOSYSTEM",
    ecosystemHeading: "Not just a cafe — A new brand culture",
    concept1Title: "Container Cafe Concept",
    concept1Desc: "Modern mini-container architecture paired with a cozy outdoor space. The most aesthetic spot in town.",
    concept2Title: "Tashkent City Expansion",
    concept2Desc: "Soon our project expands to Tashkent's top business centers and the prestigious Tashkent City area.",
    concept3Title: "7TEEN Clothes Line",
    concept3Desc: "Official minimalist streetwear clothing collection by 7TEEN launching very soon.",
    calcTag: "MINI CALCULATOR",
    calcHeading: "Build Your Ideal Set (-10% Discount)",
    selectDrink: "Choose your drink:",
    selectDessert: "Choose your dessert:",
    comboPriceLabel: "Combo Price:",
    orderSetBtn: "🛒 Order This Set"
  }
};

const Home = () => {
  const [lang, setLang] = useState("uz");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeVibe, setActiveVibe] = useState("energy");
  const [isOpen, setIsOpen] = useState(true);

  const [selectedDrink, setSelectedDrink] = useState("Capuccino");
  const [selectedDessert, setSelectedDessert] = useState("Cheesecake");

  const drinkPrices = { Capuccino: 28000, "Iced Latte": 32000, Matcha: 35000 };
  const dessertPrices = { Cheesecake: 35000, Croissant: 22000, Brownie: 30000 };

  const t = homeTranslations[lang];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const hour = new Date().getHours();
    setIsOpen(hour >= 8 && hour < 22);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const totalComboPrice = (drinkPrices[selectedDrink] + dessertPrices[selectedDessert]) * 0.9;

  return (
    <div style={styles.pageWrapper}>
      <div
        style={{
          ...styles.cursorGlow,
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      <style>{`
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 10px rgba(255,199,44,0.4); }
          50% { box-shadow: 0 0 25px rgba(255,199,44,0.8); }
          100% { box-shadow: 0 0 10px rgba(255,199,44,0.4); }
        }
        .lang-btn-h {
          border: 1px solid #344A3A;
          background: #243428;
          color: #FAF7F2;
          padding: 6px 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .lang-btn-h.active {
          background: #FFC72C;
          color: #1C2A20;
          border-color: #FFC72C;
        }
        .vibe-btn {
          background: #243428;
          color: #FAF7F2;
          border: 1px solid #344A3A;
          padding: 12px 24px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .vibe-btn.active, .vibe-btn:hover {
          background: #FFC72C;
          color: #1C2A20;
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 20px rgba(255, 199, 44, 0.3);
        }
        .concept-card {
          background: rgba(36, 52, 40, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 199, 44, 0.2);
          border-radius: 24px;
          padding: 30px;
          transition: all 0.4s ease;
        }
        .concept-card:hover {
          transform: translateY(-8px);
          border-color: #FFC72C;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        .cta-gold {
          background: #FFC72C;
          color: #1C2A20;
          padding: 16px 36px;
          border-radius: 50px;
          font-weight: 900;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          letter-spacing: 0.5px;
          animation: pulseGlow 3s infinite;
          transition: transform 0.2s ease;
        }
        .cta-gold:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* LANGUAGE SELECTOR */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "flex-end", gap: "8px", maxWidth: "1100px", margin: "0 auto", padding: "20px 20px 0 20px" }}>
        {["uz", "ru", "en"].map((item) => (
          <button
            key={item}
            className={`lang-btn-h ${lang === item ? "active" : ""}`}
            onClick={() => setLang(item)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>

      {/* HERO SECTION */}
      <section style={styles.heroSection}>
        <div style={styles.statusBadge}>
          <span style={{ ...styles.statusDot, backgroundColor: isOpen ? "#10B981" : "#EF4444" }} />
          <span>{isOpen ? t.openStatus : t.closedStatus}</span>
        </div>

        <h1 style={styles.heroTitle}>
          {t.heroTitle1} <br />
          <span style={{ color: "#FFC72C" }}>{t.heroTitle2}</span>
        </h1>

        <p style={styles.heroSubText}>{t.heroSubText}</p>

        <div style={styles.heroButtons}>
          <Link to="/menu" className="cta-gold">
            {t.discoverMenu}
          </Link>
          <a
            href="https://www.google.com/maps/vt/data=QFo-8XNef3SpAIqpzhnX1tscjc2tLcAQQsLJcpui6QOhSD_11RbhXYJOHaVlBjFw3aLc9KbO2jd31CFcVA9F9ZyWsZVBglS8UKIvKs4JWIR0mKH1lW_qihUZz17CcqkuFShyPfZIwzy8pPzxNkfH_8h14h6rVr16VqDgeVfjffgX&w=366&h=160"
            target="_blank"
            rel="noreferrer"
            style={styles.outlineBtn}
          >
            📍 Yusuf Xos Hojib, 72
          </a>
        </div>
      </section>

      {/* INTERACTIVE SELECTOR */}
      <section style={styles.sectionWrapper}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={styles.sectionTag}>{t.interactiveTag}</span>
          <h2 style={styles.sectionHeading}>{t.interactiveHeading}</h2>
        </div>

        <div style={styles.vibeList}>
          <button
            className={`vibe-btn ${activeVibe === "energy" ? "active" : ""}`}
            onClick={() => setActiveVibe("energy")}
          >
            {t.energyBtn}
          </button>
          <button
            className={`vibe-btn ${activeVibe === "cozy" ? "active" : ""}`}
            onClick={() => setActiveVibe("cozy")}
          >
            {t.cozyBtn}
          </button>
          <button
            className={`vibe-btn ${activeVibe === "sweet" ? "active" : ""}`}
            onClick={() => setActiveVibe("sweet")}
          >
            {t.sweetBtn}
          </button>
        </div>

        <div style={styles.vibeDisplayCard}>
          {activeVibe === "energy" && (
            <div>
              <h3 style={{ color: "#FFC72C", fontSize: "24px" }}>{t.energyTitle}</h3>
              <p style={{ color: "#A39B8E" }}>{t.energyDesc}</p>
            </div>
          )}
          {activeVibe === "cozy" && (
            <div>
              <h3 style={{ color: "#FFC72C", fontSize: "24px" }}>{t.cozyTitle}</h3>
              <p style={{ color: "#A39B8E" }}>{t.cozyDesc}</p>
            </div>
          )}
          {activeVibe === "sweet" && (
            <div>
              <h3 style={{ color: "#FFC72C", fontSize: "24px" }}>{t.sweetTitle}</h3>
              <p style={{ color: "#A39B8E" }}>{t.sweetDesc}</p>
            </div>
          )}
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section style={styles.sectionWrapper}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={styles.sectionTag}>{t.ecosystemTag}</span>
          <h2 style={styles.sectionHeading}>{t.ecosystemHeading}</h2>
        </div>

        <div style={styles.conceptGrid}>
          <div className="concept-card">
            <span style={{ fontSize: "40px" }}>🏗️</span>
            <h3 style={styles.cardTitle}>{t.concept1Title}</h3>
            <p style={styles.cardDesc}>{t.concept1Desc}</p>
          </div>

          <div className="concept-card">
            <span style={{ fontSize: "40px" }}>🌆</span>
            <h3 style={styles.cardTitle}>{t.concept2Title}</h3>
            <p style={styles.cardDesc}>{t.concept2Desc}</p>
          </div>

          <div className="concept-card">
            <span style={{ fontSize: "40px" }}>👕</span>
            <h3 style={styles.cardTitle}>{t.concept3Title}</h3>
            <p style={styles.cardDesc}>{t.concept3Desc}</p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ ...styles.sectionWrapper, background: "#16221A", borderRadius: "32px", padding: "50px 30px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <span style={styles.sectionTag}>{t.calcTag}</span>
          <h2 style={styles.sectionHeading}>{t.calcHeading}</h2>
        </div>

        <div style={styles.comboGrid}>
          <div>
            <label style={styles.label}>{t.selectDrink}</label>
            <select
              style={styles.selectInput}
              value={selectedDrink}
              onChange={(e) => setSelectedDrink(e.target.value)}
            >
              <option value="Capuccino">Capuccino — 28,000 UZS</option>
              <option value="Iced Latte">Iced Latte — 32,000 UZS</option>
              <option value="Matcha">Matcha Latte — 35,000 UZS</option>
            </select>
          </div>

          <div>
            <label style={styles.label}>{t.selectDessert}</label>
            <select
              style={styles.selectInput}
              value={selectedDessert}
              onChange={(e) => setSelectedDessert(e.target.value)}
            >
              <option value="Cheesecake">San-Sebastian — 35,000 UZS</option>
              <option value="Croissant">Shokoladli Kruassan — 22,000 UZS</option>
              <option value="Brownie">Funtukli Brownie — 30,000 UZS</option>
            </select>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "14px", color: "#A39B8E" }}>{t.comboPriceLabel}</div>
            <div style={{ fontSize: "28px", color: "#FFC72C", fontWeight: "900" }}>
              {totalComboPrice.toLocaleString()} UZS
            </div>
            <Link to="/menu" style={{ ...styles.outlineBtn, marginTop: "10px", borderColor: "#FFC72C", color: "#FFC72C" }}>
              {t.orderSetBtn}
            </Link>
          </div>
        </div>
      </section>

     

    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: "#1C2A20",  
    color: "#FAF7F2",
    minHeight: "100vh",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
    paddingBottom: "80px",
  },
  cursorGlow: {
    position: "fixed",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255,199,44,0.08) 0%, rgba(28,42,32,0) 70%)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
  },
  heroSection: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px 60px 20px",
    textAlign: "center",
    position: "relative",
    zIndex: 2,
  },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#243428",
    border: "1px solid #344A3A",
    padding: "8px 20px",
    borderRadius: "30px",
    fontSize: "13px",
    color: "#A39B8E",
    marginBottom: "24px",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  heroTitle: {
    fontSize: "clamp(28px, 3vw, 58px)",
    fontWeight: "900",
    lineHeight: "1.15",
    letterSpacing: "-1px",
    margin: "0 0 20px 0",
  },
  heroSubText: {
    fontSize: "18px",
    color: "#A39B8E",
    maxWidth: "650px",
    margin: "0 auto 40px auto",
    lineHeight: "1.6",
  },
  heroButtons: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  outlineBtn: {
    border: "1px solid #344A3A",
    color: "#FAF7F2",
    padding: "16px 30px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "15px",
    display: "inline-block",
  },
  sectionWrapper: {
    maxWidth: "1100px",
    margin: "80px auto 0 auto",
    padding: "0 20px",
    position: "relative",
    zIndex: 2,
  },
  sectionTag: {
    color: "#FFC72C",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "2px",
  },
  sectionHeading: {
    fontSize: "32px",
    fontWeight: "900",
    margin: "8px 0 0 0",
  },
  vibeList: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  vibeDisplayCard: {
    backgroundColor: "#243428",
    border: "1px solid #FFC72C",
    padding: "30px",
    borderRadius: "24px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  conceptGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "800",
    margin: "15px 0 10px 0",
    color: "#FFC72C",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#A39B8E",
    lineHeight: "1.6",
    margin: 0,
  },
  comboGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
    alignItems: "center",
  },
  label: {
    display: "block",
    fontSize: "13px",
    color: "#A39B8E",
    marginBottom: "8px",
  },
  selectInput: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#243428",
    color: "#FAF7F2",
    border: "1px solid #344A3A",
    borderRadius: "14px",
    fontSize: "14px",
    outline: "none",
  },
};

export default Home;