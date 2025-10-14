# Disco - AI Account Executive Platform

A modern, professional website for Disco, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Clean, modern design inspired by Spara
- ⚡ Built with Next.js 14 App Router
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 TypeScript for type safety
- 💨 Tailwind CSS for styling
- 🎨 Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx           # Hero section with gradient
│   ├── SocialProof.tsx    # Customer logos & metrics
│   ├── MultiChannel.tsx   # Voice, Chat, Email sections
│   ├── ProblemSection.tsx # Pain points grid
│   ├── WorkflowBuilder.tsx # Flowchart-style workflow
│   ├── CaseStudy.tsx      # Featured customer story
│   ├── TieredCapability.tsx # Three-tier progression
│   ├── AlwaysOn.tsx       # Always-on features
│   ├── EnterpriseSafety.tsx # Security & compliance
│   ├── Integrations.tsx   # Integration logos
│   └── FinalCTA.tsx       # Final call-to-action
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Colors

The color palette is defined in `tailwind.config.ts`:

- `disco-purple`: #6366f1
- `disco-blue`: #3b82f6
- `disco-dark`: #1e1b4b

### Content

All content is defined directly in the components. To modify text, headings, or features, edit the respective component files in the `components/` directory.

### Animations

Animations are implemented using Framer Motion. To adjust timing or effects, modify the `motion` components in each file.

## Building for Production

```bash
npm run build
npm start
```

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Design Principles

- Clean, modern aesthetic with generous white space
- Heavy use of gradients and smooth transitions
- Card-based UI with hover effects
- Mobile-first responsive design
- Professional typography with ample line spacing

## License

Private and confidential.

