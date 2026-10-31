# Navin | Software Engineer Portfolio

A fast, single-page developer portfolio built with **React 18, TypeScript, Vite and Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check and build to dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Make it yours

Everything a recruiter sees is driven by data, so you rarely need to touch components.
Search the project for `TODO` to find every placeholder.

| What | Where |
| --- | --- |
| Name, intro, contact email, social links, about text, research project | `src/data/site.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Experience & education | `src/data/experience.ts` |
| Colours and fonts | `@theme` block in `src/styles/globals.css` |

### Images and CV

- `public/images/profile.jpeg`: your portrait (square works best)
- `public/images/projects/project-01.jpg` … `project-03.jpg`: project screenshots (16:9 works best)
- `public/images/favicon.svg`: browser tab icon
- `public/Navin-CV.pdf`: **replace this placeholder with your real CV**

If an image is missing, the page shows a tidy fallback instead of a broken icon.

## Project structure

```
src/
├── components/   reusable UI (Navbar, Button, ProjectCard, ...)
├── sections/     one file per page section (Hero, About, Skills, ...)
├── data/         content: site info, projects, skills, experience
├── hooks/        useScroll: navbar state + active section tracking
├── styles/       globals.css: Tailwind import and theme tokens
├── App.tsx
└── main.tsx
```

## Deploying

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Build command: `npm run build`, output directory: `dist`.
For GitHub Pages under a repo path, set `base: "/your-repo-name/"` in `vite.config.ts`.
