# BrunkSystems Astro Starter

Astro 5 Template für statische Firmenwebsites. Reines CSS, TypeScript, DSGVO-konform, Lighthouse 100.

## Tech Stack

- **Astro 5** (Static Site Generator)
- **Reines CSS** (keine Frameworks, kein Tailwind)
- **TypeScript**
- **Inter** (lokaler Variable Font)

## Features

- Null JavaScript im Frontend (außer optionales Umami Analytics)
- Null Cookies, null externe Requests
- DSGVO-konform ohne Cookie-Banner
- CSS scroll-driven animations
- Mobile-first, responsive
- Semantisches HTML5
- YouTube Facade Pattern (datenschutzfreundlich)
- Coolify-Deployment via nixpacks.toml

## Neuen Kunden einrichten

### Schritt 1: Repository erstellen

Klicke auf "Use this template" auf GitHub und erstelle ein neues Repo für den Kunden.

### Schritt 2: Firmendaten anpassen

Öffne `src/config.ts` und passe alle Platzhalter an:

```typescript
export const siteConfig = {
  companyName: 'Kundenname',
  phone: '+49 ...',
  email: 'info@...',
  address: { ... },
  openingHours: [ ... ],
  social: { ... },
  umamiWebsiteId: '...',  // optional
  // ...
};
```

### Schritt 3: Farben und Fonts anpassen

Öffne `src/styles/global.css` und ändere die CSS-Variablen:

```css
:root {
  --color-primary: #2B5EA7;     /* Hauptfarbe */
  --color-secondary: #E8A430;   /* Akzentfarbe */
  --color-accent: #3B8C6E;      /* Weitere Akzentfarbe */
  /* ... */
}
```

Die gesamte Website passt sich automatisch an die neuen Farben an.

### Schritt 4: Inhalte bearbeiten

| Datei | Inhalt |
|-------|--------|
| `src/pages/index.astro` | Startseite (Hero, Leistungen, Über uns, Kontakt) |
| `src/pages/impressum.astro` | Impressum |
| `src/pages/datenschutz.astro` | Datenschutzerklärung |
| `src/pages/404.astro` | Fehlerseite |

### Schritt 5: Site URL setzen

In `astro.config.mjs` die finale URL eintragen:

```javascript
site: 'https://www.kunde-domain.de',
```

### Schritt 6: Deployment

Das Template enthält eine `nixpacks.toml` für Coolify. Einfach das Repo in Coolify verbinden.

## Entwicklung

```bash
npm install      # Dependencies installieren
npm run dev      # Dev-Server starten (localhost:4321)
npm run build    # Statische Seite bauen
npm run preview  # Build lokal testen
```

## Projektstruktur

```
src/
├── components/
│   ├── Card.astro          # Karte für Leistungen
│   ├── Footer.astro        # Footer mit Kontaktdaten
│   ├── Header.astro        # Navigation mit Hamburger-Menü
│   ├── Hero.astro          # Hero-Bereich
│   ├── Layout.astro        # Base Layout
│   ├── SEO.astro           # Meta Tags, Open Graph
│   ├── Section.astro       # Wiederverwendbare Sektion
│   └── VideoFacade.astro   # YouTube Facade (DSGVO)
├── pages/
│   ├── 404.astro
│   ├── datenschutz.astro
│   ├── impressum.astro
│   └── index.astro
├── styles/
│   └── global.css          # Alle CSS-Variablen und Basis-Styles
└── config.ts               # Zentrale Konfiguration
public/
└── fonts/
    └── InterVariable.woff2
```
