# Personal Portfolio Website

A responsive multi-page portfolio built with **React** and **Tailwind CSS**. It presents my
skills, education and projects in one place. Built as the final project of a 10-day
Frontend Development Training at Shahid Smarak College.

**Live demo:** https://my-portfolio-teal-beta-55.vercel.app/

## Features

- Six pages with React Router: Home, About, Skills, Education, Projects and Contact
- Shared layout with a header and footer on every page
- Project category filter and live search
- Contact form with validation and a success message
- Dark and light mode toggle
- Responsive layout for mobile, tablet and desktop, with a hamburger menu on small screens
- Reusable components with props, state, conditional rendering and lists with `.map()`

## Tech Stack

| Tool | Purpose |
|---|---|
| React (Vite) | Building the UI from components |
| Tailwind CSS | Styling and responsive design |
| React Router | Page navigation |
| Lucide React / React Icons | Icons |
| Git and GitHub | Version control |

## Run Locally

```bash
git clone https://github.com/rhythmtanduk/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

## Folder Structure

```
src/
  assets/       images and icons
  components/   Header, Footer, IntroSection, SkillCard, ProjectCard,
                EducationItem, ContactForm, ThemeToggle
  layouts/      RootLayout
  pages/        Home, About, Skills, Education, Projects, Contact
  data/         data.js (profile, skills, education, projects)
  main.jsx      router setup
  index.css     Tailwind import
```

## Author

Reji Tandukar, student at Shahid Smarak College
GitHub: https://github.com/rhythmtanduk