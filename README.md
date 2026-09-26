# balzo.io

<p align="center">
  <img src="rocket.svg" alt="balzo.io logo" width="80" />
</p>

<p align="center">
  A static marketing site for <strong>balzo.io</strong> — AI-powered development automation tools for building faster, testing smarter, and deploying with confidence.
</p>

## Overview

balzo.io is a single-page site built with plain HTML, Tailwind CSS (via CDN), and vanilla JavaScript. It has no build step or dependencies to install — open `index.html` and it runs.

## Features

- **Light/dark theme toggle** — switches instantly, remembers your choice in `localStorage`, and falls back to your OS preference on first visit
- **Responsive layout** — adapts from mobile through desktop, including a dedicated mobile navigation menu
- **Scroll animations** — sections fade and rise into view as you scroll, powered by the Intersection Observer API
- **Contact form** — client-side validated with inline submit feedback
- **Social links** — direct links to GitHub, LinkedIn, WhatsApp, and email

## Tech Stack

| Layer      | Technology                     |
|------------|---------------------------------|
| Markup     | HTML5                          |
| Styling    | Tailwind CSS (CDN) + custom CSS |
| Behavior   | Vanilla JavaScript (ES6+)       |
| Icons      | Font Awesome 6                  |
| Animations | Intersection Observer API       |

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor, if you plan to make changes (VS Code recommended)

### Run Locally

```bash
git clone <repository-url>
cd balzo.io
```

Then open `index.html` directly in your browser — no server or build step required.

## Project Structure

```
balzo.io/
├── index.html      # Page markup, Tailwind config, and inline styles/scripts
├── motion.js        # Scroll-reveal animation logic
├── rocket.svg        # Site logo/favicon
└── README.md
```

## Customization

### Theme

Click the circular moon/sun button in the top-right corner to switch between light and dark mode. The choice is saved automatically and restored on your next visit.

### Content

Most content lives directly in `index.html`:

| Section  | What to edit                                  |
|----------|------------------------------------------------|
| Navbar   | Logo text, nav links, "Get Started" CTA        |
| Hero     | Headline, subheading, primary/secondary buttons |
| Contact  | Form fields, intro copy, alternate contact links |
| Footer   | Link columns, copyright, social icons           |

### Social & Contact Links

Update these values wherever they appear in `index.html`:

- GitHub: `https://github.com/nymulislam`
- LinkedIn: `https://linkedin.com/in/nymulislam`
- WhatsApp: `+8801822667737`
- Email: `naymulislam241@gmail.com`

## License

No license has been specified for this project. All rights reserved by the author unless stated otherwise.
