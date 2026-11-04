# Taltasic Web (Astro)

This is a work in progress to build out the Taltasic Web Figma design.

## Project Setup
- We are using Astro, Tailwind CSS (v4), GSAP, Lenis, and Three.js as requested.
- Because of Node.js engine compatibility issues on the container (v22.22.1 instead of >=22.23.4), I temporarily lowered the engine requirement to >=22.0.0 and used Astro version 5, then installed Tailwind via the vite plugin to get the base running.

## Current Progress
- A basic Astro project structure is created with layout, UI, and section components.
- The `src/assets/images`, `src/assets/svg`, and `src/assets/models` directories have the files provided in the attachments.
- We have set up `src/styles/global.css` with Tailwind 4 syntax and CSS variables for colors, fonts, and easings from the prompt.
- Global Lenis smooth scrolling configuration (`src/scripts/lenis.ts`).
- Preloader logic with a progress bar that unlocks Lenis scrolling.
- Custom Cursor with magnetic effects and hover states (`Cursor.astro`).
- Sections Built:
    - Navbar (glassmorphism on scroll, hover roll animations).
    - Hero (3D model using `Three.js` integration in `ThreeKnife.astro`, pointer-events management, fallback image, GSAP mouse parallax script `hero-mouse.ts`).
    - About (Text reveal scrubbed to scroll, count-up animation, image reveal).
    - Services (Grid layout, Phosphor icons, hover glowing cards, staggered entrance).
    - Projects (Grid layout, hover scale, category tagging).
    - Testimonials (Grid layout, star ratings).
    - CTA (Magnetic button, infinite huge marquee, split text entrance).
    - Footer (Wordmark background, link hover rolls, back to top function).
- The project builds successfully with `npm run build`.

## To Do (Following Figma rules in Prompt)
- [x] Integrate the actual 3D model canvas in a separate component.
- [x] Read the provided Figma link/files for typography (Clash Display, etc) and colors. (Approximated based on prompt tokens).
- [x] Add Phosphor Icons to components.
- [x] Implement the Preloader.
- [x] Implement the Navbar and Footer.
- [x] Implement the About, Services, Projects, Testimonials and CTA sections as outlined in the prompt.
- [ ] Ensure font assets (Clash Display, Inter) are loaded properly (e.g. via @fontsource if this were a full production deploy, currently relying on system/fallback).
- [ ] Check accessibility, performance, and responsive behavior thoroughly on a real device.
- [ ] Fix any layout shifts that might occur before fonts/models load.

## Note on 3D Model
The 3D model `chef_knife.glb` is loaded using `GLTFLoader` in the `ThreeKnife.astro` component and rotated continuously. Environment mapping is applied for metallic reflections.

## Note on GSAP / ScrollTrigger
The animations make heavy use of GSAP and ScrollTrigger. `lenis.ts` correctly pipes scroll events into `ScrollTrigger.update`.
