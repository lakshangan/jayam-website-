# Jayam Fashion Institute Website

A modern, cinematic website for Jayam Fashion Institute featuring:
- 3D interactive sewing machine visualization
- Smooth scroll animations
- Responsive design
- Professional course catalog
- Contact forms and admission portal

## Tech Stack

- **Vite** - Build tool
- **React** - UI framework
- **TypeScript** - Type safety
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling
- **Three.js (via @react-three/fiber)** - 3D graphics
- **Framer Motion** - Animations

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your changes to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

### Manual Deployment

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components
├── lib/            # Utility functions
├── hooks/          # Custom React hooks
└── main.tsx        # Application entry point
```

## Features

- **Home Page** - Main landing with hero section and course overview
- **Art of Sewing** - 3D interactive storytelling experience
- **Courses** - Detailed program information
- **Contact** - Admission inquiries and location

## License

© 2026 Jayam Fashion Institute. All rights reserved.
