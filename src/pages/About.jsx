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

          <h1 style={styles.heroTitle}>
            {t.heroTitlePart1} <br />
            <span style={styles.highlightText}>{t.heroTitlePart2}</span>
          </h1>

          <p style={styles.heroSubtitle}>{t.heroSubtitle}</p>
        </div>

        {/* STATS SECTION */}
        <div style={styles.statsContainer}>
          {t.stats.map((st, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-around" }}>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>{st.num}</span>
                <span style={styles.statLabel}>{st.label}</span>
              </div>
              {idx < t.stats.length - 1 && <div style={styles.statDivider} />}
            </div>
          ))}
        </div>

        {/* STORY SECTION */}
        <div style={styles.storySection}>
          <div style={styles.storyImageWrapper}>
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

          <div style={styles.storyTextCard}>
            <span style={styles.sectionBadge}>{t.philosophyBadge}</span>
            <h2 style={styles.sectionTitle}>{t.philosophyTitle}</h2>
            <p style={styles.storyParagraph}>{t.philosophyP1}</p>
            <p style={styles.storyParagraph}>{t.philosophyP2}</p>
          </div>
        </div>

        {/* REVIEWS COMPONENT */}
        <div style={{ marginTop: "70px" }}>
          <Reviews currentLang={lang} />
        </div>

        {/* CTA BOX */}
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>{t.ctaTitle}</h2>
          <p style={styles.ctaSubtitle}>{t.ctaSubtitle}</p>
          <Link to="/menu" style={styles.ctaBtn}>
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
    padding: "40px 20px 80px 20px",
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
    marginBottom: "40px",
  },
  brandBadge: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#1C2A20",
    letterSpacing: "2px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
    backgroundColor: "#FFFFFF",
    padding: "6px 16px",
    borderRadius: "20px",
    border: "1px solid #EAE3D9",
  },
  dotSeparator: {
    color: "#D1C7BD",
  },
  heroTitle: {
    fontSize: "40px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: "0 0 16px 0",
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
  },
  highlightText: {
    color: "#D97706",
  },
  heroSubtitle: {
    fontSize: "15px",
    color: "#6B7280",
    maxWidth: "600px",
    margin: "0 auto",
    lineHeight: "1.6",
  },
  statsContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "26px 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid #EFEBE4",
    boxShadow: "0 10px 30px rgba(28, 42, 32, 0.04)",
    marginBottom: "50px",
  },
  statBox: {
    textAlign: "center",
  },
  statNumber: {
    fontSize: "30px",
    fontWeight: "900",
    color: "#1C2A20",
    display: "block",
  },
  statLabel: {
    fontSize: "12px",
    color: "#888",
    fontWeight: "700",
    marginTop: "4px",
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
    borderRadius: "24px",
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
    bottom: "16px",
    left: "16px",
    backgroundColor: "rgba(28, 42, 32, 0.85)",
    backdropFilter: "blur(8px)",
    color: "#FFC72C",
    padding: "8px 16px",
    borderRadius: "14px",
    fontSize: "12px",
    fontWeight: "800",
  },
  storyTextCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    padding: "32px",
    border: "1px solid #EFEBE4",
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
    fontSize: "26px",
    fontWeight: "900",
    color: "#1C2A20",
    margin: "0 0 16px 0",
  },
  storyParagraph: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.7",
    marginBottom: "12px",
  },
  ctaBox: {
    marginTop: "70px",
    backgroundColor: "#1C2A20",
    borderRadius: "28px",
    padding: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    boxShadow: "0 15px 35px rgba(28, 42, 32, 0.2)",
  },
  ctaTitle: {
    fontSize: "28px",
    fontWeight: "900",
    margin: "0 0 10px 0",
  },
  ctaSubtitle: {
    fontSize: "14px",
    color: "#A3B18A",
    margin: "0 0 24px 0",
  },
  ctaBtn: {
    display: "inline-block",
    backgroundColor: "#FFC72C",
    color: "#1C2A20",
    padding: "14px 32px",
    borderRadius: "14px",
    fontWeight: "900",
    fontSize: "14px",
    textDecoration: "none",
    boxShadow: "0 4px 15px rgba(255, 199, 44, 0.3)",
  },
};

export default About;