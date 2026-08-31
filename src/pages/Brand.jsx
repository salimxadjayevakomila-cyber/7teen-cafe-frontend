 import React, { useState } from 'react';

const uiTranslations = {
  uz: {
    tagline: "7TEEN Collection",
    title: "OFFICIAL LOOKBOOK",
    all: "BARCHASI",
    clothes: "KIYIMLAR",
    watches: "SOATLAR",
    sneakers: "KROSSOVKALAR",
    priceLabel: "Narxi",
    buyBtn: "Sotib olish 🛍️",
    almostYours: "Deyarli sizniki!",
    enterDetails: "uchun ma'lumotlaringizni kiriting",
    totalPayment: "Jami to'lov:",
    nameLabel: "Ismingiz ✨",
    phoneLabel: "Telefon raqamingiz 📞",
    namePlaceholder: "ism",
    submitting: "Yuborilmoqda...",
    confirmBtn: "Xaridni Tasdiqlash 🚀",
    successTitle: "Buyurtmangiz Qabul Qilindi!",
    successText1: "Rahmat,",
    successText2: "buyurtmasi adminga yetib bordi. Tez orada siz bilan bog'lanamiz!",
    successBtn: "Ajoyib, Tushunarli! ✨",
    errorText: "Xatolik: ",
    serverError: "Server bilan bog'lanib bo'lmadi!"
  },
  ru: {
    tagline: "Коллекция 7TEEN",
    title: "ОФИЦИАЛЬНЫЙ ЛУКБУК",
    all: "ВСЕ",
    clothes: "ОДЕЖДА",
    watches: "ЧАСЫ",
    sneakers: "КРОССОВКИ",
    priceLabel: "Цена",
    buyBtn: "Купить 🛍️",
    almostYours: "Почти ваше!",
    enterDetails: "введите ваши данные для",
    totalPayment: "Итого к оплате:",
    nameLabel: "Ваше имя ✨",
    phoneLabel: "Ваш номер телефона 📞",
    namePlaceholder: "Имя",
    submitting: "Отправка...",
    confirmBtn: "Подтвердить покупку 🚀",
    successTitle: "Ваш заказ принят!",
    successText1: "Спасибо,",
    successText2: "заказ получен администратором. Скоро мы с вами свяжемся!",
    successBtn: "Отлично, понятно! ✨",
    errorText: "Ошибка: ",
    serverError: "Не удалось связаться с сервером!"
  },
  en: {
    tagline: "7TEEN Collection",
    title: "OFFICIAL LOOKBOOK",
    all: "ALL",
    clothes: "CLOTHES",
    watches: "WATCHES",
    sneakers: "SNEAKERS",
    priceLabel: "Price",
    buyBtn: "Buy Now 🛍️",
    almostYours: "Almost yours!",
    enterDetails: "enter your details for",
    totalPayment: "Total Payment:",
    nameLabel: "Your Name ✨",
    phoneLabel: "Phone Number 📞",
    namePlaceholder: "Name",
    submitting: "Submitting...",
    confirmBtn: "Confirm Purchase 🚀",
    successTitle: "Order Received!",
    successText1: "Thank you,",
    successText2: "order reached the admin. We will contact you soon!",
    successBtn: "Awesome, Got it! ✨",
    errorText: "Error: ",
    serverError: "Failed to connect to the server!"
  }
};

