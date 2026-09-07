# Tobams Group — Frontend Intern Assessment

A responsive static implementation of the Tobams Group website based on the provided Figma design.

## Live Demo

**Live URL:**  https://tobams-sepia.vercel.app/

**GitHub Repository:** https://github.com/thebuildingjack/tobams

## Design Reference

The implementation is based on the official assessment Figma design:

[Frontend Intern Assessment — Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS v4
- Next/Image
- Next/Font
- Vercel

No CSS frameworks or UI component libraries other than Tailwind CSS were used.

---

## Features

- Fully responsive layout for mobile, tablet, and desktop
- Responsive navigation with mobile menu
- Reusable button component
- Data-driven navigation and footer links
- Responsive testimonial section with navigation controls
- Responsive content sections matching the provided Figma design
- Optimized images using `next/image`
- Fonts loaded using `next/font`
- Semantic HTML structure
- Accessible navigation, links, buttons, and images

---

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhatWeDo.tsx
│   ├── ManagementDevProgram.tsx
│   ├── TransformationHub.tsx
│   ├── TrainingConsultant.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   ├── CTA.tsx
│   └── ImageButton.tsx
│
├── data/
│   └── index.ts
│
├── public/
│   ├── images/
│   └── *.svg
│
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
