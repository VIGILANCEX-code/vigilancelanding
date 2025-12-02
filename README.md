# VigilanceX - AI Security Landing Page

This is a modern, responsive landing page for VigilanceX, an AI security startup. Built with React, Vite, and Tailwind CSS.

## Project Structure

- **Frontend**: React + Vite (in `client/`)
- **Styling**: Tailwind CSS v4 + Custom Design System
- **Assets**: Optimized images in `attached_assets/`

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev:client
    ```

## Building for GitHub Pages (Static Site)

To deploy this project to GitHub Pages or any static hosting:

1.  **Build Command**:
    Run the following command to generate a static build with relative paths (important for GitHub Pages):
    ```bash
    npx vite build --base ./
    ```

2.  **Output**:
    The built files will be in the `dist/public` directory.

3.  **Deploy**:
    - Push the contents of `dist/public` to your hosting provider.
    - Or use the included GitHub Action (see `.github/workflows/deploy.yml`) to deploy automatically.

## GitHub Actions

This repository includes a GitHub Action workflow to automatically deploy to GitHub Pages.
1.  Go to your repository **Settings** > **Pages**.
2.  Set "Source" to **GitHub Actions**.
3.  Push your code to the `main` branch.
4.  The workflow will build and deploy your site automatically.

## customization

- **Images**: Located in `attached_assets/` and imported via `@assets` alias.
- **Theme**: Colors and fonts are defined in `client/src/index.css`.
