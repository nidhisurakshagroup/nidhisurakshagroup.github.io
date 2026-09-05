# Nidhi Suraksha Group — Website

A responsive, static website for Nidhi Suraksha Group. It is designed for GitHub Pages and uses no server-side code.

## Files

- `index.html` — complete website
- `style.css` — responsive styling
- `script.js` — menu, year and Google Form integration
- `images/` — place your logo/other images here later
- `.github/workflows/deploy.yml` — automatic GitHub Pages deployment

## Google Form integration

1. Create/publish your Google Form.
2. Use Google Forms' **Embed** option and copy the embed URL.
3. Open `script.js`.
4. Set:
   `const GOOGLE_FORM_EMBED_URL = "YOUR_EMBED_URL";`
5. Commit the change to GitHub.

Recommended form questions:
- Full Name (required)
- Mobile Number (required)
- What do you need? — Health / Motor / LIC / Life / Investment / Home / Business / Personal Accident / Not sure
- City
- WhatsApp Number
- Email
- Age
- Requirement / Query
- Preferred Contact Method — Phone / WhatsApp
- Preferred Contact Time — Morning / Afternoon / Evening

For lead management, link the Form responses to Google Sheets.

## GitHub Pages deployment

### Option A — easiest
1. Sign in to GitHub.
2. Create a **public** repository named `nidhi-suraksha-group`.
3. Upload the contents of this folder (make sure `index.html` is at repository root).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. The included workflow will deploy the site after the workflow runs.
7. Your project site will normally be:
   `https://YOUR-USERNAME.github.io/nidhi-suraksha-group/`

### Option B — Deploy from branch
For a simple static site, GitHub also supports publishing from a branch:
Settings → Pages → Source → Deploy from a branch → `main` → `/ (root)`.

## Contact details configured

- 8882429708
- 8393970533
- nidhisurakshagroup@gmail.com

## Important

Do not put customer documents, Aadhaar numbers, passwords, payment-card data or other sensitive information in this GitHub repository. Keep lead responses in your controlled Google Form/Google Sheet environment.

The website uses general insurance wording. Final coverage, premium, underwriting, exclusions, claims and policy terms are subject to the relevant insurer and policy wording.
