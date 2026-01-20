// Configuración central de VIPER TV
export const CONFIG = {
  // WhatsApp
  whatsappNumber: "12107269434",
  whatsappLink: "https://wa.me/12107269434",
  
  // Tipo de cambio USD → MXN
  exchangeRate: 18.00,
  
  // Planes
  plans: [
    {
      id: 1,
      duration: "1 MES",
      priceUSD: 10,
      subtitle: "Pago Mensual",
      features: [
        "+5,000 Canales en Vivo",
        "1 Conexión simultánea",
        "Soporte WhatsApp",
        "Eventos Deportivos VIP"
      ],
      badge: null,
      connections: 1
    },
    {
      id: 2,
      duration: "3 MESES",
      priceUSD: 25,
      subtitle: "Solo $8.33 / mes",
      features: [
        "3 Conexiones simultáneas",
        "Calidad 4K / UHD",
        "Guía EPG",
        "Todo el VOD Incluido"
      ],
      badge: "MÁS POPULAR",
      popular: true,
      connections: 3
    },
    {
      id: 3,
      duration: "6 MESES",
      priceUSD: 45,
      subtitle: "Solo $7.50 / mes",
      features: [
        "3 Conexiones simultáneas",
        "Servidores de Alta Velocidad",
        "Soporte Prioritario",
        "Adultos Opcional"
      ],
      badge: null,
      connections: 3
    },
    {
      id: 4,
      duration: "12 MESES",
      priceUSD: 84,
      subtitle: "Mínimo $7.00 / mes",
      features: [
        "4 Conexiones VIP",
        "Acceso Total Sin Restricciones",
        "Congelación de Cuenta",
        "Regalo: 1 Mes Extra"
      ],
      badge: "MÁXIMO AHORRO",
      connections: 4
    }
  ],

  // Deportes
  sports: [
    { name: "UEFA Champions League", subtitle: "Liga de Campeones", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&q=80" },
    { name: "Premier League", subtitle: "Fútbol Inglés", image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80" },
    { name: "La Liga", subtitle: "Fútbol Español", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&q=80" },
    { name: "Serie A", subtitle: "Fútbol Italiano", image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80" },
    { name: "Bundesliga", subtitle: "Fútbol Alemán", image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&q=80" },
    { name: "Liga MX", subtitle: "Fútbol Mexicano", image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&q=80" },
    { name: "NFL", subtitle: "Fútbol Americano", image: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&q=80" },
    { name: "NBA", subtitle: "Baloncesto USA", image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80" },
    { name: "MLB", subtitle: "Béisbol", image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=400&q=80" },
    { name: "Tenis ATP/WTA", subtitle: "Grand Slams", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&q=80" },
    { name: "Fórmula 1", subtitle: "Automovilismo", image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&q=80" }
  ],

  // Películas y Series
  movies: [
    { name: "Dune: Parte 2", genre: "Ciencia ficción", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&q=80" },
    { name: "Deadpool & Wolverine", genre: "Acción / Comedia", image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80" },
    { name: "Furiosa", genre: "Acción", image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80" },
    { name: "Beetlejuice 2", genre: "Comedia / Fantasía", image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80" }
  ],
  series: [
    { name: "House of the Dragon", genre: "Fantasía", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80" },
    { name: "The Boys", genre: "Acción / Sátira", image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80" },
    { name: "Stranger Things", genre: "Terror / Sci-Fi", image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80" },
    { name: "The Crown", genre: "Drama histórico", image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80" }
  ],

  // Dispositivos
  devices: [
    { name: "Roku", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&q=80" },
    { name: "Smart TV Samsung/LG", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&q=80" },
    { name: "Android TV", image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80" },
    { name: "Fire Stick", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80" },
    { name: "Google Chromecast", image: "https://images.unsplash.com/photo-1576444356170-66073046b1bc?w=400&q=80" },
    { name: "Android / iOS", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80" },
    { name: "Tablets", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80" },
    { name: "PlayStation / Xbox", image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&q=80" },
    { name: "Windows / Mac", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80" }
  ],

  // FAQ
  faq: [
    {
      question: "¿Cómo funciona el demo?",
      answer: "Te damos acceso gratuito por 3 horas para que pruebes la calidad de nuestro servicio. Solo escríbenos por WhatsApp y en minutos tendrás tu demo activo."
    },
    {
      question: "¿En qué dispositivos puedo usarlo?",
      answer: "Compatible con Smart TV, Fire Stick, Roku, Android, iOS, PlayStation, Xbox, computadoras y más. Funciona en prácticamente cualquier dispositivo moderno."
    },
    {
      question: "¿Cuántas conexiones incluye cada plan?",
      answer: "1 MES = 1 conexión, 3 y 6 MESES = 3 conexiones simultáneas, 12 MESES = 4 conexiones VIP."
    },
    {
      question: "¿Qué pasa si necesito ayuda para configurar?",
      answer: "Nuestro soporte por WhatsApp está disponible para guiarte paso a paso. La configuración es muy sencilla y te ayudamos en tiempo real."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "USA: Zelle. México: Transferencia/SPEI. Internacional: PayPal y Criptomonedas. Confirmación inmediata por WhatsApp."
    }
  ]
};

// Helpers
export const formatPrice = (priceUSD, currency) => {
  if (currency === 'MXN') {
    return `$${Math.round(priceUSD * CONFIG.exchangeRate)} MXN`;
  }
  return `$${priceUSD} USD`;
};

export const getWhatsAppLink = (message) => {
  return `${CONFIG.whatsappLink}?text=${encodeURIComponent(message)}`;
};
