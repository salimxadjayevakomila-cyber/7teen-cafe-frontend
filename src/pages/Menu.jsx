 import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const translations = {
  uz: {
    searchPlaceholder: "Qidiruv...",
    itemsUnit: "ta mahsulot",
    noImage: "Rasm yo'q",
    currency: "UZS",
    categories: {
      food: "Taomlar",
      drinks: "Ichimliklar"
    },
    subCategories: {
      all: "Barchasi",
      breakfast: "Nonushtalar",
      salads: "Salatlar",
      authorDishes: "Mualliflik taomlari",
      combos: "Garnirlar & Kombo",
      coffee: "Kofe",
      tea: "Choy",
      croissants: "Kruassanlar va pishiriqlar",
      desserts: "Shirinliklar"
    }
  },
  ru: {
    searchPlaceholder: "Поиск...",
    itemsUnit: "товаров",
    noImage: "Нет фото",
    currency: "сум",
    categories: {
      food: "Еда",
      drinks: "Напитки"
    },
    subCategories: {
      all: "Все",
      breakfast: "Завтраки",
      salads: "Салаты",
      authorDishes: "Авторские блюда",
      combos: "Гарниры & Комбо",
      coffee: "Кофе",
      tea: "Чай",
      croissants: "Круассаны и выпечка",
      desserts: "Десерты"
    }
  },
  en: {
    searchPlaceholder: "Search...",
    itemsUnit: "items",
    noImage: "No image",
    currency: "UZS",
    categories: {
      food: "Food",
      drinks: "Drinks"
    },
    subCategories: {
      all: "All",
      breakfast: "Breakfasts",
      salads: "Salads",
      authorDishes: "Signature Dishes",
      combos: "Sides & Combos",
      coffee: "Coffee",
      tea: "Tea",
      croissants: "Croissants & Pastries",
      desserts: "Desserts"
    }
  }
};

