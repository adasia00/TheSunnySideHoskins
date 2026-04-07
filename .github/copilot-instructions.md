<!-- Use this file to provide workspace-specific custom instructions to Copilot. -->

## The Sunny-Side Reunion Landing Page - Development Guide

### Project Overview

Premium luxury landing page for The Sunny-Side: Hoskins Family Reunion.

### Tech Stack

- Next.js 15 (App Router) with TypeScript
- Tailwind CSS 3 for styling
- Framer Motion 11 for animations
- React Hook Form for form validation

### Design System

- **Color Palette**: Gold (#d9a03c), White (#faf8f5), Charcoal (#1a1a1a), Light Blue (#8ecae6)
- **Typography**: Playfair Display (headings), Inter/Montserrat (body)
- **Style**: High-end editorial, generous white space, parallax scrolling

### Component Structure

- `Hero.tsx` - Full-screen cinematic hero with CTA
- `Vision.tsx` - Family reunion introduction and travel context
- `EldersCommittee.tsx` - Elders and committee highlight card
- `Amenities.tsx` - Heritage, itinerary, and lodging highlights grid
- `PaymentSchedule.tsx` - Payment schedule and deadlines
- `Contact.tsx` - RSVP links and connect section
- `Footer.tsx` - Navigation & links

### Getting Started

1. `npm install` - Install dependencies
2. `npm run dev` - Start dev server at localhost:3000
3. `npm run build` - Build for production
4. `npm start` - Run production build

### Development Guidelines

- Use Framer Motion for all animations
- Keep components modular and reusable
- Ensure mobile-first responsive design
- Use Tailwind for styling (no CSS modules unless necessary)
- All sections should have scroll-trigger animations via useInView hook

### Common Tasks

- **Add new section**: Create component in `/components`, import in `app/page.tsx`
- **Customize colors**: Edit `tailwind.config.ts` color palette
- **Update content**: Edit component text directly
- **Add form field**: Update `Contact.tsx` form fields and validation rules
- **Add animations**: Use Framer Motion variants in components

### Performance Tips

- Components use `useInView` for scroll-trigger animations
- Use `triggerOnce: true` to prevent animation replay
- Lazy load images with Next.js Image component
- Keep animation performance in mind for mobile devices

### Deployment

- Build artifact: `.next/` directory
- Next.js deployment: Vercel (recommended) or any Node.js hosting
- Environment variables: Add `.env.local` if needed

---

_Last updated: March 24, 2026_
