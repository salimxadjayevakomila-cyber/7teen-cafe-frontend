 import { useState } from "react";
import { Link } from "react-router-dom";
import Reviews from "../components/Reviews";

const content = {
  uz: {
    brandTag: "EST. 2026",
    heroTitlePart1: "Har bir damda —",
    heroTitlePart2: "Haqiqiy Ta'm va Quvonch",
    heroSubtitle: "7TEEN Cafe — bu shunchaki kofe va taomlar maskani emas. Bu unutilmas uchrashuvlar, iliq suhbatlar va mualliflik retseptlari birlashgan shinam burchakdir.",
    stats: [
      { num: "100%", label: "Aralashmagan Arabica" },
      { num: "15k+", label: "Mamnun Mijozlar" },
      { num: "4.9 ★", label: "Otzivlar Reytingi" },
    ],
    philosophyBadge: "FALSAFAMIZ VA BOSHLANISHI",
    philosophyTitle: "Nega aynan 7TEEN?",
    philosophyP1: "17 yosh — bu energiya, orzular va cheksiz ilhom davri! Biz 7TEEN atmosferasini yaratishda aynan shu samimiylik va erkinlikni asos qilib oldik.",
    philosophyP2: "Kafemizga qadam bosishingiz bilan harorat va iliq kofe xushbo'yligini his qilasiz. Har bir ertalabki kofe va mualliflik desertlarimiz sizning kuningizni yanada yorqinroq qilish uchun maxsus tayyorlanadi.",
    ctaTitle: "7TEEN burchagiga hush kelibsiz!",
    ctaSubtitle: "Sizni menyu va shirinliklarimiz bilan xursand qilishga oshiqyapmiz.",
    ctaBtn: "Menyuni ko'rish 🍽️",
  },
  ru: {
    brandTag: "ОСН. 2026",
    heroTitlePart1: "В каждом глотке —",
    heroTitlePart2: "Настоящий Вкус и Радость",
    heroSubtitle: "7TEEN Cafe — это не просто место для кофе и еды. Это уютный уголок, где сочетаются незабываемые встречи, тёплые беседы и авторские рецепты.",
    stats: [
      { num: "100%", label: "Чистая Арабика" },
      { num: "15k+", label: "Довольных Клиентов" },
      { num: "4.9 ★", label: "Рейтинг Отзывов" },
    ],
    philosophyBadge: "НАША ФИЛОСОФИЯ И НАЧАЛО",
    philosophyTitle: "Почему именно 7TEEN?",
    philosophyP1: "17 лет — это время энергии, мечты и бесконечного вдохновения! Создавая атмосферу 7TEEN, мы взяли за основу именно эту искренность и свободу.",
    philosophyP2: "Переступив порог нашего кафе, вы сразу почувствуете тепло и аромат свежесваренного кофе. Наш утренний кофе и авторские десерты создаются, чтобы сделать ваш день ярче.",
    ctaTitle: "Добро пожаловать в уютный уголок 7TEEN!",
    ctaSubtitle: "Мы с нетерпением ждем возможности порадовать вас нашим меню и десертами.",
    ctaBtn: "Посмотреть меню 🍽️",
  },
  en: {
    brandTag: "EST. 2026",
    heroTitlePart1: "In every moment —",
    heroTitlePart2: "True Taste & Joy",
    heroSubtitle: "7TEEN Cafe is more than just a place for coffee and food. It is a cozy corner where unforgettable meetings, warm conversations, and signature recipes unite.",
    stats: [
      { num: "100%", label: "Pure Arabica" },
      { num: "15k+", label: "Happy Customers" },
      { num: "4.9 ★", label: "Review Rating" },
    ],
    philosophyBadge: "OUR PHILOSOPHY & BEGINNING",
    philosophyTitle: "Why 7TEEN?",
    philosophyP1: "17 is an age of energy, dreams, and endless inspiration! When creating the 7TEEN vibe, we took this exact sincerity and freedom as our foundation.",
    philosophyP2: "The moment you step into our cafe, you feel the warmth and rich aroma of fresh coffee. Our morning coffee and signature desserts are uniquely crafted to make your day brighter.",
    ctaTitle: "Welcome to the 7TEEN corner!",
    ctaSubtitle: "We can't wait to delight you with our menu and delicious desserts.",
    ctaBtn: "View Menu 🍽️",
  },
};

