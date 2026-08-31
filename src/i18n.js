 import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  UZ: {
    translation: {
      // Navigatsiya va Umumiy
      nav: {
        brand: "7TEEN CAFE",
        est: "EST. 2026",
        search: "Qidiruv...",
        new: "YANGI",
        uzs: "UZS",
        noImage: "Rasm yo'q",
        itemsCount: "{{count}} ta mahsulot"
      },

      // Menu Sahifasi
      menu: {
        categories: {
          food: "Taomlar",
          drinks: "Ichimliklar"
        },
        subCategories: {
          all: "Barchasi",
          breakfast: "Nonushtalar",
          salads: "Salatlar",
          authorDishes: "Mualliflik taomlari",
          sidesCombo: "Garnirlar & Kombo",
          coffee: "Kofe",
          tea: "Choy",
          croissants: "Kruassan va pishiriqlar",
          desserts: "Shirinliklar"
        }
      },

      // Home Sahifasi
      home: {
        statusOpen: "Hozir kafemiz ochiq (8:00 - 22:00)",
        statusClosed: "Kafemiz hozir yopiq (Ertaga 8:00 da ochiladi)",
        heroTitle1: "Eski qoidalarni unuting.",
        heroTitle2: "7TEEN — Atmosfera & Madaniyat.",
        heroSubtitle: "Toshkentdagi birinchi kontseptual konteyner-kafe va Gen-Z ruhiyati. Har bir qultumda — samimiyat, shinamlik va ilhom.",
        discoverMenu: "☕️ Menyuni Kashf Etish",
        address: "📍 Yusuf Xos Hojib, 72",
        vibeSectionTag: "INTERAKTIV SELEKTOR",
        vibeSectionHeading: "Bugun qanday kayfiyatdasiz?",
        vibes: {
          energy: "⚡️ Energetika & Quvvat",
          cozy: "🧘‍♂️ Shinamlik & Ish Rejimi",
          sweet: "🍓 Shirin Kayfiyat"
        },
        vibeDetails: {
          energyTitle: "Double Espresso & Cold Brew Mix 🚀",
          energyDesc: "Kunga tezkor start berish va drayv olishni xohlovchilar uchun ideal tanlov.",
          cozyTitle: "Velvet Flat White & Yutib Yuborgudek San'at ☕️",
          cozyDesc: "Noutbukda ishlash, kitob o'qish yoki samimiy suhbatlar uchun yumshoq ta'm.",
          sweetTitle: "Iced Matcha Latte & San-Sebastian Cheesecake 🍰",
          sweetDesc: "O'zingizga va do'stlaringizga kichik bayram ulashish va kayfiyatni ko'tarish uchun."
        },
        ecosystemTag: "7TEEN EKOSISTEMASI",
        ecosystemHeading: "Faqat kafe emas — Bu yangi brend madaniyati",
        concepts: {
          containerTitle: "Container Cafe Concept",
          containerDesc: "Zamonaviy mini-konteyner arxitekturasi va shinam ochiq hudud. Shahar o'rtasida o'zgarib turadigan eng estetik burchak.",
          expansionTitle: "Tashkent City Expansion",
          expansionDesc: "Tez orada loyihamiz Toshkentning eng nufuzli biznes markazlariga va Tashkent City hududiga kengayadi.",
          clothesTitle: "7TEEN Clothes Line",
          clothesDesc: "Tez kunda kafe brendining rasmiy va minimalist streetwear kiyimlar to'plami namoyish etiladi."
        },
        comboTag: "MINI KALKULYATOR",
        comboHeading: "O'z Ideal Setingizni Tanlang (-10% Chegirma)",
        selectDrink: "Ichimlikni tanlang:",
        selectDessert: "Shirinlikni tanlang:",
        comboPrice: "Combo Narxi:",
        orderSet: "🛒 Shu Setni Buyurtma Qilish"
      },

      // Cart Sahifasi
      cart: {
        orderTicket: "ORDER TICKET",
        yourOrder: "Sizning Buyurtmangiz",
        emptyTitle: "Stolingiz hali bo'sh...",
        emptySubtitle: "7TEEN atmosferasidan bahramand bo'lish uchun yangi damlangan kofe, shirinliklar yoki issiq mualliflik taomlaridan tanlang.",
        openMenu: "MENYUNI OCHISH",
        freeDeliveryQualified: "🎉 Bepul yetkazib berish huquqiga ega bo'ldingiz!",
        freeDeliveryRemaining: "Yana {{sum}} so'mlik buyurtma bering",
        total: "JAMI",
        checkNo: "CHECK #2026-ORDER",
        products: "Mahsulotlar:",
        delivery: "Yetkazib berish:",
        free: "BEPUL",
        serviceFee: "Xizmat (0%):",
        totalToPay: "TO'LANADIGAN SUMMA",
        checkoutBtn: "TASDIQLASH VA TO'LASH ⚡️",
        successAlert: "Buyurtmangiz qabul qilindi va Baristaga yuborildi! ☕️",
        errorAlert: "Xatolik: Buyurtma yuborilmadi",
        serverError: "Backend serverga bog'lanib bo'lmadi!"
      },

      // Checkout Sahifasi
      checkout: {
        title: "Buyurtmani rasmiylashtirish",
        fullName: "To'liq ismingiz",
        fullNamePlaceholder: "Ali Valiyev",
        phone: "Telefon raqamingiz",
        phonePlaceholder: "+998 90 123 45 67",
        address: "Yetkazib berish manzili",
        addressPlaceholder: "Toshkent sh., Chilonzor tumani...",
        paymentMethod: "To'lov turi",
        cash: "Naqd pul orqali",
        card: "Karta orqali (Click / Payme)",
        comment: "Qo'shimcha izoh (ixtiyoriy)",
        commentPlaceholder: "Kuryer uchun eslatma...",
        submitting: "Yuborilmoqda...",
        confirmBtn: "Buyurtmani tasdiqlash",
        successTitle: "Rahmat! Buyurtmangiz qabul qilindi. 🎉",
        successSubtitle: "Tez orada operatorlarimiz siz bilan bog'lanishadi.",
        backToHome: "Bosh sahifaga qaytish",
        submitError: "Buyurtmani yuborishda xatolik yuz berdi!"
      },

      // Login Sahifasi
      login: {
        badge: "✦ Welcome Back to 7teen",
        title: "Tizimga kirish",
        subtitle: "Hisobingizga kirish uchun ma'lumotlaringizni kiriting",
        phoneLabel: "Telefon raqam",
        phoneRequired: "Iltimos, telefon raqamingizni kiriting",
        passwordLabel: "Parol",
        passwordRequired: "Iltimos, parolingizni kiriting",
        submitBtn: "Kirish ✨",
        noAccount: "Hisobingiz yo'qmi? ",
        createOne: "Ro'yxatdan o'tish"
      },

      // Registr (Register) Sahifasi
      register: {
        badge: "✦ Welcome to 7teen",
        title: "Hisob yaratish",
        subtitle: "Maxsus Imtiyozlar va Takliflarga Ega Bo'lish Uchun Qo'shiling",
        nameLabel: "Ism",
        namePlaceholder: "Ismingiz",
        nameRequired: "Iltimos, ismingizni kiriting",
        phoneLabel: "Telefon raqam",
        phonePlaceholder: "+998",
        phoneRequired: "Iltimos, telefon raqamingizni kiriting",
        passwordLabel: "Parol",
        passwordPlaceholder: "••••••••",
        passwordRequired: "Iltimos, parolingizni kiriting",
        submitBtn: "Ro'yxatdan o'tish ✨",
        hasAccount: "Allaqachon hisobingiz bormi? ",
        signIn: "Kirish",
        successAlert: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
        errorAlert: "Ro'yxatdan o'tishda xatolik yuz berdi."
      },

      // Orders Sahifasi (Admin / Mijoz buyurtmalari)
      orders: {
        adminTag: "☕️ 7TEEN CAFE ADMIN",
        liveOrders: "LIVE ORDERS",
        title: "Mijozlar Buyurtmalari 📋",
        refreshBtn: "🔄 Yangilash ({{count}})",
        loading: "Buyurtmalar yuklanmoqda...",
        emptyTitle: "Hozircha buyurtmalar yo'q",
        emptyDesc: "Yangi buyurtmalar tushishi bilan ushbu ro'yxatda paydo bo'ladi.",
        ticket: "#TICKET-{{id}}",
        today: "Bugun",
        guest: "Mehmon (Guest)",
        unknown: "Noma'lum",
        orderDetails: "BUYURTMA TAFSILOTLARI",
        qtyPrice: "MIQDOR / NARX",
        noDetails: "Mahsulot tafsilotlari mavjud emas",
        type: "Turi:",
        totalPrice: "Jami Summa:",
        sum: "so'm",
        fetchError: "Buyurtmalarni yuklashda xatolik:"
      },

      // Barista Dashboard Sahifasi
      barista: {
        headerBadge: "LIVE BARISTA CONTROL CENTER",
        title: "7TEEN BARISTA DASHBOARD",
        kitchenStatus: "KITCHEN DISPLAY SYSTEM",
        activeOrders: "FAOL BUYURTMALAR",
        totalOrders: "JAMI",
        pending: "KUTILMOQDA",
        preparing: "TAYYORLANMOQDA",
        ready: "TAYYOR",
        completed: "TOPSHIRILDI",
        noOrders: "Hozircha faol buyurtmalar yo'q...",
        table: "STOL #",
        items: "MAHSULOTLAR",
        markPreparing: "⚡️ Tayyorlashni boshlash",
        markReady: "✅ Tayyor bo'ldi",
        markCompleted: "🎉 Topshirildi",
        cancelled: "🚫 Bekor qilindi",
        newOrderReceived: "Yangi buyurtma kelib tushdi! 🔔"
      }
    }
  },

  RU: {
    translation: {
      nav: {
        brand: "7TEEN CAFE",
        est: "EST. 2026",
        search: "Поиск...",
        new: "НОВОЕ",
        uzs: "UZS",
        noImage: "Нет фото",
        itemsCount: "{{count}} товаров"
      },
      menu: {
        categories: {
          food: "Еда",
          drinks: "Напитки"
        },
        subCategories: {
          all: "Все",
          breakfast: "Завтраки",
          salads: "Салаты",
          authorDishes: "Авторские блюда",
          sidesCombo: "Гарниры & Комбо",
          coffee: "Кофе",
          tea: "Чай",
          croissants: "Круассаны и выпечка",
          desserts: "Десерты"
        }
      },
      home: {
        statusOpen: "Сейчас кафе открыто (8:00 - 22:00)",
        statusClosed: "Кафе сейчас закрыто (Откроется завтра в 8:00)",
        heroTitle1: "Забудьте старые правила.",
        heroTitle2: "7TEEN — Атмосфера & Культура.",
        heroSubtitle: "Первое концептуальное контейнер-кафе в Ташкенте с духом Gen-Z. В каждом глотке — искренность, уют и вдохновение.",
        discoverMenu: "☕️ Исследовать Меню",
        address: "📍 Юсуф Хос Хожиб, 72",
        vibeSectionTag: "ИНТЕРАКТИВНЫЙ СЕЛЕКТОР",
        vibeSectionHeading: "Какое у вас сегодня настроение?",
        vibes: {
          energy: "⚡️ Энергия & Заряд",
          cozy: "🧘‍♂️ Уют & Рабочий режим",
          sweet: "🍓 Сладкое настроение"
        },
        vibeDetails: {
          energyTitle: "Double Espresso & Cold Brew Mix 🚀",
          energyDesc: "Идеальный выбор для тех, кто хочет быстро начать день и получить драйв.",
          cozyTitle: "Velvet Flat White & Искусство в чашке ☕️",
          cozyDesc: "Мягкий вкус для работы за ноутбуком, чтения книг или душевных бесед.",
          sweetTitle: "Iced Matcha Latte & San-Sebastian Cheesecake 🍰",
          sweetDesc: "Чтобы устроить маленький праздник себе и друзьям и поднять настроение."
        },
        ecosystemTag: "ЭКОСИСТЕМА 7TEEN",
        ecosystemHeading: "Не просто кафе — это культура нового бренда",
        concepts: {
          containerTitle: "Container Cafe Concept",
          containerDesc: "Современная архитектура мини-контейнера и уютная открытая зона. Самый эстетичный уголок города.",
          expansionTitle: "Tashkent City Expansion",
          expansionDesc: "Скоро наш проект расширится в самые престижные бизнес-центры и зону Tashkent City.",
          clothesTitle: "7TEEN Clothes Line",
          clothesDesc: "Скоро будет представлена официальная коллекция минималистичной streetwear одежды бренда."
        },
        comboTag: "МИНИ-КАЛЬКУЛЯТОР",
        comboHeading: "Соберите свой идеальный сет (Скидка -10%)",
        selectDrink: "Выберите напиток:",
        selectDessert: "Выберите десерт:",
        comboPrice: "Цена комбо:",
        orderSet: "🛒 Заказать этот сет"
      },
      cart: {
        orderTicket: "ORDER TICKET",
        yourOrder: "Ваш заказ",
        emptyTitle: "Ваш стол пока пуст...",
        emptySubtitle: "Чтобы насладиться атмосферой 7TEEN, выберите свежесваренный кофе, десерты или горячие авторские блюда.",
        openMenu: "ОТКРЫТЬ МЕНЮ",
        freeDeliveryQualified: "🎉 Вы получили право на бесплатную доставку!",
        freeDeliveryRemaining: "Закажите еще на {{sum}} сумов",
        total: "ИТОГО",
        checkNo: "ЧЕК #2026-ORDER",
        products: "Товары:",
        delivery: "Доставка:",
        free: "БЕСПЛАТНО",
        serviceFee: "Обслуживание (0%):",
        totalToPay: "СУММА К ОПЛАТЕ",
        checkoutBtn: "ПОДТВЕРДИТЬ И ОПЛАТИТЬ ⚡️",
        successAlert: "Ваш заказ принят и отправлен баристе! ☕️",
        errorAlert: "Ошибка: Заказ не отправлен",
        serverError: "Не удалось связаться с бэкенд-сервером!"
      },
      checkout: {
        title: "Оформление заказа",
        fullName: "Ваше полное имя",
        fullNamePlaceholder: "Али Валиев",
        phone: "Ваш номер телефона",
        phonePlaceholder: "+998 90 123 45 67",
        address: "Адрес доставки",
        addressPlaceholder: "г. Ташкент, Чиланзарский район...",
        paymentMethod: "Способ оплаты",
        cash: "Наличными",
        card: "Картой (Click / Payme)",
        comment: "Дополнительный комментарий (необязательно)",
        commentPlaceholder: "Заметка для курьера...",
        submitting: "Отправка...",
        confirmBtn: "Подтвердить заказ",
        successTitle: "Спасибо! Ваш заказ принят. 🎉",
        successSubtitle: "Наши операторы свяжутся с вами в ближайшее время.",
        backToHome: "Вернуться на главную",
        submitError: "Произошла ошибка при отправке заказа!"
      },
      login: {
        badge: "✦ Welcome Back to 7teen",
        title: "Вход в систему",
        subtitle: "Введите свои данные для доступа к аккаунту",
        phoneLabel: "Номер телефона",
        phoneRequired: "Пожалуйста, введите номер телефона",
        passwordLabel: "Пароль",
        passwordRequired: "Пожалуйста, введите пароль",
        submitBtn: "Войти ✨",
        noAccount: "Нет аккаунта? ",
        createOne: "Создать аккаунт"
      },
      register: {
        badge: "✦ Welcome to 7teen",
        title: "Создать аккаунт",
        subtitle: "Присоединяйтесь, чтобы получить эксклюзивные скидки и бонусы",
        nameLabel: "Имя",
        namePlaceholder: "Ваше имя",
        nameRequired: "Пожалуйста, введите ваше имя",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+998",
        phoneRequired: "Пожалуйста, введите номер телефона",
        passwordLabel: "Пароль",
        passwordPlaceholder: "••••••••",
        passwordRequired: "Пожалуйста, введите пароль",
        submitBtn: "Зарегистрироваться ✨",
        hasAccount: "Уже есть аккаунт? ",
        signIn: "Войти",
        successAlert: "Вы успешно зарегистрировались!",
        errorAlert: "Произошла ошибка при регистрации."
      },
      orders: {
        adminTag: "☕️ 7TEEN CAFE ADMIN",
        liveOrders: "LIVE ORDERS",
        title: "Заказы клиентов 📋",
        refreshBtn: "🔄 Обновить ({{count}})",
        loading: "Загрузка заказов...",
        emptyTitle: "Пока нет заказов",
        emptyDesc: "Как только поступят новые заказы, они появятся в этом списке.",
        ticket: "#TICKET-{{id}}",
        today: "Сегодня",
        guest: "Гость (Guest)",
        unknown: "Неизвестно",
        orderDetails: "ДЕТАЛИ ЗАКАЗА",
        qtyPrice: "КОЛ-ВО / ЦЕНА",
        noDetails: "Детали товара недоступны",
        type: "Тип:",
        totalPrice: "Общая сумма:",
        sum: "сум",
        fetchError: "Ошибка при загрузке заказов:"
      },
      barista: {
        headerBadge: "LIVE BARISTA CONTROL CENTER",
        title: "7TEEN BARISTA DASHBOARD",
        kitchenStatus: "KITCHEN DISPLAY SYSTEM",
        activeOrders: "АКТИВНЫЕ ЗАКАЗЫ",
        totalOrders: "ВСЕГО",
        pending: "В ОЖИДАНИИ",
        preparing: "ГОТОВИТСЯ",
        ready: "ГОТОВО",
        completed: "ВЫПОЛНЕНО",
        noOrders: "Пока нет активных заказов...",
        table: "СТОЛ #",
        items: "ТОВАРЫ",
        markPreparing: "⚡️ Начать готовку",
        markReady: "✅ Готово",
        markCompleted: "🎉 Выполнено",
        cancelled: "🚫 Отменено",
        newOrderReceived: "Поступил новый заказ! 🔔"
      }
    }
  },

  EN: {
    translation: {
      nav: {
        brand: "7TEEN CAFE",
        est: "EST. 2026",
        search: "Search...",
        new: "NEW",
        uzs: "UZS",
        noImage: "No image",
        itemsCount: "{{count}} items"
      },
      menu: {
        categories: {
          food: "Food",
          drinks: "Drinks"
        },
        subCategories: {
          all: "All",
          breakfast: "Breakfast",
          salads: "Salads",
          authorDishes: "Signature Dishes",
          sidesCombo: "Sides & Combos",
          coffee: "Coffee",
          tea: "Tea",
          croissants: "Croissants & Bakery",
          desserts: "Desserts"
        }
      },
      home: {
        statusOpen: "We are open now (8:00 - 22:00)",
        statusClosed: "We are closed now (Opens tomorrow at 8:00)",
        heroTitle1: "Forget the old rules.",
        heroTitle2: "7TEEN — Vibe & Culture.",
        heroSubtitle: "Tashkent's first conceptual container cafe with Gen-Z spirit. Sincerity, comfort, and inspiration in every sip.",
        discoverMenu: "☕️ Discover Menu",
        address: "📍 72 Yusuf Khos Hojib Str.",
        vibeSectionTag: "INTERACTIVE SELECTOR",
        vibeSectionHeading: "How are you feeling today?",
        vibes: {
          energy: "⚡️ Energy & Power",
          cozy: "🧘‍♂️ Cozy & Focus Mode",
          sweet: "🍓 Sweet Mood"
        },
        vibeDetails: {
          energyTitle: "Double Espresso & Cold Brew Mix 🚀",
          energyDesc: "Ideal choice for those who want a quick boost and high energy to start the day.",
          cozyTitle: "Velvet Flat White & Art in a Cup ☕️",
          cozyDesc: "Smooth taste for working on a laptop, reading books, or quiet conversations.",
          sweetTitle: "Iced Matcha Latte & San-Sebastian Cheesecake 🍰",
          sweetDesc: "To give yourself and friends a little treat and uplift your mood."
        },
        ecosystemTag: "7TEEN ECOSYSTEM",
        ecosystemHeading: "Not just a cafe — A new brand culture",
        concepts: {
          containerTitle: "Container Cafe Concept",
          containerDesc: "Modern mini-container architecture with a cozy outdoor space. The most aesthetic spot in the city center.",
          expansionTitle: "Tashkent City Expansion",
          expansionDesc: "Our project will soon expand into Tashkent's top business centers and Tashkent City area.",
          clothesTitle: "7TEEN Clothes Line",
          clothesDesc: "Official minimalist streetwear collection of the cafe brand coming soon."
        },
        comboTag: "MINI CALCULATOR",
        comboHeading: "Build Your Ideal Set (-10% Discount)",
        selectDrink: "Select drink:",
        selectDessert: "Select dessert:",
        comboPrice: "Combo Price:",
        orderSet: "🛒 Order This Set"
      },
      cart: {
        orderTicket: "ORDER TICKET",
        yourOrder: "Your Order",
        emptyTitle: "Your table is empty...",
        emptySubtitle: "To enjoy the 7TEEN vibe, select freshly brewed coffee, desserts, or hot signature dishes.",
        openMenu: "OPEN MENU",
        freeDeliveryQualified: "🎉 You are eligible for Free Delivery!",
        freeDeliveryRemaining: "Order {{sum}} UZS more to get free delivery",
        total: "TOTAL",
        checkNo: "CHECK #2026-ORDER",
        products: "Items:",
        delivery: "Delivery:",
        free: "FREE",
        serviceFee: "Service (0%):",
        totalToPay: "TOTAL TO PAY",
        checkoutBtn: "CONFIRM AND PAY ⚡️",
        successAlert: "Your order has been accepted and sent to the Barista! ☕️",
        errorAlert: "Error: Order was not sent",
        serverError: "Could not connect to backend server!"
      },
      checkout: {
        title: "Checkout",
        fullName: "Full Name",
        fullNamePlaceholder: "John Doe",
        phone: "Phone Number",
        phonePlaceholder: "+998 90 123 45 67",
        address: "Delivery Address",
        addressPlaceholder: "Tashkent, Chilanzar district...",
        paymentMethod: "Payment Method",
        cash: "Cash on delivery",
        card: "Card (Click / Payme)",
        comment: "Additional Comment (Optional)",
        commentPlaceholder: "Note for courier...",
        submitting: "Submitting...",
        confirmBtn: "Confirm Order",
        successTitle: "Thank you! Your order has been accepted. 🎉",
        successSubtitle: "Our team will contact you shortly.",
        backToHome: "Back to Home",
        submitError: "An error occurred while submitting the order!"
      },
      login: {
        badge: "✦ Welcome Back to 7teen",
        title: "Sign In",
        subtitle: "Enter your credentials to access your account",
        phoneLabel: "Phone Number",
        phoneRequired: "Please enter your phone number",
        passwordLabel: "Password",
        passwordRequired: "Please enter your password",
        submitBtn: "Sign In ✨",
        noAccount: "Don't have an account? ",
        createOne: "Create One"
      },
      register: {
        badge: "✦ Welcome to 7teen",
        title: "Create Account",
        subtitle: "Join us to unlock exclusive perks and special offers",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        nameRequired: "Please enter your name",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+998",
        phoneRequired: "Please enter your phone number",
        passwordLabel: "Password",
        passwordPlaceholder: "••••••••",
        passwordRequired: "Please enter your password",
        submitBtn: "Sign Up ✨",
        hasAccount: "Already have an account? ",
        signIn: "Sign In",
        successAlert: "Successfully registered!",
        errorAlert: "An error occurred during registration."
      },
      orders: {
        adminTag: "☕️ 7TEEN CAFE ADMIN",
        liveOrders: "LIVE ORDERS",
        title: "Customer Orders 📋",
        refreshBtn: "🔄 Refresh ({{count}})",
        loading: "Loading orders...",
        emptyTitle: "No orders yet",
        emptyDesc: "New orders will appear in this list as soon as they arrive.",
        ticket: "#TICKET-{{id}}",
        today: "Today",
        guest: "Guest",
        unknown: "Unknown",
        orderDetails: "ORDER DETAILS",
        qtyPrice: "QTY / PRICE",
        noDetails: "Product details unavailable",
        type: "Type:",
        totalPrice: "Total Price:",
        sum: "UZS",
        fetchError: "Error fetching orders:"
      },
      barista: {
        headerBadge: "LIVE BARISTA CONTROL CENTER",
        title: "7TEEN BARISTA DASHBOARD",
        kitchenStatus: "KITCHEN DISPLAY SYSTEM",
        activeOrders: "ACTIVE ORDERS",
        totalOrders: "TOTAL",
        pending: "PENDING",
        preparing: "PREPARING",
        ready: "READY",
        completed: "COMPLETED",
        noOrders: "No active orders right now...",
        table: "TABLE #",
        items: "ITEMS",
        markPreparing: "⚡️ Start Preparing",
        markReady: "✅ Ready",
        markCompleted: "🎉 Complete",
        cancelled: "🚫 Cancelled",
        newOrderReceived: "New order received! 🔔"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('appLang') || 'UZ',
    fallbackLng: 'UZ',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;