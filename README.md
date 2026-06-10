# 🚀 Umindu Dinal — Portfolio

> A modern, animated personal portfolio website built with React 19, Tailwind CSS 4, and Framer Motion — showcasing projects, skills, experience, and a working contact form powered by EmailJS.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF008F?style=for-the-badge&logo=framer&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-F7DF1E?style=for-the-badge&logo=gmail&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

🌐 **Live Demo:** [umindudinal.github.io/Umindu_Dinal_Portfolio](https://umindudinal.github.io/Umindu_Dinal_Portfolio/)

---

## 📖 About

**Umindu Dinal's Portfolio** is a fully responsive single-page personal portfolio built with React 19, Tailwind CSS 4, Framer Motion animations, and deployed on GitHub Pages. It showcases 6 projects, 6 skill categories, 3 work experience entries, and a fully functional contact form that sends emails directly to the inbox via EmailJS — no backend required.

---

## ✨ Features

- 🏠 **Hero** — Animated introduction with name, role, *"View Work"* and *"Contact Me"* CTA buttons
- 👤 **About** — Profile section with 3 highlights: Innovative, Design Oriented, Clean Code
- 🛠️ **Skills** — 6 skill category cards with tech tags
- 💼 **Projects** — 6 project cards with description, tech stack, live demo and GitHub links
- 🧑‍💼 **Experience** — 3 work/education timeline entries
- 📬 **Contact Form** — Fully functional form (Name, Email, Message) — sends email via EmailJS with success/error feedback
- 🌙 **Dark Theme** — Dark background with purple accent colors throughout
- 🎞️ **Framer Motion** — Smooth scroll-triggered animations on all sections
- 📱 **Responsive Design** — Mobile-friendly with animated hamburger navigation menu
- 🚀 **GitHub Pages** — Deployed via `gh-pages`

---

## 💼 Featured Projects

| # | Project | Tech | Links |
|---|---------|------|-------|
| 1 | Tourist Web Application (GoCeylon) | React 19, Tailwind CSS 4, Vite | [Demo](https://umindudinal.github.io/GoCeylon/) · [Code](https://github.com/umindudinal/GoCeylon) |
| 2 | Full-Stack Developer Portfolio | React 19, Tailwind CSS 4, Framer Motion | [Demo](https://umindudinal.github.io/Umindu_Dinal_Portfolio/) · [Code](https://github.com/umindudinal/Umindu_Dinal_Portfolio) |
| 3 | Multi-Category Fashion E-commerce Store | React 19, CSS 3, React Router 7, Vite | [Demo](https://umindudinal.github.io/e-commerce-website/) · [Code](https://github.com/umindudinal/e-commerce-website) |
| 4 | Campus Event Planning & Management Portal | HTML 5, CSS 3, JS, PHP, MySQL | [Code](https://github.com/umindudinal/Web_Technology_CA) |
| 5 | E-Commerce Backend System (Spring Boot) | Spring Boot 3.5.6, Java 21, MySQL, Maven | [Code](https://github.com/umindudinal/E-Commerce-Backend-System-using-Spring-Boot) |
| 6 | Library Management Desktop App (C#) | C#, .NET Framework, SQL Server, WinForms | [Code](https://github.com/umindudinal/Library-Management-System-using-C-) |

---

## 🛠️ Tech Stack

| Technology | Version | Usage |
|------------|---------|-------|
| React | 19.2.0 | Component-based UI |
| Tailwind CSS | 4.1.18 | Utility-first styling |
| Framer Motion | 12.34.1 | Page & component animations |
| EmailJS Browser | 4.4.1 | Contact form email service |
| React Icons | 5.5.0 | Icon components |
| React Router DOM | 7.13.0 | Client-side routing |
| Vite | 7.3.1 | Build tool & dev server |
| gh-pages | 6.3.0 | GitHub Pages deployment |

---

## 📁 Project Structure

```
Umindu_Dinal_Portfolio/
│
├── index.html              # App entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
│
└── src/
    ├── main.jsx            # React DOM render entry
    ├── App.jsx             # Root component
    ├── index.css           # Global styles
    │
    ├── pages/
    │   └── Home.jsx        # Home page — assembles all sections
    │
    ├── components/
    │   ├── Navbar.jsx      # Navigation bar with mobile hamburger menu
    │   ├── Hero.jsx        # Hero banner with CTA buttons
    │   ├── About.jsx       # About section with highlights
    │   ├── Skills.jsx      # Skills cards with tags
    │   ├── Projects.jsx    # Projects grid section
    │   ├── ProjectCard.jsx # Reusable project card component
    │   ├── Work.jsx        # Work / Experience timeline
    │   ├── Contact.jsx     # Contact form with EmailJS integration
    │   └── Footer.jsx      # Footer
    │
    └── assets/
        ├── assets.js       # Centralized data (projects, skills, workData, aboutInfo)
        ├── profile.avif
        ├── aboutprofile.avif
        ├── logo.avif
        └── project1.avif ... project6.avif
```

---

## 🧭 Navigation Sections

| Section | Anchor |
|---------|--------|
| Home | `#home` |
| About | `#about` |
| Skills | `#skills` |
| Projects | `#projects` |
| Experience | `#experience` |
| Contact | `#contact` |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/umindudinal/Umindu_Dinal_Portfolio.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd Umindu_Dinal_Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173/Umindu_Dinal_Portfolio/
   ```

---

## 📧 EmailJS Setup (Contact Form)

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend.

To configure it for your own use, update the following values in `src/components/Contact.jsx`:

```js
emailjs.sendForm(
  'YOUR_SERVICE_ID',    // EmailJS → Email Services
  'YOUR_TEMPLATE_ID',   // EmailJS → Email Templates
  formRef.current,
  'YOUR_PUBLIC_KEY'     // EmailJS → Account → General
)
```

The email template uses these variables:

| Template Variable | Form Input `name` |
|-------------------|-------------------|
| `{{name}}` | `name` |
| `{{email}}` | `email` |
| `{{message}}` | `message` |

---

## 🚀 Deployment

Deployed to GitHub Pages via the `gh-pages` package:

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

Live at: **[umindudinal.github.io/Umindu_Dinal_Portfolio](https://umindudinal.github.io/Umindu_Dinal_Portfolio/)**

---

## 🔗 Connect With Me

| Platform | Link |
|----------|------|
| 💼 LinkedIn | [linkedin.com/in/umindu-dinal-700082254](https://www.linkedin.com/in/umindu-dinal-700082254/) |
| 🐙 GitHub | [github.com/umindudinal](https://github.com/umindudinal) |
| 🐦 Twitter | [twitter.com/umindudinal](https://twitter.com/umindudinal) |
| 🎨 Dribbble | [dribbble.com/umindudinal](https://dribbble.com/umindudinal) |

---

## 👨‍💻 Author

**Umindu Dinal**
- Undergraduate — Information Technology, ITUM
- 📍 Medirigiriya, Polonnaruwa, Sri Lanka
- 📧 umindudinal818@gmail.com
- 📞 +94 77 964 8818

---

## 📄 License

Copyright © 2025 Umindu Dinal. All Rights Reserved.

---

<p align="center">Built with ❤️ using React, Framer Motion & EmailJS</p>