const About = () => {
  const [lang, setLang] = useState("uz"); 
  const t = content[lang];

  return (
    <div style={styles.pageContainer}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .story-img {
          transition: transform 0.4s ease;
        }
        .story-img:hover {
          transform: scale(1.02);
        }
        .lang-btn {
          border: 1px solid #1C2A20;
          background: transparent;
          color: #1C2A20;
          padding: 4px 10px;
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
        .cta-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 199, 44, 0.4) !important;
        }

        /* MOBIL RANG VA RETSEPTLAR MOSLASHUVCHANLIGI */
        @media (max-width: 768px) {
          .about-hero-title {
            font-size: 26px !important;
          }
          .about-stats-container {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 20px 15px !important;
          }
          .about-stat-divider {
            width: 100% !important;
            height: 1px !important;
          }
          .about-story-section {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .about-story-img-wrapper {
            height: 280px !important;
          }
          .about-story-text-card {
            padding: 20px !important;
          }
          .about-cta-box {
            padding: 24px 16px !important;
            margin-top: 40px !important;
          }
          .about-cta-title {
            font-size: 22px !important;
          }
        }
      `}</style>

      <div style={styles.contentWrapper} className="animate-fade">
      
        {/* LANGUAGE BUTTONS */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px", marginBottom: "20px" }}>
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

        {/* HERO SECTION */}
        <div style={styles.heroSection}>
          <div style={styles.brandBadge}>
            <span>☕️ 7TEEN CAFE STORY</span>
            <span style={styles.dotSeparator}>•</span>
            <span style={{ color: "#D97706" }}>{t.brandTag}</span>
          </div>

          <h1 style={styles.heroTitle} className="about-hero-title">
            {t.heroTitlePart1} <br />
            <span style={styles.highlightText}>{t.heroTitlePart2}</span>
          </h1>

          <p style={styles.heroSubtitle}>{t.heroSubtitle}</p>
        </div>

        {/* STATS SECTION */}
        <div style={styles.statsContainer} className="about-stats-container">
          {t.stats.map((st, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around" }}>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>{st.num}</span>
                <span style={styles.statLabel}>{st.label}</span>
              </div>
              {idx < t.stats.length - 1 && <div style={styles.statDivider} className="about-stat-divider" />}
            </div>
          ))}
        </div>

        {/* STORY SECTION */}
        <div style={styles.storySection} className="about-story-section">
          <div style={styles.storyImageWrapper} className="about-story-img-wrapper">
            <img 
              src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnJ27U82h3IsRnPMApXl3EAZPhMXBUTkTRXE4Y_M1fcIkSBoCRffCti44ahuY2B4owMbAp_7TNJ3BzWQHRALtD4CfVMtHPdnmXxUHjEOYAMnZJvvSFImhYfXMmcw3sLgjBRRv_S0XCDVVZc=s1360-w1360-h1020-rw" 
              alt="7TEEN Cafe Atmosphere" 
              className="story-img"
              style={styles.storyImage}
            />
            <div style={styles.imageOverlayBadge}>
              <span>✨ 7TEEN Atmosphere</span>
            </div>
          </div>

          <div style={styles.storyTextCard} className="about-story-text-card">
            <span style={styles.sectionBadge}>{t.philosophyBadge}</span>
            <h2 style={styles.sectionTitle}>{t.philosophyTitle}</h2>
            <p style={styles.storyParagraph}>{t.philosophyP1}</p>
            <p style={styles.storyParagraph}>{t.philosophyP2}</p>
          </div>
        </div>

        {/* REVIEWS COMPONENT */}
        <div style={{ marginTop: "50px" }}>
          <Reviews currentLang={lang} />
        </div>

        {/* CTA BOX */}
        <div style={styles.ctaBox} className="about-cta-box">
          <h2 style={styles.ctaTitle} className="about-cta-title">{t.ctaTitle}</h2>
          <p style={styles.ctaSubtitle}>{t.ctaSubtitle}</p>
          <Link to="/menu" style={styles.ctaBtn} className="cta-btn-hover">
            {t.ctaBtn}
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#FAF7F2",
    padding: "30px 16px 60px 16px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Inter', -apple-system, sans-serif",
    boxSizing: "border-box",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: "940px",
  },
  heroSection: {
    textAlign: "center",
    marginBottom: "35px",
  },
  brandBadge: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#1C2A20",
    letterSpacing: "1.5px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "14px",
    backgroundColor: "#FFFFFF",
    padding: "6px 14px",
    borderRadius: "20px",
    border: "1px solid #EAE3D9",
  },
  dotSeparator: {
    color: "#D1C7BD",
  },
  heroTitle: {
    fontSize: "38px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: "0 0 14px 0",
    lineHeight: "1.25",
    letterSpacing: "-0.5px",
  },
  highlightText: {
    color: "#D97706",
  },
  heroSubtitle: {
    fontSize: "14px",
    color: "#6B7280",
    maxWidth: "580px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  statsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "24px 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid #EFEBE4",
    boxShadow: "0 10px 30px rgba(28, 42, 32, 0.04)",
    marginBottom: "40px",
  },
  statBox: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "26px",
    fontWeight: "900",
    color: "#1C2A20",
    display: "block",
  },
  statLabel: {
    fontSize: "12px",
    color: "#888",
    fontWeight: "700",
    marginTop: "2px",
  },
  statDivider: {
    width: "1px",
    height: "36px",
    backgroundColor: "#EAE3D9",
  },
  storySection: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "30px",
    alignItems: "center",
  },
  storyImageWrapper: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    height: "360px",
    border: "1px solid #EFEBE4",
    boxShadow: "0 15px 35px rgba(28, 42, 32, 0.08)",
  },
  storyImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  imageOverlayBadge: {
    position: "absolute",
    bottom: "14px",
    left: "14px",
    backgroundColor: "rgba(28, 42, 32, 0.85)",
    backdropFilter: "blur(8px)",
    color: "#FFC72C",
    padding: "6px 14px",
    borderRadius: "12px",
    fontSize: "11px",
    fontWeight: "800",
  },
  storyTextCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    padding: "28px",
    border: "1px solid #EFEBE4",
    boxShadow: "0 10px 30px rgba(28, 42, 32, 0.03)",
  },
  sectionBadge: {
    color: "#D97706",
    fontSize: "10px",
    fontWeight: "900",
    letterSpacing: "2px",
    display: "block",
    marginBottom: "8px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: "0 0 14px 0",
  },
  storyParagraph: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.65",
    marginBottom: "12px",
  },
  ctaBox: {
    marginTop: "50px",
    backgroundColor: "#1C2A20",
    borderRadius: "24px",
    padding: "36px 20px",
    textAlign: "center",
    color: "#FFFFFF",
    boxShadow: "0 15px 35px rgba(28, 42, 32, 0.2)",
  },
  ctaTitle: {
    fontSize: "26px",
    fontWeight: "900",
    margin: "0 0 8px 0",
  },
  ctaSubtitle: {
    fontSize: "13px",
    color: "#A3B18A",
    margin: "0 0 20px 0",
  },
  ctaBtn: {
    display: "inline-block",
    backgroundColor: "#FFC72C",
    color: "#1C2A20",
    padding: "12px 28px",
    borderRadius: "12px",
    fontWeight: "900",
    fontSize: "13px",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(255, 199, 44, 0.3)",
    transition: "all 0.2s ease",
  },
};

export default About;