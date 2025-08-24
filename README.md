# Zaid Ahmad — Portfolio (zaidahmaddev.com)

A fast, responsive personal website built with **React** to showcase projects, experience, and writing.

**Live:** [https://zaidahmaddev.com](https://zaidahmaddev.com)

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Project Structure](#project-structure)
* [Getting Started](#getting-started)
* [Available Scripts](#available-scripts)
* [Environment Variables](#environment-variables)
* [Deployment](#deployment)
* [Performance & Accessibility](#performance--accessibility)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## Features

* ⚡️ Modern SPA built with React
* 📱 Fully responsive layout
* 🧭 Clean routing for pages/sections
* 🎨 Easily themed styles (light/dark optional)
* 🧩 Modular components & data-driven project cards
* 📈 SEO-friendly metadata

---

## Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Routing:** React Router
* **Styling:** Plain CSS

---

## Project Structure

```text
root
├─ public/                  # Static assets, favicon, OG images
│  ├─ images/               # Images
│  ├─ css/vendor            # vendor css files
│  ├─ js/vendor             # vendor js files
├─ src/
│  ├─ Contexts/             # Global states
│  ├─ components/           # Reusable UI components
│  ├─ pages/                # Route-level components (Home, Projects, About)
│  ├─ App.jsx               # App root
│  └─ main.jsx              # Entry
├─ package.json
└─ README.md
```

---

## Getting Started

### Prerequisites

* **Node.js:** v18+ recommended
* **Package Manager:** npm or yarn or pnpm

### Installation

```bash
# clone
git clone https://github.com/<your-username>/zaidahmaddev.com.git
cd zaidahmaddev.com

# install deps
npm install
# or
yarn
# or
pnpm install
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Available Scripts

### Vite

* `dev` – start the dev server
* `build` – production build
* `preview` – preview the production build locally

## Environment Variables

Create a `.env` (or `.env.local`) in the project root.

```bash
# Youtube Channel
VITE_CHANNEL_ID=
VITE_YOUTUBE_API_KEY=
```

---

## Deployment

You can deploy anywhere static sites run well.

### Netlify

* Build command: `npm run build`
* Publish directory: `dist` (Vite) or `build` (CRA)

### GitHub Pages (static export)

* Build locally → push `dist/` or `build/` to a `gh-pages` branch via a deploy script

> Ensure your router uses hash routing or proper redirects for SPA routes (e.g., Netlify `_redirects` or Vercel `rewrites`).

---

## Performance & Accessibility

* Audit with **Lighthouse** in Chrome DevTools
* Lazy-load heavy images/assets
* Use semantic HTML for screen readers
* Provide alt text for all images
* Prefer system fonts or preloaded webfonts

---

## Contributing

This is a personal site. External contributions are currently not accepted. Feel free to open an issue for bugs or ideas.

---

## License

MIT © Zaid Ahmad

---

## Contact

* **Website:** [https://zaidahmaddev.com](https://zaidahmaddev.com)
* **Email:** [contact@zaidahmaddev.com](mailto:contact@zaidahmaddev.com)
* **LinkedIn:** [https://www.linkedin.com/in/zaidahmaddev/](https://www.linkedin.com/in/zaidahmaddev/)

---
