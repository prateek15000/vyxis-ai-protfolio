# Prateek Mittal — vyxis.ai Portfolio

Personal portfolio website for **Prateek Mittal**, founder of **vyxis.ai**, an AI-native software engineering company building enterprise CRM, Education Tech, Hospitality systems, and AI Agent integrations.

The site is a single-page React application with multiple routed pages (Home, About, Services, Work, Contact), smooth scrolling, and GSAP-powered animations.

## Tech Stack

- **React 19** + **React Router DOM 7** — UI and routing
- **Vite 7** — build tooling and dev server
- **GSAP** + **@gsap/react** — animations
- **Lenis** — smooth scrolling
- **react-helmet-async** — per-page SEO meta tags
- **lucide-react** — icons
- **@emailjs/browser** — contact form delivery
- **@vercel/analytics** + **@vercel/speed-insights** — analytics
- Serverless API (`/api/contact.js`) for Telegram-based contact notifications
- **ESLint** — linting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the local dev server (default: http://localhost:5173):

```bash
npm run dev
```

### Build

Create a production build in the `dist/` folder:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
.
├── api/                 # Serverless functions (contact form)
├── public/              # Static assets
├── src/
│   ├── Components/
│   │   ├── Home-Page/    # Hero, Header, Footer, About preview, Videos, Work sections
│   │   ├── About-Page/
│   │   ├── Services-Page/
│   │   ├── Work-Page/
│   │   └── Contact-Page/
│   ├── App.jsx          # Routes
│   ├── main.jsx         # App entry point
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json          # Vercel deployment config
└── package.json
```

## Environment Variables

The contact API expects Telegram configuration to be set as environment variables (see `api/contact.js`). Add these to a `.env` file locally and to your Vercel project settings for production:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Deployment

The project is configured for **Vercel** (`vercel.json`). Pushing to the connected repository, or running the Vercel CLI, will build and deploy the site.

## Author

**Prateek Mittal** — Founder of vyxis.ai