const brandProducts = [
  // CLOTHES
  {
    id: 1,
    title: {
      uz: "7TEEN Zig'ir Matoli Ko'ylak To'plami",
      ru: "Комплект из льняной рубашки 7TEEN",
      en: "7TEEN Linen Shirt Set"
    },
    category: "CLOTHES",
    subCategory: "100% Organic Cotton",
    price: "450,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Yozgi yengil zig'ir matoli ko'ylak va shim to'plami. Erkin bichim va maksimal qulaylik.",
      ru: "Летний легкий комплект из льняной рубашки и брюк. Свободный крой и максимальный комфорт.",
      en: "Summer lightweight linen shirt and trousers set. Relaxed fit and maximum comfort."
    },
    imageSrc: "https://i.pinimg.com/736x/ea/8f/f0/ea8ff0b1e74c5f9f98726fb9accc35c6.jpg"
  },
  {
    id: 2,
    title: {
      uz: "Klassik Kasual Polo Ko'ylak",
      ru: "Классическая рубашка-поло Casual",
      en: "Signature Casual Polo Shirt"
    },
    category: "CLOTHES",
    subCategory: "Premium Cotton",
    price: "280,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Klassik uslubdagi tugmali qisqa yeng polo ko'ylak. Kundalik va rasmiy uslubga mos.",
      ru: "Классическая рубашка-поло с коротким рукавом. Подходит для повседневного и официального стиля.",
      en: "Classic short-sleeve polo shirt with buttons. Perfect for both casual and smart style."
    },
    imageSrc: "https://i.pinimg.com/736x/20/de/57/20de573ecdcb02f91b40541f05a310ed.jpg"
  },
  {
    id: 3,
    title: {
      uz: "Keng Bichimli Burmali Klassik Shim",
      ru: "Классические брюки свободного кроя",
      en: "Relaxed Fit Pleated Trousers"
    },
    category: "CLOTHES",
    subCategory: "Relaxed Fit",
    price: "380,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Keng bichimdagi, burmali va juda qulay premium klassik shim.",
      ru: "Премиальные классические брюки свободного кроя со складками.",
      en: "Premium classic trousers with a relaxed fit and subtle pleats."
    },
    imageSrc: "https://i.pinimg.com/736x/a5/83/c3/a583c395a9133f31190311989d79caa9.jpg"
  },
  {
    id: 4,
    title: {
      uz: "Vintage To'qilgan Sviter",
      ru: "Винтажный вязаный свитер",
      en: "Vintage Knitted Sweater"
    },
    category: "CLOTHES",
    subCategory: "Knitwear",
    price: "420,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "To'qilgan vintage uslubidagi issiq va qulay sviter.",
      ru: "Теплый и уютный вязаный свитер в винтажном стиле.",
      en: "Warm and cozy knitted sweater in a vintage aesthetic."
    },
    imageSrc: "https://i.pinimg.com/736x/1e/a7/27/1ea727b17f8482358971beb47a3101cd.jpg"
  },
  {
    id: 5,
    title: {
      uz: "7TEEN Printli Breand Xudi",
      ru: "Фирменное худи 7TEEN с принтом",
      en: "7TEEN Statement Graphic Hoodie"
    },
    category: "CLOTHES",
    subCategory: "Streetwear",
    price: "490,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Orqa va old qismida maxsus brend yozuvi bo'lgan erkin bichimli hoodie.",
      ru: "Худи свободного кроя с фирменной надписью спереди и сзади.",
      en: "Relaxed fit hoodie featuring signature brand graphics on front and back."
    },
    imageSrc: "https://i.pinimg.com/1200x/d0/c3/13/d0c3139c737088e87123a45054708f0f.jpg"
  },

  // WATCHES
  {
    id: 6,
    title: {
      uz: "Luxury Steel Nautilus Soati",
      ru: "Роскошные стальные часы Nautilus",
      en: "Luxury Steel Nautilus Watch"
    },
    category: "WATCHES",
    subCategory: "Stainless Steel",
    price: "850,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Metall tasmali, kumushrang va premium dizaynga ega klassik soat.",
      ru: "Классические часы с металлическим ремешком, серебристым циферблатом и премиальным дизайном.",
      en: "Classic watch with a steel bracelet, silver finish, and premium design."
    },
    imageSrc: "https://i.pinimg.com/1200x/e7/96/b1/e796b142f60890d448640ff91dd47c17.jpg"
  },
  {
    id: 7,
    title: {
      uz: "Arab Raqamli Qora Mat Soat",
      ru: "Матово-черные часы с арабскими цифрами",
      en: "Arabic Dial Matte Black Watch"
    },
    category: "WATCHES",
    subCategory: "Limited Edition",
    price: "920,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Arab raqamlari tushirilgan, qora mat rangli maxsus kolleksiya soati.",
      ru: "Лимитированные часы матового черного цвета с арабскими цифрами.",
      en: "Limited edition matte black watch featuring distinct Arabic numerals."
    },
    imageSrc: "https://i.pinimg.com/1200x/5b/4b/54/5b4b5485eb1c91c1e0453bca5ffc682c.jpg"
  },
  {
    id: 8,
    title: {
      uz: "Casio Classic To'rtburchak Kumush Soat",
      ru: "Классические прямоугольные часы Casio Silver",
      en: "Casio Classic Square Silver"
    },
    category: "WATCHES",
    subCategory: "Classic Series",
    price: "650,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "To'rtburchak siferblatli va to'q qora ichki dizaynga ega metall soat.",
      ru: "Металлические часы с прямоугольным циферблатом и черным внутренним дизайном.",
      en: "Metallic watch with a square case dial and dark interior design."
    },
    imageSrc: "https://i.pinimg.com/736x/52/c7/b3/52c7b3845b9443a0250649de28e0f570.jpg"
  },
  {
    id: 9,
    title: {
      uz: "Hamilton Jazzmaster To'q Ko'k Soat",
      ru: "Часы Hamilton Jazzmaster с синим циферблатом",
      en: "Hamilton Jazzmaster Blue Dial"
    },
    category: "WATCHES",
    subCategory: "Premium Quartz",
    price: "1,100,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "To'q ko'k siferblatli va po'lat tasmali o'ta bejirim soat.",
      ru: "Элегантные часы с темно-синим циферблатом и стальным ремешком.",
      en: "Elegant wristwatch featuring a deep blue dial and steel strap."
    },
    imageSrc: "https://i.pinimg.com/736x/14/a6/30/14a630ec2db43eb74600b5c4ef7d6b03.jpg"
  },
  {
    id: 10,
    title: {
      uz: "Minimalist Charm Tasmali Soat",
      ru: "Минималистичные часы с кожаным ремешком",
      en: "Minimalist Square Leather Watch"
    },
    category: "WATCHES",
    subCategory: "Genuine Leather",
    price: "780,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Jigarrang charm tasmali va to'rtburchak korpusli minimalist soat.",
      ru: "Минималистичные часы с коричневым кожаным ремешком и прямоугольным корпусом.",
      en: "Minimalist timepiece with a square case and genuine brown leather strap."
    },
    imageSrc: "https://i.pinimg.com/736x/87/7d/16/877d16635b5b31fae0f9f00467a4ee94.jpg"
  },

  // SNEAKERS
  {
    id: 11,
    title: {
      uz: "Brunello Cucinelli Zamsh Keda",
      ru: "Замшевые кеды Brunello Cucinelli",
      en: "Brunello Cucinelli Suede Low"
    },
    category: "SNEAKERS",
    subCategory: "Suede Leather",
    price: "690,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Kulrang zamsh matodan tayyorlangan premium va qulay kedu-krossovka.",
      ru: "Премиальные и удобные кеды из серой замши.",
      en: "Premium low-top suede sneakers crafted in versatile grey tones."
    },
    imageSrc: "https://i.pinimg.com/1200x/51/c8/6b/51c86bf23e483ebb679d84c826a9e598.jpg"
  },
  {
    id: 12,
    title: {
      uz: "Asics Gel-Kayano Retro Runner Krossovka",
      ru: "Кроссовки Asics Gel-Kayano Retro Runner",
      en: "Asics Gel-Kayano Retro Runner"
    },
    category: "SNEAKERS",
    subCategory: "Performance / Lifestyle",
    price: "750,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Aero-dizaynga ega, harakatlanish uchun juda qulay va yumshoq krossovka.",
      ru: "Мягкие и удобные кроссовки с аэродинамическим дизайном для активного дня.",
      en: "Aero-designed comfortable running sneakers for everyday movement."
    },
    imageSrc: "https://i.pinimg.com/1200x/f2/b4/ea/f2b4ea540355ba9d231131966470da44.jpg"
  },
  {
    id: 13,
    title: {
      uz: "Polo Ralph Lauren To'q Ko'k Keda",
      ru: "Темно-синие кеды Polo Ralph Lauren",
      en: "Polo Ralph Lauren Navy Suede"
    },
    category: "SNEAKERS",
    subCategory: "Classic Casual",
    price: "580,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "To'q ko'k zamsh matoli, jigarrang taglikka ega zamonaviy keda.",
      ru: "Современные кеды из темно-синей замши с коричневой подошвой.",
      en: "Modern casual sneakers with dark navy suede and brown gum sole."
    },
    imageSrc: "https://i.pinimg.com/736x/c1/32/7e/c1327e15c320090207d4d7afcecc58d4.jpg"
  },
  {
    id: 14,
    title: {
      uz: "Dior B27 Low-Top Kulrang Krossovka",
      ru: "Светло-серые кроссовки Dior B27 Low-Top",
      en: "Dior B27 Low-Top Light Grey"
    },
    category: "SNEAKERS",
    subCategory: "Luxury Streetwear",
    price: "890,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Och kulrang va oq ranglar uyg'unligidagi premium uslubdagi krossovka.",
      ru: "Премиальные кроссовки в гармоничном сочетании светло-серого и белого цветов.",
      en: "Luxury low-top sneakers in clean light grey and white accents."
    },
    imageSrc: "https://i.pinimg.com/736x/47/9e/f7/479ef701f83d0846ec98ad65afe0476b.jpg"
  },
  {
    id: 15,
    title: {
      uz: "Minimalist Krem Rangli Charm Keda",
      ru: "Минималистичные кожаные кеды кремового цвета",
      en: "Minimalist Cream Leather Sneaker"
    },
    category: "SNEAKERS",
    subCategory: "100% Calfskin",
    price: "520,000 UZS",
    status: "AVAILABLE",
    description: {
      uz: "Oq-krem rangli, minimalist dizayndagi charm keda.",
      ru: "Минималистичные кожаные кеды кремово-белого цвета.",
      en: "Minimalist cream-white leather sneakers made with premium finish."
    },
    imageSrc: "https://i.pinimg.com/736x/76/d8/6b/76d86b19e38e1cedb30666e48326577b.jpg"
  }
];