const menuData = {
  categories: [
    { key: 'food', labelKey: 'food' },
    { key: 'drinks', labelKey: 'drinks' }
  ],
  subCategories: [
    { key: 'all', labelKey: 'all' },
    { key: 'breakfast', labelKey: 'breakfast' },
    { key: 'salads', labelKey: 'salads' },
    { key: 'authorDishes', labelKey: 'authorDishes' },
    { key: 'combos', labelKey: 'combos' },
    { key: 'coffee', labelKey: 'coffee' },
    { key: 'tea', labelKey: 'tea' },
    { key: 'croissants', labelKey: 'croissants' },
    { key: 'desserts', labelKey: 'desserts' }
  ],
  menuItems: [
    // --- Nonushtalar ---
    { 
      id: 1, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: '7teen Nonushta', ru: 'Завтрак 7teen', en: '7teen Breakfast' }, 
      description: { uz: '2 ta tuxumli qovurdoq, qo\'ziqorin, sosiska, miks-salat, kachok ikrasi, sariyog\', mini-kruassan, Nutella, tartin', ru: 'глазунья из 2 яиц, грибы, сосиски, микс-салат, кабачковая икра, масло, мини-круассан, Nutella, тартин', en: '2 fried eggs, mushrooms, sausages, mix salad, zucchini caviar, butter, mini croissant, Nutella, tartine' }, 
      oldPrice: '90 000', price: '55 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/22/01/90/22019060de1112b582aebab0bc0d7a81.jpg' 
    },
    { 
      id: 2, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Polvon nonushta', ru: 'Полвон завтрак', en: 'Polvon Breakfast' }, 
      description: { uz: '2 ta tuxumli qovurdoq, tovuqli kolbasa, heshbraun, kurka go\'shti, gril pomidor, tartin', ru: 'глазунья из 2 яиц, куриная колбаска, хэшбраун, индейка, томат гриль, тартин', en: '2 fried eggs, chicken sausage, hashbrown, turkey, grilled tomato, tartine' }, 
      oldPrice: '90 000', price: '55 000', isNew: true, imageSrc: 'https://i.pinimg.com/736x/54/82/15/548215942a62591aa68a3df93f3bf9f8.jpg' 
    },
    { 
      id: 3, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Kolbasali tuxum qovurdoq', ru: 'Глазунья с колбасой', en: 'Fried Eggs with Sausage' }, 
      description: { uz: '2 ta tuxumli qovurdoq, doktorskaya kolbasa, miks-salat, kachok ikrasi, tartin', ru: 'глазунья из 2 яиц, докторская колбаса, микс-салат, кабачковая икра, тартин', en: '2 fried eggs, bologna sausage, mix salad, zucchini caviar, tartine' }, 
      oldPrice: '65 000', price: '40 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/79/b4/e8/79b4e86b5601785d0a94b77d09cb16e5.jpg' 
    },
    { 
      id: 4, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Sosiskali tuxum qovurdoq', ru: 'Глазунья с сосиской', en: 'Fried Eggs with Small Sausage' }, 
      description: { uz: '2 ta tuxumli qovurdoq, sosiskalar, miks-salat, kachok ikrasi, tartin', ru: 'глазунья из 2 яиц, сосиски, микс-салат, кабачковая икра, тартин', en: '2 fried eggs, sausages, mix salad, zucchini caviar, tartine' }, 
      oldPrice: '65 000', price: '40 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/db/2d/26/db2d26599b5fe571add299b084a4b8e8.jpg' 
    },
    { 
      id: 5, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Nutella bilan quymoqlar', ru: 'Блинчики с Nutella', en: 'Pancakes with Nutella' }, 
      description: { uz: 'rezavorlar va djem bilan', ru: 'с ягодами и джемом', en: 'with berries and jam' }, 
      oldPrice: '35 000', price: '25 000', isNew: false, imageSrc: 'https://img.ananinja.com/media/ninja-catalog-42/restaurants/dekk54cnuhfi5vfb47j83lzolrel/Untitled%20design%20-%202024-04-11T105950.531.jpg?w=1080&q=75' 
    },
    { 
      id: 6, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Sgushchonka bilan quymoqlar', ru: 'Блинчики со сгущёнкой', en: 'Pancakes with Condensed Milk' }, 
      description: { uz: 'rezavorlar va djem bilan', ru: 'с ягодами и джемом', en: 'with berries and jam' }, 
      oldPrice: '35 000', price: '25 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/f3/89/6f/f3896f57a2059d563e0b65e0c1ced8c6.jpg' 
    },
    { 
      id: 7, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Syrniklar', ru: 'Сырники', en: 'Syrniki (Cottage Cheese Pancakes)' }, 
      description: { uz: 'rezavorlar, smetana va djem bilan', ru: 'с ягодами, сметаной и джемом', en: 'with berries, sour cream and jam' }, 
      oldPrice: '60 000', price: '38 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/58/ef/89/58ef89f4b8f5bc622245fd2f12425faf.jpg' 
    },
    { 
      id: 8, categoryKey: 'food', subCategoryKey: 'breakfast', 
      name: { uz: 'Sulli bo\'tqa (Ovsyanqa)', ru: 'Овсяная каша', en: 'Oatmeal' }, 
      description: { uz: 'rezavorlar bilan', ru: 'с ягодами', en: 'with berries' }, 
      oldPrice: '40 000', price: '27 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/c1/c9/13/c1c913bd849fd61b6ecaaa4c24c6545b.jpg' 
    },
   
    // --- Salatlar ---
    { 
      id: 9, categoryKey: 'food', subCategoryKey: 'salads', 
      name: { uz: 'Burrata bilan salat', ru: 'Салат с бурратой', en: 'Burrata Salad' }, 
      description: { uz: 'pomidor, rukkola, pesto sousi va krem-balzamik', ru: 'томаты, руккола, соус песто и крем-бальзамик', en: 'tomatoes, arugula, pesto sauce and balsamic cream' }, 
      oldPrice: '80 000', price: '48 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/43/46/40/434640524d47a37610d02a63ced8b0b9.jpg' 
    },
    { 
      id: 10, categoryKey: 'food', subCategoryKey: 'salads', 
      name: { uz: 'Grekcha salat', ru: 'Греческий салат', en: 'Greek Salad' }, 
      description: { uz: 'pomidor, bodring, bulg\'or qalampiri, zaytun, fetaki pishlog\'i, zaytun moyi va krem-balzamik', ru: 'томаты, огурцы, болгарский перец, оливки, маслины, сыр фетаки, оливковое масло и крем-бальзамик', en: 'tomatoes, cucumbers, bell pepper, olives, fetaki cheese, olive oil and balsamic cream' }, 
      oldPrice: '70 000', price: '42 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/74/93/1e/74931e2af7aebb027a38f1349b6c170c.jpg' 
    },
    { 
      id: 11, categoryKey: 'food', subCategoryKey: 'salads', 
      name: { uz: 'Tovuqli «Cezar» salati', ru: 'Салат «Цезарь» с курицей', en: 'Chicken Caesar Salad' }, 
      description: { uz: 'salat barglari, cherri pomidorlari, bedana tuxumi, parmezan pishlog\'i va «Cezar» sousi', ru: 'листья салата, томаты черри, перепелиные яйца, сыр пармезан и соус «Цезарь»', en: 'lettuce leaves, cherry tomatoes, quail eggs, parmesan cheese and Caesar sauce' }, 
      oldPrice: '70 000', price: '42 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/0b/51/12/0b511237ec2f13e2c1794da571add9c2.jpg' 
    },

    // --- Mualliflik taomlari ---
    { 
      id: 12, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Klassik hot-dog', ru: 'Хот-дог классический', en: 'Classic Hot Dog' }, 
      description: { uz: 'achitqili bulochka, 2 ta EKO-sosiska, kachok ikrasi, pomidor, tuzlangan bodring, aysberg, pishloqli sous', ru: 'булочка на закваске, 2 ЭКО-сосиски, кабачковая икра, томаты, маринованные огурцы, айсберг, сырный соус', en: 'sourdough bun, 2 ECO sausages, zucchini caviar, tomatoes, pickles, iceberg, cheese sauce' }, 
      oldPrice: '45 000', price: '20 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/a9/72/02/a97202cfba129aedad366dae8e4b109f.jpg' 
    },
    { 
      id: 13, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: '«Sovet» hot-dogi', ru: 'Хот-дог «Советский»', en: 'Soviet Style Hot Dog' }, 
      description: { uz: 'achitqili bulochka, 2 ta EKO-sosiska, uycha kachok ikrasi, pomidor, tuzlangan bodring, koreyscha sabzi', ru: 'булочка на закваске, 2 ЭКО-сосиски, домашняя кабачковая икра, томаты, маринованные огурцы, морковь по-корейски', en: 'sourdough bun, 2 ECO sausages, homemade zucchini caviar, tomatoes, pickles, Korean carrot' }, 
      oldPrice: '45 000', price: '23 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/0e/7a/12/0e7a1236714a228c2fe30a4f6c39db2a.jpg' 
    },
    { 
      id: 14, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: '7teen Hot-dog', ru: '7teen Хот-дог', en: '7teen Hot Dog' }, 
      description: { uz: '7teen Cafe mualliflik hot-dogi — bulochka, sosiskalar, mualliflik sousi va sabzavotlar', ru: 'фирменный хот-дог 7teen Cafe — булочка, сосиски, фирменный соус и овощи', en: 'signature 7teen Cafe hot dog — bun, sausages, signature sauce and vegetables' }, 
      oldPrice: '60 000', price: '27 000', isNew: true, imageSrc: 'https://i.pinimg.com/1200x/02/30/3b/02303b33085f5453c10032601721bc8e.jpg' 
    },
    { 
      id: 15, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Glutensiz go\'shtli sendvich', ru: 'Безглютеновый сэндвич с мясом', en: 'Gluten-free Beef Sandwich' }, 
      description: { uz: 'glutensiz non, mualliflik go\'shti, brend sous, quritilgan pomidor, tuzlangan bodring', ru: 'безглютеновый хлеб, фирменное мясо, авторский соус, вяленые томаты, маринованные огурцы', en: 'gluten-free bread, signature meat, author sauce, sun-dried tomatoes, pickles' }, 
      oldPrice: '90 000', price: '48 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/c1/05/98/c105988eda9514e66dd27904fce4b553.jpg' 
    },
    { 
      id: 16, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Glutensiz kurkali sendvich', ru: 'Безглютеновый сэндвич с индейкой', en: 'Gluten-free Turkey Sandwich' }, 
      description: { uz: 'glutensiz non, kurka go\'shti, mualliflik sous, aysberg, pishloq', ru: 'безглютеновый хлеб, индейка, авторский соус, айсберг, сыр', en: 'gluten-free bread, turkey, author sauce, iceberg, cheese' }, 
      oldPrice: '70 000', price: '38 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/71/85/68/718568c921e8cf019c3cee3ead76bddb.jpg' 
    },
    { 
      id: 17, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Lososli kruassan', ru: 'Круассан с лососем', en: 'Salmon Croissant' }, 
      description: { uz: 'kam tuzlangan losos, krem-chiz, miks-salat, qaynatilgan tuxum, zaytun', ru: 'слабосолёный лосось, крем-чиз, микс-салат, отварное яйцо, оливки', en: 'slightly salted salmon, cream cheese, mix salad, boiled egg, olives' }, 
      oldPrice: '90 000', price: '48 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/a9/53/43/a95343fce7304f575b1f224ada37d8ff.jpg' 
    },
    { 
      id: 18, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Chiken Kranch Burger', ru: 'Чикен Кранч Бургер', en: 'Chicken Crunch Burger' }, 
      description: { uz: '2 ta panyrovkadagi tovuq kotleti, pomidor, salat bargi, chedder pishlog\'i, brend sous', ru: '2 куриные котлеты в панировке, томаты, салат, сыр чеддер, фирменный соус', en: '2 breaded chicken patties, tomatoes, lettuce, cheddar cheese, signature sauce' }, 
      oldPrice: '50 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/09/b4/ab/09b4ab16c0b0b621cca3a6469a62d2dc.jpg' 
    },
    { 
      id: 19, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Bomba Burger', ru: 'Бомба Бургер', en: 'Bomba Burger' }, 
      description: { uz: 'sara mol go\'shtidan kotlet, chedder pishlog\'i, mualliflik sousi', ru: 'котлета из отборной говядины, сыр чеддер, фирменный соус', en: 'selected beef patty, cheddar cheese, signature sauce' }, 
      oldPrice: '65 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/02/67/95/0267958231dadb2984bc9a31f1d1d880.jpg' 
    },
    { 
      id: 20, categoryKey: 'food', subCategoryKey: 'authorDishes', 
      name: { uz: 'Klassik Ramen', ru: 'Рамен классический', en: 'Classic Ramen' }, 
      description: { uz: 'mol go\'shti sho\'rva suvi, ugra, tuxum, mualliflik go\'shti', ru: 'говяжий бульон, лапша, яйцо, фирменное мясо', en: 'beef broth, noodles, egg, signature meat' }, 
      oldPrice: '70 000', price: '35 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/2d/39/28/2d3928f7fe94a70797108e1d9c893550.jpg' 
    },

    // --- Garnirlar & Kombo ---
    { id: 21, categoryKey: 'food', subCategoryKey: 'combos', name: { uz: 'Kartoshka fri', ru: 'Картофель фри', en: 'French Fries' }, description: { uz: '', ru: '', en: '' }, oldPrice: '25 000', price: '18 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/2f/ee/02/2fee02a80b28d77374ecececc7c12699.jpg' },
    { id: 22, categoryKey: 'food', subCategoryKey: 'combos', name: { uz: 'Naggetslar', ru: 'Наггетсы', en: 'Nuggets' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '25 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/6b/c4/58/6bc4580222c0f5d04dee56798e2b8d69.jpg' },
    { id: 23, categoryKey: 'food', subCategoryKey: 'combos', name: { uz: 'Kuydurgi Kombo', ru: 'Kuydurgi Kombo', en: 'Kuydurgi Combo' }, description: { uz: '«Qirollik» hot-dogi + 350 ml Coca-Cola + kartoshka fri', ru: 'Хот-дог «Королевский» + 350 мл coca cola + картофель фри', en: 'Royal Hot Dog + 350 ml Coca-Cola + French fries' }, oldPrice: '55 000', price: '35 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/23/49/80/23498050317dac3e143236550f3546bf.jpg' },
    { id: 24, categoryKey: 'food', subCategoryKey: 'combos', name: { uz: 'Klassik Kombo', ru: 'Комбо классический', en: 'Classic Combo' }, description: { uz: 'Klassik hot-dog + 350 ml Coca-Cola + kartoshka fri', ru: 'Хот-дог классический + 350 мл coca cola + картофель фри', en: 'Classic Hot Dog + 350 ml Coca-Cola + French fries' }, oldPrice: '45 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/ea/d2/7e/ead27eba6d99535eebb9ad91799c813c.jpg' },

    // --- Kofe ---
    { id: 25, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Espresso', ru: 'Эспрессо', en: 'Espresso' }, description: { uz: '', ru: '', en: '' }, oldPrice: '20 000', price: '16 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/49/a4/be/49a4bed9460e4207907d80ab3237de55.jpg' },
    { id: 26, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Latte', ru: 'Латте', en: 'Latte' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '28 000', isNew: false, imageSrc: 'https://www.torrefacto.ru/upload/uf/d00/mdoibknztzibkoforsrbpa93ijzbhw9f.jpg' },
    { id: 27, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Raf', ru: 'Раф', en: 'Raf Coffee' }, description: { uz: '', ru: '', en: '' }, oldPrice: '50 000', price: '38 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/27/67/30/276730f40e8ff2f8b055ef521233eb56.jpg' },
    { id: 28, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Kakao', ru: 'Какао', en: 'Cocoa' }, description: { uz: '', ru: '', en: '' }, oldPrice: '40 000', price: '32 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/08/08/b0/0808b010aa962fa6693284d5633a9501.jpg' },
    { id: 29, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Issiq shokolad', ru: 'Горячий шоколад', en: 'Hot Chocolate' }, description: { uz: '', ru: '', en: '' }, oldPrice: '50 000', price: '38 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/6f/e0/35/6fe0359db37441616d56393f24a62a2d.jpg' },
    { id: 30, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Ays-amerikanio', ru: 'Айс-американо', en: 'Iced Americano' }, description: { uz: '', ru: '', en: '' }, oldPrice: '30 000', price: '24 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/23/12/59/2312599d20bd78ffd2b1b6fc448490fa.jpg' },
    { id: 31, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Ays-kapuchino', ru: 'Айс-капучино', en: 'Iced Cappuccino' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '28 000', isNew: false, imageSrc: 'https://sun9-27.userapi.com/impg/oN15VxGf7oXbZ5ttj2Bn-2z2o8l-9xqC00DYWQ/gIESAA1sLDg.jpg?size=1080x1080&quality=95&sign=a539b9ee2f48e448848712e024209dda&type=album' },
    { id: 32, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Ays-latte', ru: 'Айс-латте', en: 'Iced Latte' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '28 000', isNew: false, imageSrc: 'https://hotuy.cooking/wp-content/uploads/2025/05/latte-mocha-1200x720.jpg' },
    { id: 33, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Sirop bilan Frappe', ru: 'Фраппе с сиропом', en: 'Frappe with Syrup' }, description: { uz: '', ru: '', en: '' }, oldPrice: '50 000', price: '38 000', isNew: false, imageSrc: 'https://www.torrefacto.ru/upload/medialibrary/0a8/3ylyseu2tylqj3is11ulzd0q5nayxdlm.png' },
    { id: 34, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Qulupnayli Frappe', ru: 'Фраппе клубничный', en: 'Strawberry Frappe' }, description: { uz: '', ru: '', en: '' }, oldPrice: '55 000', price: '45 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/fe/df/ea/fedfead1ff27b1946201e6415d4cc1d2.jpg' },
    { id: 35, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Babl kofe', ru: 'Бабл кофе', en: 'Bubble Coffee' }, description: { uz: '', ru: '', en: '' }, oldPrice: '45 000', price: '29 000', isNew: true, imageSrc: 'https://i.pinimg.com/736x/69/f7/01/69f701cd65b75388e0771ca0e5b63cb1.jpg' },
    { id: 36, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Moxito', ru: 'Мохито', en: 'Mojito' }, description: { uz: '', ru: '', en: '' }, oldPrice: '45 000', price: '29 000', isNew: true, imageSrc: 'https://i.pinimg.com/736x/f2/d6/b9/f2d6b9050f7f38d29553131873cf80fc.jpg' },
    { id: 37, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Matcha ays klassik', ru: 'Матча айс классик', en: 'Iced Matcha Classic' }, description: { uz: '', ru: '', en: '' }, oldPrice: '45 000', price: '29 000', isNew: true, imageSrc: 'https://i.pinimg.com/736x/60/54/42/60544251a770075ac6f8ab53d37dc2a6.jpg' },
    { id: 38, categoryKey: 'drinks', subCategoryKey: 'coffee', name: { uz: 'Matcha ays (mango / qulupnay)', ru: 'Матча айс (манго / клубника)', en: 'Iced Matcha (mango / strawberry)' }, description: { uz: '', ru: '', en: '' }, oldPrice: '45 000', price: '29 000', isNew: true, imageSrc: 'https://i.pinimg.com/1200x/b9/4b/77/b94b7733fbd74897b5e9bf423cd06ea9.jpg' },

    // --- Choy ---
    { id: 39, categoryKey: 'drinks', subCategoryKey: 'tea', name: { uz: 'Matcha', ru: 'Матча', en: 'Matcha' }, description: { uz: '', ru: '', en: '' }, oldPrice: '40 000', price: '32 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/3a/02/96/3a0296727de98f2808f26c8616fcd3e7.jpg' },
    { id: 40, categoryKey: 'drinks', subCategoryKey: 'tea', name: { uz: 'Mualliflik choyi', ru: 'Авторский чай', en: 'Signature Tea' }, description: { uz: '', ru: '', en: '' }, oldPrice: '40 000', price: '32 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/e2/ae/81/e2ae810330209d2dd4973220e15f1611.jpg' },
    { id: 41, categoryKey: 'drinks', subCategoryKey: 'tea', name: { uz: 'Limonli qora choy', ru: 'Чёрный чай с лимоном', en: 'Black Tea with Lemon' }, description: { uz: '', ru: '', en: '' }, oldPrice: '30 000', price: '22 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/97/d6/7d/97d67d509ae489a3e2868f1e046c99c2.jpg' },
    { id: 42, categoryKey: 'drinks', subCategoryKey: 'tea', name: { uz: 'Erl Grey', ru: 'Эрл Грей', en: 'Earl Grey' }, description: { uz: '', ru: '', en: '' }, oldPrice: '25 000', price: '20 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/aa/f2/30/aaf230181592ad54319cf5054cc3d85c.jpg' },
    
    // --- Kruassanlar va pishiriqlar ---
    { id: 43, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Klassik kruassan', ru: 'Классический круассан', en: 'Classic Croissant' }, description: { uz: '', ru: '', en: '' }, oldPrice: '30 000', price: '22 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/57/78/f9/5778f99b9f06e6c361d6d28b631c1869.jpg' },
    { id: 44, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Shokoladli kruassan', ru: 'Шоколадный круассан', en: 'Chocolate Croissant' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '25 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/6d/9c/6c/6d9c6c712dbc512c405c991e76092841.jpg' },
    { id: 45, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Rezavorli kruassan', ru: 'Ягодный круассан', en: 'Berry Croissant' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '25 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/39/31/bb/3931bb796ddc0a35a75a3b601c79dd35.jpg' },
    { id: 46, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Pista kremli kruassan', ru: 'Фисташковый круассан', en: 'Pistachio Croissant' }, description: { uz: '', ru: '', en: '' }, oldPrice: '50 000', price: '38 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/53/5c/08/535c08d56b16ed85d297f6053d512489.jpg' },
    { id: 47, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Bodomli kruassan', ru: 'Миндальный круассан', en: 'Almond Croissant' }, description: { uz: '', ru: '', en: '' }, oldPrice: '37 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/d0/ff/6f/d0ff6f79fc9eaf2e1dd887f48fcc2cf2.jpg' },
    { id: 48, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Pan-o-shokilya', ru: 'Пан-о-шоколя', en: 'Pain au Chocolat' }, description: { uz: '', ru: '', en: '' }, oldPrice: '40 000', price: '30 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/e7/0f/c3/e70fc3b26c37ff388e016343d8f941fc.jpg' },
    { id: 49, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Pan-syuiss', ru: 'Пан-сюисс', en: 'Pain Suisse' }, description: { uz: '', ru: '', en: '' }, oldPrice: '40 000', price: '30 000', isNew: false, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRjro5lh3r5L0Dpr6A-Pifigj-HDR4IVnBHMlKSKTMH-N7h3XZ3Z6Qz5M&s=10' },
    { id: 50, categoryKey: 'food', subCategoryKey: 'croissants', name: { uz: 'Choko roll', ru: 'Чоко ролл', en: 'Choco Roll' }, description: { uz: '', ru: '', en: '' }, oldPrice: '45 000', price: '35 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/60/9f/49/609f4992fdd6d1273285503e8d8c6c12.jpg' },

    // --- Shiringliklar ---
    { id: 51, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Klassik Asalli tort', ru: 'Медовик классический', en: 'Classic Honey Cake' }, description: { uz: '', ru: '', en: '' }, oldPrice: '30 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/f7/f0/fe/f7f0feca78cc836a36f899c8093f974b.jpg' },
    { id: 52, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Merengali rulet', ru: 'Меренговый рулет', en: 'Meringue Roll' }, description: { uz: '', ru: '', en: '' }, oldPrice: '35 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/c9/47/cf/c947cf9308561e1b4e495461a990e788.jpg' },
    { id: 53, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Napoleon', ru: 'Наполеон', en: 'Napoleon Cake' }, description: { uz: '', ru: '', en: '' }, oldPrice: '30 000', price: '28 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/35/64/fd/3564fd940bb16ba91c620010c5daf0c5.jpg' },
    { id: 54, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Shokoladli San-Sebastyan', ru: 'Сан-Себастьян шоколадный', en: 'Chocolate San Sebastian' }, description: { uz: '', ru: '', en: '' }, oldPrice: '60 000', price: '45 000', isNew: false, imageSrc: 'https://i.pinimg.com/1200x/99/b5/06/99b506df6bf7c2f72a208dda9adaa98a.jpg' },
    { id: 55, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Pistali San-Sebastyan', ru: 'Сан-Себастьян фисташковый', en: 'Pistachio San Sebastian' }, description: { uz: '', ru: '', en: '' }, oldPrice: '70 000', price: '52 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/11/ca/f1/11caf11231dc11853ddfb63a3e6e574f.jpg' },
    { id: 56, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Makaronsi', ru: 'Макаронси', en: 'Macarons' }, description: { uz: '', ru: '', en: '' }, oldPrice: '15 000', price: '27 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/dd/8b/3e/dd8b3e0eba9bc97de26636e791372999.jpg' },
    { id: 57, categoryKey: 'food', subCategoryKey: 'desserts', name: { uz: 'Yong\'oqchalar', ru: 'Орешки', en: 'Oreshki (Nut cookies)' }, description: { uz: '', ru: '', en: '' }, oldPrice: '60 000', price: '25 000', isNew: false, imageSrc: 'https://i.pinimg.com/736x/fe/ac/29/feac29ffadc5da346594a758b16bb665.jpg' }
  ]
};

export default function Menu() {
  const [selectedMainCat, setSelectedMainCat] = useState('food');
  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lang, setLang] = useState('uz');

  const { addToCart } = useCart();
  const t = translations[lang];

  const filteredItems = menuData.menuItems.filter((item) => {
    const query = searchTerm.toLowerCase().trim();

    if (!query) {
      const matchesMainCat = item.categoryKey === selectedMainCat;
      const matchesSubCat = selectedSubCat === 'all' || item.subCategoryKey === selectedSubCat;
      return matchesMainCat && matchesSubCat;
    }

    const itemName = item.name[lang] || item.name['uz'] || '';
    const itemDesc = item.description[lang] || item.description['uz'] || '';

    const matchesName = itemName.toLowerCase().includes(query);
    const matchesDesc = itemDesc ? itemDesc.toLowerCase().includes(query) : false;
    const matchesCategory = item.categoryKey.toLowerCase().includes(query);
    const matchesSubCategory = item.subCategoryKey.toLowerCase().includes(query);

    return matchesName || matchesDesc || matchesCategory || matchesSubCategory;
  });

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', color: '#1C2A20', fontFamily: 'Inter, sans-serif', paddingBottom: '60px' }}>
      
      <style>{`
        .card-img-container img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: center !important;
          display: block !important;
        }

        /* Bon! Cafe stiliga moslashtirilgan grid: Telefondan 3 ta ustun */
        .menu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          align-items: stretch;
        }

        @media (min-width: 640px) {
          .menu-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
        }

        @media (min-width: 1024px) {
          .menu-grid {
            grid-template-columns: repeat(6, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      <div style={{
        backgroundColor: '#F5EFE6',
        padding: '12px 14px',
        color: '#1C2A20',
        borderBottomLeftRadius: '16px',
        borderBottomRightRadius: '16px',
        border: '1px solid #EAE3D9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px',
        flexWrap: 'nowrap'
      }}>
 
        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: '0',
            padding: '8px 12px',
            borderRadius: '16px',
            border: '1px solid #E5DFD3',
            fontSize: '12px',
            fontWeight: '600',
            backgroundColor: '#FFFFFF',
            color: '#1C2A20',
            outline: 'none',
            boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
          }}
        />

        <div style={{
          display: 'flex',
          backgroundColor: '#FFFFFF',
          padding: '2px',
          borderRadius: '16px',
          border: '1px solid #EAE3D9',
          flexShrink: 0
        }}>
          {['uz', 'en', 'ru'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                padding: '4px 8px',
                borderRadius: '12px',
                fontWeight: '800',
                fontSize: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: lang === l ? '#1C2A20' : 'transparent',
                color: lang === l ? '#FFFFFF' : '#1C2A20',
                border: 'none'
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '12px' }}>
 
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          {menuData.categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedMainCat(cat.key);
                setSelectedSubCat('all');
              }}
              style={{
                flex: 1,
                padding: '10px 0',
                borderRadius: '12px',
                border: 'none',
                backgroundColor: selectedMainCat === cat.key ? '#1C2A20' : '#EFEBE4',
                color: selectedMainCat === cat.key ? '#FFC72C' : '#6B7280',
                fontSize: '13px',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {t.categories[cat.labelKey]}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'none' }}>
          {menuData.subCategories.map((sub) => (
            <button
              key={sub.key}
              onClick={() => setSelectedSubCat(sub.key)}
              style={{
                border: selectedSubCat === sub.key ? '1.5px solid #FFC72C' : '1px solid #E5E0D8',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '11px',
                fontWeight: '700',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                backgroundColor: selectedSubCat === sub.key ? '#FFFFFF' : '#FAF7F2',
                color: selectedSubCat === sub.key ? '#1C2A20' : '#6B7280',
                transition: 'all 0.2s ease'
              }}
            >
              {t.subCategories[sub.labelKey]}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '14px 0 10px 0' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '800', margin: 0, color: '#1C2A20' }}>
            {selectedSubCat === 'all' ? t.categories[selectedMainCat] : t.subCategories[selectedSubCat]}
          </h2>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#D97706', backgroundColor: '#FFFBEB', padding: '3px 8px', borderRadius: '10px' }}>
            {filteredItems.length} {t.itemsUnit}
          </span>
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => {
            const currentName = item.name[lang] || item.name['uz'] || '';
            const currentDesc = item.description[lang] || item.description['uz'] || '';

            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #EAE3D9',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  position: 'relative'
                }}
              >
                {item.isNew && (
                  <span style={{
                    position: 'absolute',
                    top: '6px',
                    left: '6px',
                    backgroundColor: '#FFC72C',
                    color: '#1C2A20',
                    fontSize: '9px',
                    fontWeight: '900',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    zIndex: 2
                  }}>
                    NEW
                  </span>
                )}

                <div className="card-img-container" style={{ width: '100%', height: '95px', backgroundColor: '#F5EFE6', overflow: 'hidden' }}>
                  {item.imageSrc ? (
                    <img src={item.imageSrc} alt={currentName} />
                  ) : (
                    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '10px' }}>
                      {t.noImage}
                    </div>
                  )}
                </div>

                <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '11px', fontWeight: '700', margin: '0 0 4px 0', color: '#1C2A20', lineHeight: '1.2' }}>
                      {currentName}
                    </h3>
                    {currentDesc && (
                      <p style={{
                        fontSize: '9px',
                        color: '#6B7280',
                        margin: '0 0 6px 0',
                        lineHeight: '1.2',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {currentDesc}
                      </p>
                    )}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: '#1C2A20' }}>
                        {item.price} {t.currency}
                      </span>
                      {item.oldPrice && (
                        <span style={{ fontSize: '9px', color: '#9CA3AF', textDecoration: 'line-through' }}>
                          {item.oldPrice}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart({ ...item, name: currentName, price: item.price })}
                      style={{
                        width: '100%',
                        padding: '6px 0',
                        backgroundColor: '#1C2A20',
                        color: '#FFFFFF',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '10px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}