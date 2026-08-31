 import React, { useState } from "react";

const reviewsData = {
  uz: {
    badge: "MEHMONLARIMIZ FIKRI",
    title: "Mijozlarimiz Otzivlari 💬",
    count: "(120+ sharhlar)",
    addBtn: "+ Fikr qoldirish",
    formTitle: "Fikringizni yozib qoldiring",
    namePlaceholder: "Ismingiz",
    rolePlaceholder: "Kasbingiz yoki maqomingiz (masalan: Kofe ishqibozi)",
    commentPlaceholder: "7TEEN haqidagi fikringiz...",
    sendBtn: "Yuborish 🚀",
    cancelBtn: "Bekor qilish",
    defaultReviews: [
      {
        id: 1,
        name: "Madina Aliyeva",
        role: "Kofe ishqibozi",
        rating: 5,
        comment: "7TEEN'dagi matcha latte va kruassan shunchaki fantastika! Atmosferasi juda zo'r va ishlash uchun juda shinam joy.",
        date: "2 kun oldin",
        avatar: "👩🏻‍💼",
      },
      {
        id: 2,
        name: "Sardor Rahimov",
        role: "Doimiy mehmon",
        rating: 5,
        comment: "Do'stlar bilan yig'ilish uchun eng zo'r burchak. Estetikasi va xizmat ko'rsatish darajasi 10/10!",
        date: "1 hafta oldin",
        avatar: "👨🏻‍💻",
      },
      {
        id: 3,
        name: "Jasur & Nigora",
        role: "Juftlik",
        rating: 5,
        comment: "Kafedagi iliq va shinam kayfiyat har gal baxt beradi. Mualliflik desertlarini albatta tatib ko'ring!",
        date: "3 hafta oldin",
        avatar: "👫",
      },
    ]
  },
  ru: {
    badge: "МНЕНИЕ НАШИХ ГОСТЕЙ",
    title: "Отзывы Наших Клиентов 💬",
    count: "(120+ отзывов)",
    addBtn: "+ Оставить отзыв",
    formTitle: "Поделитесь своим мнением",
    namePlaceholder: "Ваше имя",
    rolePlaceholder: "Ваш статус (например: Кофейный энтузиаст)",
    commentPlaceholder: "Ваш отзыв о 7TEEN...",
    sendBtn: "Отправить 🚀",
    cancelBtn: "Отмена",
    defaultReviews: [
      {
        id: 1,
        name: "Мадина Алиева",
        role: "Кофейный энтузиаст",
        rating: 5,
        comment: "Матча латте и круассаны в 7TEEN — это просто фантастика! Очень приятная атмосфера.",
        date: "2 дня назад",
        avatar: "👩🏻‍💼",
      },
      {
        id: 2,
        name: "Сардор Рахимов",
        role: "Постоянный гость",
        rating: 5,
        comment: "Отличное место для встреч с друзьями. Эстетика и уровень обслуживания 10/10!",
        date: "1 неделю назад",
        avatar: "👨🏻‍💻",
      },
      {
        id: 3,
        name: "Жасур и Нигора",
        role: "Пара",
        rating: 5,
        comment: "Теплая и уютная атмосфера кафе каждый раз дарит счастье. Настоятельно рекомендую десерты!",
        date: "3 недели назад",
        avatar: "👫",
      },
    ]
  },
  en: {
    badge: "GUEST REVIEWS",
    title: "Customer Reviews 💬",
    count: "(120+ reviews)",
    addBtn: "+ Add Review",
    formTitle: "Leave your review",
    namePlaceholder: "Your name",
    rolePlaceholder: "Your status (e.g. Coffee Lover)",
    commentPlaceholder: "Your thoughts on 7TEEN...",
    sendBtn: "Submit 🚀",
    cancelBtn: "Cancel",
    defaultReviews: [
      {
        id: 1,
        name: "Madina Aliyeva",
        role: "Coffee Lover",
        rating: 5,
        comment: "The matcha latte and croissants at 7TEEN are purely fantastic! Very pleasant atmosphere.",
        date: "2 days ago",
        avatar: "👩🏻‍💼",
      },
      {
        id: 2,
        name: "Sardor Rahimov",
        role: "Regular Guest",
        rating: 5,
        comment: "The best spot to hang out with friends. Aesthetics and service quality are 10/10!",
        date: "1 week ago",
        avatar: "👨🏻‍💻",
      },
      {
        id: 3,
        name: "Jasur & Nigora",
        role: "Couple",
        rating: 5,
        comment: "The warm and cozy mood in the cafe brings happiness every single time. Highly recommended!",
        date: "3 weeks ago",
        avatar: "👫",
      },
    ]
  }
};

