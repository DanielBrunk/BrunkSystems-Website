export const siteConfig = {
  // Firmen-Daten
  companyName: 'BrunkSystems',
  companySlogan: 'IT & Digitale Lösungen',
  owner: 'Daniel Brunk',

  // Kontakt
  phone: '+4917699378390',
  phoneDisplay: '0176 99378390',
  email: 'office@brunksystems.de',
  address: {
    street: 'Gottlieb-Daimlerstraße 10',
    zip: '78239',
    city: 'Rielasingen-Worblingen',
  },

  // Social Media
  social: {
    // github: 'https://github.com/DanielBrunk',
  },

  // URLs
  siteUrl: 'https://brunk-systems.de',

  // Analytics (Umami)
  umamiWebsiteId: 'cd4d10d9-1d68-4784-8064-f3dc1859edca',
  umamiScriptUrl: 'https://analytics.brunksys.de/script.js',

  // SEO Defaults
  defaultTitle: 'BrunkSystems - IT & Digitale Lösungen am Bodensee',
  defaultDescription:
    'KI-Beratung, Vorträge und KI-Systeme aus Rielasingen-Worblingen am Bodensee. KI verstehen, einsetzen und davon profitieren - für KMU und Entscheider.',
  defaultImage: '/images/og-image.png',

  // Rechtliches
  legal: {
    taxId: 'DE313423954',
  },
};

export type SiteConfig = typeof siteConfig;
