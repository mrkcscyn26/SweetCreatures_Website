# Sweet Creatures

The primary website is the React/Vite app at the repository root. The previous six-page HTML website is preserved in [`public/static-site/`](./public/static-site/).

## Run the React app

```sh
npm install
npm run dev
```

Create a production build with:

```sh
npm run build
```

## Project structure

```text
SweetCreatures_Website/
  index.html
  package.json
  package-lock.json
  tsconfig.json
  vite.config.ts
  src/
    main.tsx
    index.css
    pages/
      HomePage.tsx
    assets/
    components/
    data/
    utils/
  public/
    static-site/
      index.html
      about.html
      menu.html
      custom-cakes.html
      gallery.html
      contact.html
      style.css
      redesign.css
      script.js
      assets/
```

To preview the preserved HTML site while the Vite server is running, open `/static-site/` in the browser. Vite also copies this folder into the production build.
