# Tali Landing Page Implementation Plan

> **For Antigravity:** REQUIRED WORKFLOW: Use `.agent/workflows/execute-plan.md` to execute this plan in single-flow mode.

**Goal:** Build a beautiful, simple, premium "coming soon" landing page for "tali" (coffee and filipino-inspired french patisserie) using an ambient hero image focus. Expected to be hosted on GitHub Pages via Actions.

**Architecture:** A static single page using Vanilla HTML, CSS, and JS (via Vite for easy bundling and deployment). The page features a full-screen ambient background, a central frosted-glass (glassmorphism) element with elegant typography for the logo and concept, and a minimal footer for the Instagram link placeholder.

**Tech Stack:** Vanilla HTML, CSS, JS, Vite, GitHub Actions.

---

### Task 1: Initialize Project 

**Files:**
- Create: `package.json`, `index.html`, `main.js`, `style.css`
- Modify: N/A

**Step 1: Scaffold Vite Project**
Run: `npx -y create-vite@latest ./ --template vanilla`
Expected: Project initialized

**Step 2: Clean up default Vite boilerplate**
Remove standard Vite logos and boilerplate code from `index.html`, `main.js`, and `style.css`. 

**Step 3: Setup Google Fonts**
Add import for `Inter` and `Playfair Display` (or similar elegant serif/sans-serif combination) to `index.html`.

**Step 4: Commit**
`git add package.json index.html main.js style.css && git commit -m "chore: initialize vanilla vite project"`

---

### Task 2: Implement Base Styles and Variables

**Files:**
- Modify: `style.css`

**Step 1: Write CSS Variables**
Define brand colors (dark overlays, white/off-white text, subtle border colors) and typography variables in `:root`.

**Step 2: Add CSS Reset and Base Styles**
Add box-sizing, remove body margins, and set base typography. Ensure body takes full viewport height (`100vh`) with `overflow: hidden` for the static poster feel.

**Step 3: Commit**
`git add style.css && git commit -m "style: add base css reset, colors, and typography"`

---

### Task 3: Implement The Hero Layout & Background

**Files:**
- Create: `public/hero-bg.webp` (using `generate_image`)
- Modify: `index.html`, `style.css`

**Step 1: Generate Placeholder Background**
Use the `generate_image` tool to create a moody, premium picture of coffee and patisserie for the background. Note: artifact image will be saved as webp.

**Step 2: Build HTML Structure**
Add a `<div class="hero-wrapper">` containing the background image and a dark overlay layer.

**Step 3: Apply Styles**
Style `.hero-wrapper` to cover the screen. Ensure the background image is cleanly centered (`background-size: cover`). Apply a semi-transparent dark overlay to ensure text readability.

**Step 4: Commit**
`git add public/hero-bg.webp index.html style.css && git commit -m "feat: implement hero background image and overlay"`

---

### Task 4: Build the Main Content Area (Glassmorphism)

**Files:**
- Modify: `index.html`, `style.css`

**Step 1: Build HTML Structure**
Inside `.hero-wrapper`, add a `<main class="content-card">` containing the "tali" logo/title (`<h1>`) and the concept statement (`<p>`).

**Step 2: Apply Styles**
Style `.content-card` using flexbox to center it on the screen. Add glassmorphism effects (`backdrop-filter: blur(10px)`, subtle white transparent border, semi-transparent background). Style the typography (large, elegant serif for the title; clean, spaced sans-serif for the concept).

**Step 3: Commit**
`git add index.html style.css && git commit -m "feat: build central glassmorphism content card"`

---

### Task 5: Add Instagram Placeholder

**Files:**
- Modify: `index.html`, `style.css`

**Step 1: Add HTML Structure**
Add a `<footer>` at the bottom of `.hero-wrapper` containing a simple anchor tag for Instagram (`#` for now).

**Step 2: Apply Styles**
Position the footer absolutely at the bottom, centered. Add subtle hover micro-animations (e.g., slight opacity change or upward nudge) to the Instagram link.

**Step 3: Commit**
`git add index.html style.css && git commit -m "feat: add instagram footer placeholder"`

---

### Task 6: Custom Domain & Vite Configuration

**Files:**
- Create: `vite.config.js`

**Step 1: Create Vite Config structure**
Add `vite.config.js` to ensure the build outputs cleanly without strict base paths (which is often needed for custom domains or root GitHub pages).

**Step 2: Commit**
`git add vite.config.js && git commit -m "chore: setup vite config"`

---

### Task 7: GitHub Actions Setup

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create Workflow File**
Write a standard GitHub Actions YAML file that runs `npm install` and `npm run build`, then deploys the `dist` folder to GitHub Pages. Ensure it provides permissions for Pages deployment.

**Step 2: Commit**
`git add .github/workflows/deploy.yml && git commit -m "ci: add github actions workflow for pages deployment"`

---

## Verification Plan

### Automated Tests
* None for HTML/CSS landing site.

### Manual Verification
* Run `npm run dev` and visually verify the landing page (responsive, layout, animations).
* Verify typography and glassmorphism styling creates a "wow" factor.
* Trigger a test build locally (`npm run build`) to ensure assets are bundled correctly.
