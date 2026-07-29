## Madeleine's Bakebok

En samling av mine oppskrifter på den måten jeg vil lese de. Sjekk de ut på https://baknoe.no

### Utviklet med

- [React](https://react.dev/)
- [Sanity](https://www.sanity.io/)
- [Node](https://nodejs.org/en/)
- [Chakra UI](https://chakra-ui.com/)
- [Vercel](https://vercel.com/)

### Kjør prosjektet lokalt

Frontend og Sanity Studio er to separate npm-prosjekter.

1. I `site/`: kopier `.env.example` til `.env`, installer avhengigheter med `npm install`, og start med `npm run dev`.
2. I `cms/`: installer avhengigheter med `npm install`, og start Studio med `npm run dev`.

For produksjonsbygg bruker begge prosjekter `npm run build`. Frontenden bygges til `site/dist/`; Studio deployes med `npm run deploy` fra `cms/`.

### Tilbakemeldinger

Har du innspill og/eller tilbakemeldinger? Send meg en epost: madeleine.loras@gmail.com
