# Hutliv Website

A modern Next.js 14 landing page for Hutliv company, featuring professional SaaS design with TailwindCSS.

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Company mission and values
- **Products Section**: Showcase of LeadBuddie and Hutliv Invoice
- **Contact Section**: Contact form and information
- **Footer**: Links to Privacy Policy and Terms of Service
- **Legal Pages**: Privacy Policy and Terms of Service pages

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Lucide React (Icons)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── privacy-policy/      # Privacy Policy page
│   └── terms/               # Terms of Service page
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About section
│   ├── Products.tsx         # Products section
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
└── package.json
```

## Build for Production

```bash
npm run build
npm start
```

