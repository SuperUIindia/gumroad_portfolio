# Complete Project Setup, Architecture & Customization Guide

Welcome to the **Akhil Thadaka Portfolio Website** codebase! This comprehensive guide walks you through the initial setup, dependency installation, step-by-step commands, full project architecture, application routes/navigation, and how to change the receiving email address for all contact forms.

---

## Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step-by-Step Installation & Setup](#2-step-by-step-installation--setup)
3. [All Available Commands](#3-all-available-commands)
4. [Email & Contact Forms Configuration (How to Change Receiving Email)](#4-email--contact-forms-configuration)
5. [Application Navigation & Section Routes](#5-application-navigation--section-routes)
6. [Complete Project Directory Structure & File Explanations](#6-complete-project-directory-structure--file-explanations)
7. [Personalization & Asset Customization Guide](#7-personalization--asset-customization-guide)
8. [Production Deployment Guide](#8-production-deployment-guide)

---

## 1. Prerequisites

Before running the website locally, ensure your system has:
* **Node.js**: Version 18.0.0 or higher (Node 20+ LTS recommended). Check with:
  ```bash
  node -v
  ```
* **npm**: Version 9.0.0 or higher (comes bundled with Node.js). Check with:
  ```bash
  npm -v
  ```
* A modern web browser (Google Chrome, Microsoft Edge, Brave, Firefox, or Safari).

---

## 2. Step-by-Step Installation & Setup

### Step 1: Extract or Open the Project Folder
If you downloaded the portfolio as a `.zip` file, extract it to your desired directory.
Open your terminal (PowerShell, Command Prompt, or bash) and navigate inside the `Portfolio` root directory:
```bash
cd Portfolio
```

### Step 2: Install All Dependencies
Install the required packages declared in `package.json` (React 19, Vite 8, Tailwind CSS 4, Framer Motion, Lucide Icons, etc.):
```bash
npm install
```
> **Tip**: If you ever experience caching or dependency issues in the future, run:
> ```bash
> npm clean-install
> ```

### Step 3: Configure Environment Variables
Create or verify your `.env` file in the root `Portfolio/` directory:
```env
VITE_WEB3FORMS_KEY_1=529093fb-c73b-4b23-a1c0-e6e9adba11df
VITE_WEB3FORMS_KEY_2=33a8e8b3-40aa-4d83-b9c7-956d3f64ca57
```
*(See [Section 4](#4-email--contact-forms-configuration) below for how to replace these with your own keys to receive form submissions at your own email).*

### Step 4: Run the Local Development Server
Start the Vite development server:
```bash
npm run dev
```
Once started, your terminal will display a local URL:
```
  VITE v8.1.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Hold `Ctrl` and click the link, or open `http://localhost:5173/` in your browser.

---

## 3. All Available Commands

Here are all the scripts available in `package.json`:

| Command | Purpose | Details |
| :--- | :--- | :--- |
| `npm run dev` | **Start Development Server** | Runs Vite with Hot Module Replacement (HMR) for instant live reloading. |
| `npm run build` | **Build for Production** | Bundles and minifies all assets into the `/dist` directory for live deployment. |
| `npm run preview`| **Preview Production Build** | Launches a local server serving the compiled `/dist` output to test prior to deploying. |
| `npm run lint` | **Run Code Linter** | Runs Oxlint to inspect JavaScript and JSX for syntax and lint issues. |

---

## 4. Email & Contact Forms Configuration

All forms across the portfolio are powered by **Web3Forms**, which forwards inquiries directly to your registered email address without requiring a custom backend or database server.

### Where Form Submissions Go
Form emails are sent to whichever email address generated the Web3Forms Access Key.

### How to Change the Receiving Email Address (Step-by-Step):

1. **Get your free Web3Forms Access Key**:
   * Visit: [https://web3forms.com](https://web3forms.com)
   * Enter the **exact email address** where you want to receive inquiries.
   * Click **Create Access Key**.
   * Web3Forms will immediately send an email to that address containing your unique Access Key (e.g., `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).

2. **Update your `.env` file**: chnage file name .env_example to .env
   Open `Portfolio/.env` and paste your new key:
   ```env
   VITE_WEB3FORMS_KEY_1=your-new-web3forms-access-key-here
   VITE_WEB3FORMS_KEY_2=your-new-web3forms-access-key-here
   ```

3. **Central Configuration in Code**:
   The keys are securely managed in `src/config/contactConfig.js`:
   ```javascript
   export const CONTACT_CONFIG = {
     accessKey: import.meta.env.VITE_WEB3FORMS_KEY_1 || "your-fallback-key-here",
     accessKey2: import.meta.env.VITE_WEB3FORMS_KEY_2 || "your-fallback-key-here",
   };
   ```

4. **All Forms Covered**:
   Every form in the codebase automatically reads from `CONTACT_CONFIG`:
   * **`src/components/ContactSection.jsx`**: The main pro contact form above the footer.
   * **`src/components/ContactModal.jsx`**: The "Contact" button popup modal in the navbar.
   * **`src/components/HireForm.jsx`**: The "Hire Me" comprehensive project inquiry modal.
   * **`src/components/ContactForm.jsx`**: The reusable contact form component.

---

## 5. Application Navigation & Section Routes

The portfolio is built as a high-performance **Single Page Application (SPA)** utilizing smooth section scrolling and interactive popups.

### Navigation Hash Routes:
* **`#home`** — **Hero Section**
  * Profile visual, large typography, "Available for Work" badge, Bio summary.
  * **Download Resume** button (direct download of `Akhil_Thadaka_Resume.pdf`).
  * "See my works" quick scroll button.
* **`#about`** — **About & Stats**
  * Designer/Engineer introduction, metrics (years experience, projects completed, client reviews).
* **`#skills`** — **Skills & Integrations**
  * Interactive tech stack showcase (Figma, React, Tailwind, Node, TypeScript, etc.).
* **`#projects`** — **Featured & Future Projects**
  * Project showcases with responsive card reveal ("Load More").
  * Click any project card to open the **Live Project Modal preview** with details, tags, and direct links.
* **`#certificates` / `#credentials`** — **Certificates & Training**
  * Accredited certifications with preview images, issued dates, and credential links.
* **`#experience`** — **Professional Experience Timeline**
  * Career journey, roles, company names, dates, and responsibilities.
* **`#contact`** — **Get In Touch (Pro Contact Section)**
  * Direct contact options (Email copy with 1-click clipboard, Phone/WhatsApp direct chat, Local IST time).
  * Interactive inquiry form with service chip selector, budget range picker, and instant feedback.

### Interactive Modals:
* **`ProjectModal.jsx`**: Modal popup triggered by clicking any project card.
* **`ContactModal.jsx`**: Contact inquiry modal triggered from Navbar or mobile menu.
* **`HireModal.jsx`**: Comprehensive requirements collection modal.
* **`MorphedMenu.jsx`**: Fullscreen mobile navigation overlay with smooth morph animations.

---

## 6. Complete Project Directory Structure & File Explanations

```
Portfolio/
├── .env                       # Environment variables (Web3Forms API keys)
├── .gitignore                 # Files ignored by git (node_modules, dist, etc.)
├── .oxlintrc.json             # Oxlint configuration for fast code linting
├── index.html                 # HTML entry point with fonts & metadata
├── package.json               # Project manifest, dependencies, and npm scripts
├── package-lock.json          # Locked dependency version tree
├── vite.config.js             # Vite configuration with Tailwind & React plugins
├── README.md                  # Project overview
├── guide.md                   # Complete setup, commands & architecture manual (This file)
│
├── public/                    # Static public assets served directly
│   ├── favicon1.svg           # Browser tab favicon
│   ├── icons.svg              # SVG sprites and utility icons
│   ├── resume.pdf             # Akhil's downloadable resume file
│   └── superui.png            # Preview graphics
│
└── src/                       # Application source code
    ├── main.jsx               # React DOM root entry point
    ├── App.jsx                # Main application component & layout orchestrator
    ├── App.css                # Component-specific styles & custom animations
    ├── index.css              # Global styles, Tailwind imports & CSS custom properties
    │
    ├── assets/                # Bundled assets (processed by Vite)
    │   ├── hero.png           # Profile/Hero graphic
    │   ├── react.svg          # React branding SVG
    │   └── vite.svg           # Vite branding SVG
    │
    ├── config/                # Central configurations
    │   └── contactConfig.js   # Centralized Web3Forms keys & access management
    │
    └── components/            # Reusable UI Components
        ├── AboutStats.jsx            # About summary & animated metrics counters
        ├── CertificatesTraining.jsx  # Certificates & training credentials grid
        ├── CircularWave.jsx          # Circular wave decorative visual component
        ├── ContactForm.jsx           # Reusable standalone contact form
        ├── ContactModal.jsx          # Quick contact popup modal
        ├── ContactSection.jsx        # Full-width pro contact form above footer
        ├── Experience.jsx            # Professional career timeline & roles
        ├── Footer.jsx                # Bottom footer with social links & copyright
        ├── Hero.jsx                  # Hero section with resume download & headline
        ├── HireForm.jsx              # Detailed project intake form with budget/type
        ├── HireModal.jsx             # Modal container for the HireForm
        ├── Integrations.jsx          # Interactive skills & tech ecosystem display
        ├── MorphedMenu.jsx           # Animated mobile morphing menu
        ├── Navbar.jsx                # Sticky/fixed header with logo & navigation links
        ├── Preloader.jsx             # Initial staggered screen loading animation
        ├── ProjectModal.jsx          # Project detailed pop-up preview modal
        ├── Projects.jsx              # Featured & Future Projects section
        ├── PropertyCard.jsx          # Card layout helper for project tiles
        ├── SearchWidget.jsx          # Filter/search bar utility widget
        └── Testimonials.jsx          # Client testimonials and review cards
```

### Detailed Breakdown of Key Files:

#### Root Files
* **`index.html`**: Defines the HTML shell, viewport settings, title tag ("Akhil Thadaka | UI/UX Designer & Developer"), favicon link, and the `#root` mount target.
* **`vite.config.js`**: Configures Vite with the `@vitejs/plugin-react` and `@tailwindcss/vite` plugins for compiling modern Tailwind v4.
* **`package.json`**: Lists external libraries including `framer-motion` (for smooth physics-based animations), `lucide-react` (for icons), and `react` / `react-dom`.
* **`.env`**: Holds `VITE_WEB3FORMS_KEY_1` and `VITE_WEB3FORMS_KEY_2`. Kept safe and customizable.

#### `src/config/`
* **`contactConfig.js`**: Central point of truth for contact email forwarding. Any form in the app imports from here, so you only need to change keys in one place.

#### `src/components/`
* **`Navbar.jsx`**: Renders the responsive desktop navigation bar, brand logo, mobile toggle, and triggers `ContactModal` and `HireModal`.
* **`Hero.jsx`**: The initial viewport section. Contains the primary "Download Resume" pill button, portrait visuals, and role headline.
* **`AboutStats.jsx`**: Shows background information with high-impact numerical stats (Experience, projects, satisfaction rate).
* **`Integrations.jsx`**: Renders visual icons representing tools (Figma, React, Tailwind, Git, Node.js, etc.).
* **`Projects.jsx`**: Handles projects listing with category filtering, dynamic "Load More" pagination, and triggers `ProjectModal.jsx`.
* **`ProjectModal.jsx`**: An animated modal displaying project mockups, live demo links, source code links, and tech stack tags.
* **`CertificatesTraining.jsx`**: Card display of professional certifications and verified training with skills tags and certificate viewer.
* **`Experience.jsx`**: Vertical timeline displaying past and current professional roles, company names, tenures, and achievements.
* **`ContactSection.jsx`**: Full-featured pro inquiry section with interactive service selection chips, budget range selector, live IST local time indicator, and 1-click email copy.
* **`Preloader.jsx`**: Staggered loading screen displayed on initial page load for a polished first impression.
* **`Footer.jsx`**: Dark-themed concluding footer with copyright, back-to-top action, and social profile links.

---

## 7. Personalization & Asset Customization Guide

### Updating Your Resume
To update the downloadable resume:
1. Save your new resume PDF with the name `resume.pdf`.
2. Replace `Portfolio/public/resume.pdf` with your file.
3. The "Download Resume" button in the Hero section will automatically download your updated PDF as `Akhil_Thadaka_Resume.pdf`.

### Changing Contact Email & Phone Number
* In **`src/components/ContactSection.jsx`**:
  * Update the direct email in lines 48 & 183.
  * Update the phone number and WhatsApp link in lines 207 & 214.
* In **`src/components/Footer.jsx`**:
  * Update social links and email in the footer.

### Adding or Editing Projects
Open **`src/components/Projects.jsx`**:
* Modify the `projects` or `futureProjects` array with your project titles, descriptions, tags, images, and live links.

---

## 8. Production Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Set the **Root Directory** to `Portfolio` (if the repo contains the parent folder).
4. In the **Environment Variables** section, add:
   * `VITE_WEB3FORMS_KEY_1` = `your-access-key`
   * `VITE_WEB3FORMS_KEY_2` = `your-access-key`
5. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Under Site Settings > Environment Variables, add `VITE_WEB3FORMS_KEY_1`.
5. Click **Deploy Site**.

---

*Enjoy building with your portfolio! If you have any questions or want to customize further, feel free to ask.*

