# How to Enable Automatic Deployment

Replit's default GitHub integration doesn't allow creating "Workflow" files automatically for security reasons. You need to add this file manually on GitHub.

1.  Go to your repository on GitHub.
2.  Click **Add file** > **Create new file**.
3.  Name the file: `.github/workflows/deploy.yml`
    *(Make sure to include the dot at the start and the folders)*
4.  Paste the content below into the file:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main, master ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npx vite build --base ./

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5.  Click **Commit changes**.
6.  Go to **Settings** > **Pages** in your repo and ensure "Source" is set to **GitHub Actions**.
