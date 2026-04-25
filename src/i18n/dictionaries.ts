import type { Locale } from "./types";

export interface Dict {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    languageLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description1: string;
    description2: string;
    statBooks: string;
    statBooksLabel: string;
    statRating: string;
    statRatingLabel: string;
    phoneAlt: string;
  };
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  discount: {
    eyebrow: string;
    discountLabel: string;
    description1: string;
    description2: string;
    monthly: string;
    yearly: string;
    yearlySub: string;
    monthlySub: string;
    saver: string;
    note: string;
  };
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: (n: number) => string;
    steps: { title: string; description: string }[];
  };
  compare: {
    eyebrow: string;
    title: string;
    feature: string;
    free: string;
    premium: string;
    promoTag: string;
    rows: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    description: string;
  };
  footer: {
    tagline: string;
    contact: string;
    partner: string;
    note: string;
    noteText: string;
    copyright: string;
  };
  promo: {
    label: string;
    copyAria: string;
    copy: string;
    copied: string;
  };
  store: {
    download: string;
  };
}

const uz: Dict = {
  meta: {
    title: "Mutolaa Premium — 20% AKMAL20 promokod bilan",
    description:
      "AKMAL20 promokodi orqali Mutolaa Premium tarifiga 20% chegirma oling. Minglab audio va elektron kitoblarga to'liq kirish.",
  },
  nav: { languageLabel: "Tilni tanlash" },
  hero: {
    badge: "Mutolaa Premium uchun maxsus taklif",
    titleLine1: "Mutolaa Premium —",
    titleLine2: "20% chegirma bilan",
    description1: "AKMAL20",
    description2:
      " promokodi orqali oylik va yillik tarifga 20% chegirma oling. Minglab audio va elektron kitoblarga to'liq kirish — istalgan joyda, istalgan vaqtda.",
    statBooks: "10 000+",
    statBooksLabel: "Kitob va audiokitob",
    statRating: "4.8★",
    statRatingLabel: "App Store reytingi",
    phoneAlt: "Mutolaa Premium ilovasi",
  },
  features: {
    eyebrow: "Nega Premium?",
    title: "Mutolaa Premium imkoniyatlari",
    subtitle: "O'qish va tinglashni yangi bosqichga olib chiqadigan oltita asosiy xususiyat.",
    items: [
      { title: "Audiokitoblarni offline", description: "Internetga ulanmasdan tinglash uchun audiokitoblarni qurilmangizga yuklab oling." },
      { title: "Mutolaaxonam", description: "Shaxsiy javoningiz va o'qish kuzatuvi — sevimli kitoblaringiz bir joyda." },
      { title: "Premium kitoblar", description: "Faqat Premium foydalanuvchilar uchun ochiq bo'lgan eksklyuziv kitoblar." },
      { title: "Tovushbezak", description: "Kinematik audiokitob tajribasi — musiqa va sado effektlari bilan boyitilgan." },
      { title: "Faollik statistikasi", description: "O'qish odatlaringizni kuzating: kunlik, haftalik va oylik natijalar." },
      { title: "Kitob bo'yicha quiz", description: "Har bir kitobdan keyin bilimingizni mustahkamlash uchun qiziqarli testlar." },
    ],
  },
  discount: {
    eyebrow: "Maxsus taklif",
    discountLabel: "chegirma",
    description1: "AKMAL20",
    description2: " promokodi bilan istalgan tarifga — oylik yoki yillik.",
    monthly: "Oylik tarif",
    yearly: "Yillik tarif",
    yearlySub: "atigi 12 916 so'm/oy",
    monthlySub: "oyiga",
    saver: "Tejamkor",
    note: "* Narxlar AKMAL20 promokodi qo'llanganda. Aniq narxlar ilovada ko'rsatiladi.",
  },
  how: {
    eyebrow: "Qanday ulanish",
    title: "9 ta sodda qadamda Premium",
    subtitle: "AKMAL20 promokodini qo'llash va 20% chegirma olish uchun batafsil qo'llanma.",
    stepLabel: (n) => `${n}-qadam`,
    steps: [
      { title: "Ilovani oching", description: "App Store yoki Google Play'dan Mutolaa ilovasini yuklab oling va oching." },
      { title: "Tizimga kiring", description: "Telefon raqam yoki Google/Apple orqali akkauntingizga kiring." },
      { title: "Sahifam bo'limiga o'ting", description: "Pastki menyudan «Sahifam» bo'limini tanlang." },
      { title: "«Premium» tugmasini bosing", description: "Sahifam ro'yxatidan «Premium» qatorini tanlang." },
      { title: "«Obuna bo'lish» ni bosing", description: "Mutolaa Premium ekranida pastdagi to'q sariq tugmani bosing." },
      { title: "Tarifni tanlang", description: "Yillik tarifni tanlang — eng tejamkor variant — va «Davom etish» ni bosing." },
      { title: "«Chegirma promokodi» ni oching", description: "To'lov ekranida «Chegirma promokodi» qatoriga tegining." },
      { title: "AKMAL20 ni kiriting", description: "Promokod maydoniga AKMAL20 deb yozing va «Tasdiqlash» ni bosing." },
      { title: "Chegirma qo'llandi — to'lang", description: "−20% chegirma qo'llanganini ko'ring va «Obuna bo'lish» orqali to'lovni yakunlang." },
    ],
  },
  compare: {
    eyebrow: "Taqqoslash",
    title: "Bepul va Premium farqi",
    feature: "Imkoniyat",
    free: "Bepul",
    premium: "Premium",
    promoTag: "AKMAL20 −20%",
    rows: [
      "Online mutolaa",
      "Elektron kitoblarni yuklab olish",
      "Audiokitobni yuklab olish",
      "Premium kitoblar",
      "Tovushbezak",
      "Kitob bo'yicha quiz",
      "Mutolaaxonam",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Ko'p so'raladigan savollar",
    items: [
      { q: "AKMAL20 promokodi qancha vaqt amal qiladi?", a: "Promokod amal qilish muddati cheklangan bo'lishi mumkin. Iloji boricha tezroq foydalanishingizni tavsiya qilamiz." },
      { q: "Promokod yillik tarifga ham qo'llaniladimi?", a: "Ha, AKMAL20 promokodi ham oylik, ham yillik tarifga 20% chegirma beradi. Yillik tarifda umumiy tejamkorlik ancha katta bo'ladi." },
      { q: "Premium'ni bekor qilsam bo'ladimi?", a: "Ha, istalgan vaqtda obunani bekor qilishingiz mumkin. Bekor qilish ilova sozlamalari yoki App Store / Google Play orqali amalga oshiriladi." },
      { q: "To'lov qaysi kartalar orqali amalga oshiriladi?", a: "To'lov ilova ichidagi qulay usullar orqali amalga oshiriladi — mahalliy va xalqaro kartalar qo'llab-quvvatlanadi." },
      { q: "Bir akkauntda nechta qurilmada ishlataman?", a: "Bitta akkaunt bilan bir nechta qurilmada (telefon, planshet) tizimga kirishingiz mumkin." },
      { q: "Promokod ishlamasa nima qilish kerak?", a: "Promokod katta-kichik harflarsiz to'g'ri yozilganini tekshiring: AKMAL20. Agar muammo davom etsa, qo'llab-quvvatlash xizmatiga murojaat qiling." },
    ],
  },
  finalCta: {
    titlePart1: "Hoziroq ",
    titleAccent: "mutolaani",
    titlePart2: " boshlang",
    description: "AKMAL20 promokodi bilan Mutolaa Premium tarifiga 20% chegirma. Minglab kitoblar va audiokitoblarga to'liq kirishni qo'lga kiriting.",
  },
  footer: {
    tagline: "O'zbek tilidagi audio va elektron kitoblar kutubxonasi. Bilim va mutolaa har doim yoningizda.",
    contact: "Aloqa",
    partner: "Hamkor sayt",
    note: "Eslatma",
    noteText: "Bu sayt Mutolaa loyihasining rasmiy hamkori tomonidan tayyorlangan. AKMAL20 promokodi orqali Mutolaa Premium tarifiga 20% chegirma taqdim etiladi.",
    copyright: "© 2026 Mutolaa Premium hamkorlik landingi. Barcha huquqlar himoyalangan.",
  },
  promo: { label: "Promokod", copyAria: "Promokodni nusxalash", copy: "Nusxalash", copied: "Nusxalandi" },
  store: { download: "Yuklab oling" },
};

const qr: Dict = {
  meta: {
    title: "Mutolaa Premium — AKMAL20 promokod menen 20%",
    description:
      "AKMAL20 promokodı arqalı Mutolaa Premium tarifıne 20% jeńillik alıń. Mıńlağan audio hám elektron kitaplarga tolıq kiriw.",
  },
  nav: { languageLabel: "Tildi saylaw" },
  hero: {
    badge: "Mutolaa Premium ushın arnawlı usınıs",
    titleLine1: "Mutolaa Premium —",
    titleLine2: "20% jeńillik menen",
    description1: "AKMAL20",
    description2:
      " promokodı arqalı aylıq hám jıllıq tarifke 20% jeńillik alıń. Mıńlağan audio hám elektron kitaplarga tolıq kiriw — qálegen jerde, qálegen waqıtta.",
    statBooks: "10 000+",
    statBooksLabel: "Kitap hám audio kitap",
    statRating: "4.8★",
    statRatingLabel: "App Store reytingi",
    phoneAlt: "Mutolaa Premium qosımshası",
  },
  features: {
    eyebrow: "Nege Premium?",
    title: "Mutolaa Premium múmkinshilikleri",
    subtitle: "Oqıw hám tıńlawdı jańa basqıshqa kóteretuǵın altı tiykarǵı qásiyet.",
    items: [
      { title: "Audio kitaplardı offline", description: "Internetsız tıńlaw ushın audio kitaplardı qurılmańızǵa júkleń." },
      { title: "Mutolaaxonam", description: "Shaxsiy shkafıńız hám oqıw qadaǵalawı — súygen kitaplarıńız bir jerde." },
      { title: "Premium kitaplar", description: "Tek Premium paydalanıwshılar ushın ashıq eksklyuziv kitaplar." },
      { title: "Awaz bezewi", description: "Kinematik audio kitap tájiriybesi — muzika hám sadalı effektler menen." },
      { title: "Aktivlik statistikası", description: "Oqıw ádetleriniz qadaǵalań: kúnlik, háptelik hám aylıq nátiyjeler." },
      { title: "Kitap boyınsha quiz", description: "Hár bir kitaptan keyin bilimińizdi bekkemlew ushın qızıqlı testler." },
    ],
  },
  discount: {
    eyebrow: "Arnawlı usınıs",
    discountLabel: "jeńillik",
    description1: "AKMAL20",
    description2: " promokodı menen qálegen tarifke — aylıq yamasa jıllıq.",
    monthly: "Aylıq tarif",
    yearly: "Jıllıq tarif",
    yearlySub: "tek 12 916 sum/ay",
    monthlySub: "ayına",
    saver: "Únemli",
    note: "* Bahalar AKMAL20 promokodı qollanılǵanda. Anıq bahalar qosımshada kórsetiledi.",
  },
  how: {
    eyebrow: "Qanday ulanıw",
    title: "9 ápiwayı qádemde Premium",
    subtitle: "AKMAL20 promokodın qollaw hám 20% jeńillik alıw ushın tolıq qollanba.",
    stepLabel: (n) => `${n}-qádem`,
    steps: [
      { title: "Qosımshanı ashıń", description: "App Store yamasa Google Play'dan Mutolaa qosımshasın júkleń hám ashıń." },
      { title: "Sistemaǵa kiriń", description: "Telefon nomeri yamasa Google/Apple arqalı akkauntıńızǵa kiriń." },
      { title: "Betime bóliminege ótiń", description: "Astındaǵı menyudan «Betim» bólimin saylań." },
      { title: "«Premium» tymesin basıń", description: "Betim dizimindiн «Premium» qatarın saylań." },
      { title: "«Jazılıw» dı basıń", description: "Mutolaa Premium ekranında astındaǵı qara sarı tymeni basıń." },
      { title: "Tarifti saylań", description: "Jıllıq tarifti saylań — eń únemli variant — hám «Dawam etiw» di basıń." },
      { title: "«Jeńillik promokodı» n ashıń", description: "Tólew ekranında «Jeńillik promokodı» qatarına tiyiń." },
      { title: "AKMAL20 di kiritiń", description: "Promokod maydanına AKMAL20 dep jazıń hám «Tastıyıqlaw» dı basıń." },
      { title: "Jeńillik qollandı — tóleń", description: "−20% jeńillik qollanǵanın kóriń hám «Jazılıw» arqalı tólewdi tamamlań." },
    ],
  },
  compare: {
    eyebrow: "Salıstırıw",
    title: "Tegin hám Premium ayırması",
    feature: "Múmkinshilik",
    free: "Tegin",
    premium: "Premium",
    promoTag: "AKMAL20 −20%",
    rows: [
      "Online oqıw",
      "Elektron kitaplardı júklep alıw",
      "Audio kitaptı júklep alıw",
      "Premium kitaplar",
      "Awaz bezewi",
      "Kitap boyınsha quiz",
      "Mutolaaxonam",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Kóp soraladıǵan sorawlar",
    items: [
      { q: "AKMAL20 promokodı qansha waqıt jaramlı?", a: "Promokodtıń jaramlılıq múddeti shekleўli bolıwı múmkin. Iloji barınsha tezirek paydalanıwıńızdı usınıs etemiz." },
      { q: "Promokod jıllıq tarifke de qollanıladı ma?", a: "Awa, AKMAL20 promokodı aylıq hám jıllıq tarifke 20% jeńillik beredi. Jıllıq tarifte ulıwma únem ádewir úlken boladı." },
      { q: "Premium'di biykar etip bolama?", a: "Awa, qálegen waqıtta jazılıwdı biykar etiwińiz múmkin. Biykar etiw qosımsha sazlawları yamasa App Store / Google Play arqalı ámelge asadı." },
      { q: "Tólew qaysı kartalar arqalı ámelge asadı?", a: "Tólew qosımsha ishindegi qolaylı usıllar arqalı — jergilikli hám xalıqaralıq kartalar qollap-quwatlanadı." },
      { q: "Bir akkauntta neshe qurılmada paydalanıwǵa boladı?", a: "Bir akkaunt menen birneshe qurılmada (telefon, planshet) sistemaǵa kiriwińiz múmkin." },
      { q: "Promokod islemese ne islew kerek?", a: "Promokod tuwrı jazılǵanın tekserip kóriń: AKMAL20. Eger mashqala dawam etse, qollap-quwatlaw xızmetine múrájat qılıń." },
    ],
  },
  finalCta: {
    titlePart1: "Házir ",
    titleAccent: "oqıwdı",
    titlePart2: " baslań",
    description: "AKMAL20 promokodı menen Mutolaa Premium tarifıne 20% jeńillik. Mıńlağan kitaplar hám audio kitaplarga tolıq kiriўdi qolǵa kirgiziń.",
  },
  footer: {
    tagline: "Ózbek tilindegi audio hám elektron kitaplar kitapxanası. Bilim hám oqıw hár dayım janıńızda.",
    contact: "Baylanıs",
    partner: "Sherik sayt",
    note: "Eskertpe",
    noteText: "Bul sayt Mutolaa joybarınıń rásmiy sherigi tárepinen tayarlanǵan. AKMAL20 promokodı arqalı Mutolaa Premium tarifıne 20% jeńillik beriledi.",
    copyright: "© 2026 Mutolaa Premium sheriklik landingi. Barlıq huqıqlar qorǵalǵan.",
  },
  promo: { label: "Promokod", copyAria: "Promokoddı kóshiriw", copy: "Kóshiriw", copied: "Kóshirildi" },
  store: { download: "Júklep alıń" },
};

const ru: Dict = {
  meta: {
    title: "Mutolaa Premium — скидка 20% по промокоду AKMAL20",
    description:
      "Получите скидку 20% на тариф Mutolaa Premium по промокоду AKMAL20. Полный доступ к тысячам аудио и электронных книг.",
  },
  nav: { languageLabel: "Выбор языка" },
  hero: {
    badge: "Специальное предложение для Mutolaa Premium",
    titleLine1: "Mutolaa Premium —",
    titleLine2: "со скидкой 20%",
    description1: "AKMAL20",
    description2:
      " — промокод даёт 20% скидку на месячный и годовой тариф. Полный доступ к тысячам аудио и электронных книг — где угодно и когда угодно.",
    statBooks: "10 000+",
    statBooksLabel: "Книг и аудиокниг",
    statRating: "4.8★",
    statRatingLabel: "Рейтинг в App Store",
    phoneAlt: "Приложение Mutolaa Premium",
  },
  features: {
    eyebrow: "Почему Premium?",
    title: "Возможности Mutolaa Premium",
    subtitle: "Шесть ключевых функций, которые выводят чтение и прослушивание на новый уровень.",
    items: [
      { title: "Аудиокниги офлайн", description: "Скачивайте аудиокниги на устройство, чтобы слушать без интернета." },
      { title: "Моя библиотека", description: "Личная полка и отслеживание прогресса — любимые книги в одном месте." },
      { title: "Premium-книги", description: "Эксклюзивные книги, доступные только пользователям Premium." },
      { title: "Звуковое оформление", description: "Кинематографичный аудиоопыт — с музыкой и звуковыми эффектами." },
      { title: "Статистика активности", description: "Следите за привычками чтения: ежедневные, недельные и месячные результаты." },
      { title: "Тесты по книгам", description: "Интересные тесты после каждой книги — закрепите знания." },
    ],
  },
  discount: {
    eyebrow: "Специальное предложение",
    discountLabel: "скидка",
    description1: "AKMAL20",
    description2: " — промокод действует на любой тариф: месячный или годовой.",
    monthly: "Месячный тариф",
    yearly: "Годовой тариф",
    yearlySub: "всего 12 916 сум/мес",
    monthlySub: "в месяц",
    saver: "Выгодно",
    note: "* Цены указаны с применённым промокодом AKMAL20. Точные цены отображаются в приложении.",
  },
  how: {
    eyebrow: "Как подключить",
    title: "Premium за 9 простых шагов",
    subtitle: "Подробная инструкция по применению промокода AKMAL20 и получению 20% скидки.",
    stepLabel: (n) => `Шаг ${n}`,
    steps: [
      { title: "Откройте приложение", description: "Скачайте Mutolaa из App Store или Google Play и откройте приложение." },
      { title: "Войдите в аккаунт", description: "Войдите по номеру телефона или через Google/Apple." },
      { title: "Перейдите в «Моя страница»", description: "Выберите раздел «Моя страница» в нижнем меню." },
      { title: "Нажмите «Premium»", description: "В списке выберите строку «Premium»." },
      { title: "Нажмите «Подписаться»", description: "На экране Mutolaa Premium нажмите оранжевую кнопку внизу." },
      { title: "Выберите тариф", description: "Выберите годовой тариф — самый выгодный — и нажмите «Продолжить»." },
      { title: "Откройте «Промокод»", description: "На экране оплаты нажмите на строку «Промокод скидки»." },
      { title: "Введите AKMAL20", description: "Впишите AKMAL20 в поле промокода и нажмите «Подтвердить»." },
      { title: "Скидка применена — оплатите", description: "Убедитесь, что применена скидка −20%, и завершите оплату через «Подписаться»." },
    ],
  },
  compare: {
    eyebrow: "Сравнение",
    title: "Бесплатно и Premium",
    feature: "Возможность",
    free: "Бесплатно",
    premium: "Premium",
    promoTag: "AKMAL20 −20%",
    rows: [
      "Онлайн-чтение",
      "Скачивание электронных книг",
      "Скачивание аудиокниг",
      "Premium-книги",
      "Звуковое оформление",
      "Тесты по книгам",
      "Моя библиотека",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Часто задаваемые вопросы",
    items: [
      { q: "Сколько действует промокод AKMAL20?", a: "Срок действия промокода может быть ограничен. Рекомендуем воспользоваться им как можно скорее." },
      { q: "Применяется ли промокод к годовому тарифу?", a: "Да, AKMAL20 даёт 20% скидку как на месячный, так и на годовой тариф. На годовом экономия значительно больше." },
      { q: "Можно ли отменить Premium?", a: "Да, подписку можно отменить в любой момент через настройки приложения или App Store / Google Play." },
      { q: "Какими картами можно оплатить?", a: "Оплата проводится удобными способами внутри приложения — поддерживаются местные и международные карты." },
      { q: "На скольких устройствах можно использовать аккаунт?", a: "С одним аккаунтом можно входить на нескольких устройствах (телефон, планшет)." },
      { q: "Что делать, если промокод не работает?", a: "Проверьте написание: AKMAL20 (без учёта регистра). Если проблема сохраняется, обратитесь в поддержку." },
    ],
  },
  finalCta: {
    titlePart1: "Начните ",
    titleAccent: "читать",
    titlePart2: " прямо сейчас",
    description: "Со скидкой 20% по промокоду AKMAL20 на Mutolaa Premium. Получите полный доступ к тысячам книг и аудиокниг.",
  },
  footer: {
    tagline: "Библиотека аудио и электронных книг на узбекском языке. Знания и чтение всегда с вами.",
    contact: "Контакты",
    partner: "Партнёрский сайт",
    note: "Примечание",
    noteText: "Этот сайт подготовлен официальным партнёром проекта Mutolaa. По промокоду AKMAL20 предоставляется скидка 20% на тариф Mutolaa Premium.",
    copyright: "© 2026 Партнёрский лендинг Mutolaa Premium. Все права защищены.",
  },
  promo: { label: "Промокод", copyAria: "Скопировать промокод", copy: "Копировать", copied: "Скопировано" },
  store: { download: "Скачать в" },
};

const en: Dict = {
  meta: {
    title: "Mutolaa Premium — 20% off with AKMAL20 promo code",
    description:
      "Get 20% off Mutolaa Premium with the AKMAL20 promo code. Full access to thousands of audio and e-books.",
  },
  nav: { languageLabel: "Choose language" },
  hero: {
    badge: "Special offer for Mutolaa Premium",
    titleLine1: "Mutolaa Premium —",
    titleLine2: "with 20% discount",
    description1: "AKMAL20",
    description2:
      " — promo code that gives 20% off monthly and yearly plans. Full access to thousands of audio and e-books — anywhere, anytime.",
    statBooks: "10,000+",
    statBooksLabel: "Books and audiobooks",
    statRating: "4.8★",
    statRatingLabel: "App Store rating",
    phoneAlt: "Mutolaa Premium app",
  },
  features: {
    eyebrow: "Why Premium?",
    title: "Mutolaa Premium features",
    subtitle: "Six key features that take reading and listening to a whole new level.",
    items: [
      { title: "Offline audiobooks", description: "Download audiobooks to your device and listen without an internet connection." },
      { title: "My library", description: "Personal shelf and reading progress — your favorite books in one place." },
      { title: "Premium books", description: "Exclusive books available only to Premium users." },
      { title: "Sound design", description: "Cinematic audiobook experience — enriched with music and sound effects." },
      { title: "Activity stats", description: "Track your reading habits with daily, weekly and monthly stats." },
      { title: "Book quizzes", description: "Fun quizzes after every book to reinforce what you've learned." },
    ],
  },
  discount: {
    eyebrow: "Special offer",
    discountLabel: "discount",
    description1: "AKMAL20",
    description2: " promo code works on any plan — monthly or yearly.",
    monthly: "Monthly plan",
    yearly: "Yearly plan",
    yearlySub: "only 12,916 UZS/month",
    monthlySub: "per month",
    saver: "Best value",
    note: "* Prices shown with AKMAL20 applied. Exact prices are displayed in the app.",
  },
  how: {
    eyebrow: "How to activate",
    title: "Premium in 9 simple steps",
    subtitle: "A detailed guide to applying the AKMAL20 promo code and getting 20% off.",
    stepLabel: (n) => `Step ${n}`,
    steps: [
      { title: "Open the app", description: "Download Mutolaa from the App Store or Google Play and open it." },
      { title: "Sign in", description: "Sign in with your phone number or via Google/Apple." },
      { title: "Go to «My page»", description: "Choose «My page» from the bottom menu." },
      { title: "Tap «Premium»", description: "Select the «Premium» row in the My page list." },
      { title: "Tap «Subscribe»", description: "On the Mutolaa Premium screen, tap the orange button at the bottom." },
      { title: "Choose a plan", description: "Pick the yearly plan — the best value — and tap «Continue»." },
      { title: "Open «Promo code»", description: "On the payment screen, tap the «Discount promo code» row." },
      { title: "Enter AKMAL20", description: "Type AKMAL20 in the promo code field and tap «Confirm»." },
      { title: "Discount applied — pay", description: "Make sure the −20% discount is applied and complete payment via «Subscribe»." },
    ],
  },
  compare: {
    eyebrow: "Compare",
    title: "Free vs Premium",
    feature: "Feature",
    free: "Free",
    premium: "Premium",
    promoTag: "AKMAL20 −20%",
    rows: [
      "Online reading",
      "Download e-books",
      "Download audiobooks",
      "Premium books",
      "Sound design",
      "Book quizzes",
      "My library",
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      { q: "How long is the AKMAL20 promo code valid?", a: "The promo code may be available for a limited time. We recommend using it as soon as possible." },
      { q: "Does the promo work on the yearly plan?", a: "Yes, AKMAL20 gives 20% off both the monthly and the yearly plan. The yearly plan saves you significantly more overall." },
      { q: "Can I cancel Premium?", a: "Yes, you can cancel anytime via app settings or App Store / Google Play." },
      { q: "Which cards are accepted?", a: "Payment is processed via convenient methods inside the app — local and international cards are supported." },
      { q: "How many devices can I use with one account?", a: "You can sign in on multiple devices (phone, tablet) with a single account." },
      { q: "What if the promo code doesn't work?", a: "Make sure you typed AKMAL20 correctly (case-insensitive). If the issue persists, contact support." },
    ],
  },
  finalCta: {
    titlePart1: "Start ",
    titleAccent: "reading",
    titlePart2: " right now",
    description: "Get 20% off Mutolaa Premium with the AKMAL20 promo code. Full access to thousands of books and audiobooks.",
  },
  footer: {
    tagline: "A library of audio and e-books in Uzbek. Knowledge and reading, always with you.",
    contact: "Contact",
    partner: "Partner site",
    note: "Note",
    noteText: "This site is prepared by an official partner of the Mutolaa project. The AKMAL20 promo code grants 20% off the Mutolaa Premium plan.",
    copyright: "© 2026 Mutolaa Premium partner landing. All rights reserved.",
  },
  promo: { label: "Promo code", copyAria: "Copy promo code", copy: "Copy", copied: "Copied" },
  store: { download: "Download on" },
};

export const dictionaries: Record<Locale, Dict> = { uz, qr, ru, en };
