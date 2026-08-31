 import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <style>{`
        .footer-link {
          color: #A39B8E;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #FFC72C;
          transform: translateX(3px);
        }
        .social-btn {
          background-color: #27392C;
          color: #FAF7F2;
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid #344A3A;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .social-btn:hover {
          background-color: #FFC72C;
          color: #1C2A20;
          transform: translateY(-2px);
        }
        .map-btn {
          background-color: #1C2A20;
          color: #FFC72C;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #FFC72C;
          margin-top: 10px;
          transition: all 0.2s ease;
        }
        .map-btn:hover {
          background-color: #FFC72C;
          color: #1C2A20;
          transform: translateY(-2px);
        }
        
        /* Mobil va Planshet uchun Media Queries */
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            text-align: left;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>

      <div style={styles.contentWrapper}>
        <div style={styles.gridContainer} className="footer-grid">
       
          {/* Brend qismi */}
          <div style={styles.brandColumn}>
            <div style={styles.logoBox}>
              <span style={{ fontSize: "22px" }}>☕️</span>
              <span style={styles.logoText}>7TEEN CAFE</span>
            </div>
            <p style={styles.sloganText}>
              Har bir qultumda — shinam atmosfera, samimiy tabassum va qalb harorati. Sizni orziqib kutamiz! ✨
            </p>
            <div style={styles.socialBox}>
              <a 
                href="https://instagram.com/7teen_uz" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
              >
                <span>📸</span> @7teen_uz
              </a>
            </div>
          </div>
 
          {/* Navigatsiya */}
          <div>
            <h4 style={styles.columnTitle}>NAVIGATSIYA</h4>
            <ul style={styles.linkList}>
              <li><Link to="/" className="footer-link">Bosh sahifa</Link></li>
              <li><Link to="/menu" className="footer-link">Menyu & Shirinliklar</Link></li>
              <li><Link to="/about" className="footer-link">Biz haqimizda</Link></li>
              <li><Link to="/orders" className="footer-link">Savat & Buyurtmalar</Link></li>
            </ul>
          </div>

          {/* Ish vaqti */}
          <div>
            <h4 style={styles.columnTitle}>ISH VAQTI</h4>
            <div style={styles.hoursBox}>
              <span style={{ fontSize: "18px" }}>⏰</span>
              <div>
                <strong style={{ color: "#FAF7F2", display: "block", fontSize: "14px" }}>Har kuni:</strong>
                <span style={{ color: "#A39B8E", fontSize: "13px" }}>08:00 dan 22:00 gacha</span>
              </div>
            </div>
            <p style={{ color: "#7A887B", fontSize: "12px", marginTop: "12px", lineHeight: "1.4" }}>
              Ertalabki kofe va kechki shinam suhbatlar uchun doim ochiqymiz.
            </p>
          </div>

          {/* Aloqa */}
          <div>
            <h4 style={styles.columnTitle}>ALOQA VA MANZIL</h4>
            <p style={styles.contactItem}>
              📍 <strong>Manzil:</strong> Yusuf Xos Hojib, 72
            </p>
            <p style={styles.contactItem}>
              📞 <strong>Tel:</strong> <a href="tel:+998504449969" style={{ color: "#FFC72C", textDecoration: "none" }}>+998 50 444 99 69</a>
            </p>
            
            <a 
              href="https://www.google.com/maps/vt/data=QFo-8XNef3SpAIqpzhnX1tscjc2tLcAQQsLJcpui6QOhSD_11RbhXYJOHaVlBjFw3aLc9KbO2jd31CFcVA9F9ZyWsZVBglS8UKIvKs4JWIR0mKH1lW_qihUZz17CcqkuFShyPfZIwzy8pPzxNkfH_8h14h6rVr16VqDgeVfjffgX&w=366&h=160" 
              target="_blank" 
              rel="noreferrer" 
              className="map-btn"
            >
              🗺️ Xaritada ko'rish
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={styles.bottomBar} className="footer-bottom">
          <p style={styles.copyrightText}>
            © 2026 <strong>7TEEN Cafe</strong>. Barcha huquqlar himoyalangan.
          </p>
          <div style={styles.bottomBadge}>
            <span>Crafted with ❤️ for 7TEEN</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
 
const styles = {
  footerContainer: {
    backgroundColor: "#1C2A20",  
    color: "#FAF7F2",
    paddingTop: "40px",
    paddingBottom: "30px",
    borderTop: "3px solid #FFC72C",
    fontFamily: "'Inter', -apple-system, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  },
  contentWrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 20px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
    gap: "40px",
    paddingBottom: "30px",
    borderBottom: "1px solid #2C3E31",
  },
  brandColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoText: {
    fontSize: "20px",
    fontWeight: "900",
    letterSpacing: "1px",
    color: "#FFC72C",
  },
  sloganText: {
    color: "#A39B8E",
    fontSize: "13px",
    lineHeight: "1.6",
    margin: 0,
  },
  socialBox: {
    marginTop: "6px",
  },
  columnTitle: {
    color: "#FAF7F2",
    fontSize: "12px",
    fontWeight: "900",
    letterSpacing: "1.5px",
    marginBottom: "14px",
    textTransform: "uppercase",
  },
  linkList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  hoursBox: {
    backgroundColor: "#243428",
    padding: "12px 14px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid #2F4435",
  },
  contactItem: {
    color: "#A39B8E",
    fontSize: "13px",
    margin: "0 0 10px 0",
    lineHeight: "1.5",
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    flexWrap: "wrap",
    gap: "15px",
  },
  copyrightText: {
    color: "#7A887B",
    fontSize: "12px",
    margin: 0,
  },
  bottomBadge: {
    backgroundColor: "#243428",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "11px",
    color: "#FFC72C",
    fontWeight: "700",
    border: "1px solid #2F4435",
  },
};

export default Footer;