export default function Brand() {
  const [lang, setLang] = useState('uz');
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const t = uiTranslations[lang];

  const categoryMap = {
    'ALL': t.all,
    'CLOTHES': t.clothes,
    'WATCHES': t.watches,
    'SNEAKERS': t.sneakers,
  };

  const categories = ['ALL', 'CLOTHES', 'WATCHES', 'SNEAKERS'];

  const filteredProducts = activeCategory === 'ALL'
    ? brandProducts
    : brandProducts.filter(item => item.category === activeCategory);

  const parseNumericPrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    return Number(String(priceStr).replace(/[^0-9.]/g, '')) || 0;
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setCustomerName('');
    setCustomerPhone('');
    setIsSuccess(false);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsSuccess(false);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) {
      return;
    }

    setIsSubmitting(true);
    const numericPrice = parseNumericPrice(selectedProduct.price);
    const productTitle = selectedProduct.title[lang] || selectedProduct.title.uz;

    try {
      const orderData = {
        items: [
          {
            productId: String(selectedProduct.id),
            title: productTitle,
            name: productTitle,
            quantity: 1,
            price: numericPrice,
          },
        ],
        totalPrice: numericPrice,
        orderType: "brand",
        customerName: customerName.trim(),
        customerPhone: customerPhone.trim(),
        status: "pending",
      };

      const response = await fetch("http://localhost:3008/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const errData = await response.json();
        alert(t.errorText + (errData.message || "Error submitting order"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert(t.serverError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#FAF7F2', color: '#1C2A20', minHeight: '100vh', fontFamily: 'Inter, sans-serif', paddingBottom: '80px', position: 'relative' }}>
      
      <style>{`
        .lang-btn-b {
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
        .lang-btn-b.active {
          background: #1C2A20;
          color: #FFC72C;
        }
      `}</style>

      <div style={{ padding: '30px 20px 20px 20px', textAlign: 'center', backgroundColor: '#F5F0E6' }}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "6px", maxWidth: "1100px", margin: "0 auto 15px auto" }}>
          {["uz", "ru", "en"].map((item) => (
            <button
              key={item}
              className={`lang-btn-b ${lang === item ? "active" : ""}`}
              onClick={() => setLang(item)}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '3px', color: '#D97706', textTransform: 'uppercase', display: 'inline-block', marginBottom: '10px' }}>
          {t.tagline}
        </span>
        <h1 style={{ fontSize: '38px', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 30px 0', color: '#1C2A20' }}>
          {t.title}
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                backgroundColor: activeCategory === cat ? '#1C2A20' : 'transparent',
                color: activeCategory === cat ? '#FFC72C' : '#1C2A20',
                border: '1.5px solid #1C2A20',
                padding: '8px 24px',
                borderRadius: '30px',
                fontWeight: '800',
                fontSize: '12px',
                cursor: 'pointer',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
              }}
            >
              {categoryMap[cat]}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {filteredProducts.map((item, index) => {
            const isEven = index % 2 === 0;
            const titleText = item.title[lang] || item.title.uz;

            return (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  flexDirection: isEven ? 'row' : 'row-reverse',
                  flexWrap: 'wrap',
                  gap: '30px',
                  alignItems: 'center',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '24px',
                  border: '1px solid #EFEBE4',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
                }}
              >
                <div style={{
                  flex: '1 1 360px',
                  height: '420px',
                  position: 'relative',
                  backgroundColor: '#F7F4EF',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img
                    src={item.imageSrc.trim()}
                    alt={titleText}
                    referrerPolicy="no-referrer"
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '18px' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    backgroundColor: '#1C2A20',
                    color: '#FFC72C',
                    fontSize: '11px',
                    fontWeight: '900',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    letterSpacing: '0.5px'
                  }}>
                    {item.status}
                  </span>
                </div>

                <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#D97706', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {item.subCategory}
                  </span>

                  <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '8px 0 12px 0', color: '#1C2A20' }}>
                    {titleText}
                  </h2>

                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '24px' }}>
                    {item.description[lang] || item.description.uz}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid #F3EFE9' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#9CA3AF', display: 'block', textTransform: 'uppercase', fontWeight: '600' }}>{t.priceLabel}</span>
                      <span style={{ fontSize: '22px', fontWeight: '900', color: '#1C2A20' }}>
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenModal(item)}
                      style={{
                        backgroundColor: '#1C2A20',
                        border: 'none',
                        color: '#FFC72C',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '800',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                      }}
                    >
                      {t.buyBtn}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(28, 42, 32, 0.5)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#FFFDF9',
            borderRadius: '30px',
            maxWidth: '430px',
            width: '100%',
            padding: '36px 28px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            border: '2px solid #FFF',
            textAlign: 'center'
          }}>
            <button
              onClick={handleCloseModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F3EFEA',
                border: 'none',
                color: '#6B7280',
                fontSize: '16px',
                fontWeight: 'bold',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            {isSuccess ? (
              <div style={{ padding: '10px 0' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#ECFDF5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  fontSize: '40px',
                  boxShadow: '0 8px 20px rgba(16, 185, 129, 0.2)'
                }}>
                  🎉
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#1C2A20', margin: '0 0 10px 0' }}>
                  {t.successTitle}
                </h3>
                
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', margin: '0 0 24px 0' }}>
                  {t.successText1} <strong style={{ color: '#1C2A20' }}>{customerName}</strong>! 🛍️<br />
                  <strong style={{ color: '#D97706' }}>
                    {selectedProduct.title[lang] || selectedProduct.title.uz}
                  </strong> {t.successText2}
                </p>

                <button
                  onClick={handleCloseModal}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '16px',
                    border: 'none',
                    backgroundColor: '#1C2A20',
                    color: '#FFC72C',
                    fontWeight: '900',
                    fontSize: '15px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 20px rgba(28, 42, 32, 0.25)'
                  }}
                >
                  {t.successBtn}
                </button>
              </div>
            ) : (
              <div>
                <div style={{
                  fontSize: '38px',
                  marginBottom: '10px',
                  display: 'inline-block',
                  background: '#FEF3C7',
                  padding: '12px',
                  borderRadius: '20px'
                }}>
                  ✨🛍️
                </div>

                <h3 style={{ fontSize: '22px', fontWeight: '900', color: '#1C2A20', margin: '8px 0 4px 0' }}>
                  {t.almostYours}
                </h3>
                <p style={{ fontSize: '13px', color: '#78716C', margin: '0 0 18px 0', fontWeight: '500' }}>
                  <strong style={{ color: '#D97706' }}>
                    {selectedProduct.title[lang] || selectedProduct.title.uz}
                  </strong> {t.enterDetails}
                </p>

                <div style={{
                  backgroundColor: '#F7F3EB',
                  borderRadius: '16px',
                  padding: '12px 18px',
                  marginBottom: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#78716C', textTransform: 'uppercase' }}>{t.totalPayment}</span>
                  <span style={{ fontSize: '20px', fontWeight: '900', color: '#1C2A20' }}>{selectedProduct.price}</span>
                </div>

                <form onSubmit={handleSubmitOrder} style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '800', color: '#444', display: 'block', marginBottom: '6px' }}>
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '14px',
                        border: '1.5px solid #E5E0D8',
                        backgroundColor: '#FFFFFF',
                        color: '#1C2A20',
                        fontSize: '14px',
                        fontWeight: '600',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      required
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: '800', color: '#444', display: 'block', marginBottom: '6px' }}>
                      {t.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      placeholder="+998"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '14px',
                        border: '1.5px solid #E5E0D8',
                        backgroundColor: '#FFFFFF',
                        color: '#1C2A20',
                        fontSize: '14px',
                        fontWeight: '600',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      marginTop: '10px',
                      width: '100%',
                      padding: '16px',
                      borderRadius: '16px',
                      border: 'none',
                      background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
                      color: '#FFFFFF',
                      fontWeight: '900',
                      cursor: 'pointer',
                      fontSize: '15px',
                      letterSpacing: '0.5px',
                      boxShadow: '0 8px 20px rgba(217, 119, 6, 0.3)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    {isSubmitting ? t.submitting : t.confirmBtn}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}