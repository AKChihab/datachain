# Chihab Akaoui, portfolio

One-page site built from the May 2026 CV. All visible text lives in `src/data/profile.js`.

## Edit

Open `src/data/profile.js` and change the fields. Save the file. The page updates.

To add a photo, put a file in `public/` (for example `public/photo.jpg`) and set `photo` to `"/photo.jpg"`.

The download button serves `public/chihab-akaoui-cv.pdf` in English and `public/chihab-akaoui-cv-fr.pdf` in French. Replace those files to update the CV. The path is `cv` in `profile.js` and `profile.fr.js`.

The FR switch uses `src/data/profile.fr.js`. The facts match the English page. The May French CV is only the wording source.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually http://localhost:5173.

## Publish on Vercel

1. Push this repo to GitHub.
2. On vercel.com, import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.

Vercel gives you a public URL. You can attach a custom domain in the project settings.

## Publish on GitHub Pages

A workflow is already in `.github/workflows/pages.yml`. It builds the site on every push to `main` or `master`.

1. Push the repo.
2. In the repository: Settings, Pages, Build and deployment, Source: GitHub Actions.
3. After the action succeeds, the site is at `https://<user>.github.io/<repo>/`.

The build uses relative asset paths, so the same output works at the root of a domain and in a project subpath.
