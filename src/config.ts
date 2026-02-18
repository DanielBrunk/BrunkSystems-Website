export const siteConfig = {
  // Firmen-Daten
  companyName: 'BrunkSystems',
  companySlogan: 'IT & Digitale Lösungen',
  owner: 'Daniel Brunk',

  // Kontakt (TODO: echte Daten eintragen)
  phone: '+49 XXX XXXXXXX',
  phoneDisplay: '0XXX XXXXXXX',
  email: 'info@brunksystems.de',
  address: {
    street: 'Musterstraße 1',
    zip: '78315',
    city: 'Radolfzell',
  },

  // Öffnungszeiten
  openingHours: [
    { days: 'Montag – Freitag', hours: '08:00 – 17:00' },
    { days: 'Samstag – Sonntag', hours: 'geschlossen' },
  ],

  // Social Media
  social: {
    // github: 'https://github.com/DanielBrunk',
  },

  // URLs
  siteUrl: 'https://brunksystems.de',

  // Analytics (Umami)
  umamiWebsiteId: '',
  umamiScriptUrl: '',

  // SEO Defaults
  defaultTitle: 'BrunkSystems – IT & Digitale Lösungen am Bodensee',
  defaultDescription:
    'KI-Systeme, Automatisierung, SmartGarden und KI-Beratung aus Rielasingen-Worblingen am Bodensee. Wir lösen Probleme — mit der passenden Technologie.',
  defaultImage: '/images/og-image.jpg',

  // Rechtliches (TODO: echte Daten eintragen)
  legal: {
    taxId: '',
    tradeRegister: '',
    supervisoryAuthority: '',
  },
};

export type SiteConfig = typeof siteConfig;
