# harinarayanaraochepuri/portfolio

This repository contains a single-page portfolio for Hari Narayana Rao Chepuri.

Local preview:
1. Serve the folder with a static server (or open index.html directly).
   - Quick: `npx http-server -c-1` (if you have Node) or open index.html in the browser.

How to create the new public repository on GitHub and push these files
(Option A — using GitHub CLI `gh` — easiest):

# from the project root
git init
git add .
git commit -m "Initial portfolio: Hari Narayana Rao Chepuri"
# create repo and push (public)
gh repo create harinarayanaraochepuri/portfolio --public --source=. --remote=origin --push

(Option B — manual via GitHub website)
1. Create a new repository on GitHub: https://github.com/new
   - Repository name: `portfolio`
   - Owner: `harinarayanaraochepuri`
   - Public
   - Do NOT initialize with README (we already have one)
2. After creation, follow the instructions GitHub gives:
   git remote add origin https://github.com/harinarayanaraochepuri/portfolio.git
   git branch -M main
   git push -u origin main

Enable GitHub Pages (to publish the site)
1. Go to Settings → Pages (or https://github.com/harinarayanaraochepuri/portfolio/settings/pages)
2. Under "Source" select branch `main` and folder `/ (root)`, save.
3. GitHub will build and provide a site URL: https://harinarayanaraochepuri.github.io/portfolio

Notes
- The site includes a placeholder link to `resume.pdf`. Upload your actual PDF to the repo root as `resume.pdf` to enable download.
- Skills list should be added by editing `js/main.js` or injecting `window.SKILLS` within index.html. (I can add them once you paste them.)
