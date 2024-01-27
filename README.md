## Design Site by Elietth Garcia

[Linkedin](https://www.linkedin.com/in/elietth-garc%C3%ADa/)

[figma](https://www.figma.com/file/UT9iTOd7cHUCZ9EodsI2i1/MYSTIC-SPELL-ONE-PAGE?node-id=55%3A462&mode=dev)

## Build Docker Image

Build your Container

```
docker build -t nextjs-intl .
```

Run your Container

```
docker run -p 3000:3000 nextjs-intl
```

## Config Fr language

pagname: cheminsDAcces

fr.json

```
{
  "Index": {
    "title": "mistic spell élève ton esprit"
  },
  "IndexPage": {
    "title": "mistic spell élève ton esprit",
    "description": "Ceci est un exemple de base qui démontre l'utilisation de <code>next-intl</code> avec le routeur d'applications Next.js. Essayez de changer la locale dans le coin supérieur droit et voyez comment le contenu change."
  },
  "PathnamesPage": {
    "title": "Chemins",
    "description": "<p>Les chemins sont également internationalisés.</p><p>Si vous utilisez la langue par défaut anglais, vous verrez <code>/en/chemins</code> dans la barre d'adresse du navigateur sur cette page.</p><p>Si vous changez la locale en allemand, l'URL est localisée en conséquence (<code>/de/pfadnamen</code>).</p>"
  },
  "Error": {
    "title": "Quelque chose s'est mal passé !",
    "description": "<p>Nous avons malheureusement rencontré une erreur.</p><p>Vous pouvez essayer de <retry>recharger la page</retry> que vous visitiez.</p>"
  },
  "NotFoundPage": {
    "title": "Page non trouvée",
    "description": "Veuillez vérifier à nouveau la barre d'adresse du navigateur ou utilisez la navigation pour aller à une page connue."
  },
  "LocaleLayout": {
    "title": "mistic spell élève ton esprit"
  },
  "LocaleSwitcher": {
    "label": "langue",
    "locale": "{locale, select, de {🇩🇪 Deutsch} en {🇺🇸 English} other {Inconnu}}"
  },
  "Navigation": {
    "home": "Accueil",
    "pathnames": "Chemins"
  },
  "Hero": {
    "transform": "Transforme ton espace, élève ton",
    "button": "En savoir plus"
  },
  "About": {
    "title": "Illumine ton espace",
    "body": "Soigneusement fabriqué à la main avec des ingrédients naturels de première qualité, notre encens capture l'essence de la spiritualité jeune. Chaque bâtonnet est un mélange d'herbes exotiques, de résines et d'huiles essentielles, roulé avec précision et séché à la perfection.",
    "button": "Voir les produits"
  },
  "Navbar": {
    "order": "🛍 Faites votre commande MAINTENANT 🛍",
    "alt": "mistic spell"
  },
  "Footer": {
    "getIn": "PRENDRE CONTACT",
    "designBy": "Conçu avec amour par Elietth Garcia"
  }
}
```

## Nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