const Reviews = ({ currentLang = "uz" }) => {
  const t = reviewsData[currentLang] || reviewsData.uz;
  const [reviewsList, setReviewsList] = useState(t.defaultReviews);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name,
      role: role || "7TEEN Friend",
      rating: 5,
      comment,
      date: "Hozirgincha",
      avatar: "✨",
    };

    setReviewsList([newReview, ...reviewsList]);
    setName("");
    setRole("");
    setComment("");
    setShowForm(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.reviewsHeader}>
        <div>
          <span style={styles.sectionBadge}>{t.badge}</span>
          <h2 style={styles.sectionTitle}>{t.title}</h2>
        </div>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div style={styles.ratingBadge}>
            <span style={{ fontSize: "18px" }}>⭐ 4.9</span>
            <span style={{ color: "#6B7280", fontSize: "12px" }}>{t.count}</span>
          </div>
          <button style={styles.addBtn} onClick={() => setShowForm(!showForm)}>
            {t.addBtn}
          </button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.formBox}>
          <h3 style={{ margin: "0 0 15px 0", fontSize: "16px", color: "#1C2A20" }}>{t.formTitle}</h3>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder={t.rolePlaceholder}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.input}
          />
          <textarea
            placeholder={t.commentPlaceholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ ...styles.input, height: "80px", resize: "none" }}
            required
          />
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={styles.sendBtn}>{t.sendBtn}</button>
            <button type="button" style={styles.cancelBtn} onClick={() => setShowForm(false)}>{t.cancelBtn}</button>
          </div>
        </form>
      )}

      <div style={styles.reviewsGrid}>
        {reviewsList.map((rev) => (
          <div key={rev.id} style={styles.reviewCard}>
            <div style={styles.reviewUserHeader}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={styles.avatarBox}>{rev.avatar}</div>
                <div>
                  <h4 style={styles.reviewerName}>{rev.name}</h4>
                  <span style={styles.reviewerRole}>{rev.role}</span>
                </div>
              </div>
              <span style={styles.reviewDate}>{rev.date}</span>
            </div>

            <div style={{ color: "#FFC72C", fontSize: "14px", margin: "10px 0" }}>
              {"★".repeat(rev.rating)}
            </div>

            <p style={styles.commentText}>"{rev.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { width: "100%" },
  reviewsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "25px",
    borderBottom: "1px solid #EAE3D9",
    paddingBottom: "15px",
    flexWrap: "wrap",
    gap: "15px"
  },
  sectionBadge: { color: "#D97706", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", display: "block", marginBottom: "8px" },
  sectionTitle: { fontSize: "26px", fontWeight: "900", color: "#1C2A20", margin: 0 },
  ratingBadge: { backgroundColor: "#FFFFFF", padding: "8px 16px", borderRadius: "20px", border: "1px solid #EAE3D9", display: "flex", alignItems: "center", gap: "8px", fontWeight: "800", color: "#1C2A20" },
  addBtn: { backgroundColor: "#1C2A20", color: "#FFC72C", border: "none", padding: "10px 18px", borderRadius: "14px", fontWeight: "800", cursor: "pointer", fontSize: "13px" },
  formBox: { backgroundColor: "#FFFFFF", border: "1px solid #EAE3D9", borderRadius: "20px", padding: "20px", marginBottom: "25px", display: "flex", flexDirection: "column", gap: "10px" },
  input: { width: "100%", padding: "10px 14px", borderRadius: "10px", border: "1px solid #EAE3D9", outline: "none", fontSize: "13px", boxSizing: "border-box" },
  sendBtn: { backgroundColor: "#FFC72C", color: "#1C2A20", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "800", cursor: "pointer" },
  cancelBtn: { backgroundColor: "transparent", color: "#888", border: "none", padding: "10px 15px", cursor: "pointer" },
  reviewsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" },
  reviewCard: { backgroundColor: "#FFFFFF", borderRadius: "20px", padding: "22px", border: "1px solid #EFEBE4", display: "flex", flexDirection: "column", justifyContent: "space-between" },
  reviewUserHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  avatarBox: { width: "40px", height: "40px", backgroundColor: "#F8F5F0", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", border: "1px solid #EAE3D9" },
  reviewerName: { margin: 0, fontSize: "14px", fontWeight: "800", color: "#1C2A20" },
  reviewerRole: { fontSize: "11px", color: "#888" },
  reviewDate: { fontSize: "10px", color: "#aaa" },
  commentText: { fontSize: "13px", color: "#555", lineHeight: "1.6", margin: 0, fontStyle: "italic" },
};

export default Reviews;