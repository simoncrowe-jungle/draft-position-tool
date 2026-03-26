# US Military Draft Position Tool

Interactive viral tool for VT — estimates a user's position in a hypothetical US military draft based on Selective Service criteria.

## Deploy to Railway

### Option A: Deploy via GitHub (recommended)

1. Push this folder to a new GitHub repo:
   ```bash
   cd draft-tool
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin git@github.com:YOUR_ORG/draft-position-tool.git
   git push -u origin main
   ```

2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**

3. Select the repo → Railway will auto-detect the config and deploy

4. Once deployed, go to **Settings → Networking → Generate Domain** to get a public URL

5. (Optional) Add a custom domain like `draft.vt.co`:
   - In Railway: **Settings → Networking → Custom Domain** → enter `draft.vt.co`
   - In your DNS provider: add a CNAME record pointing `draft.vt.co` → your Railway domain


### Option B: Deploy via Railway CLI

1. Install the CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

3. Generate a public domain:
   ```bash
   railway domain
   ```

## Project Structure

```
draft-tool/
├── public/
│   └── index.html    ← The tool (single self-contained file)
├── package.json      ← Serves static files via 'serve'
├── railway.toml      ← Railway deployment config
└── README.md
```

## Custom Domain Setup

To serve this at `draft.vt.co` or `vt.co/draft`:

- **Subdomain (draft.vt.co)**: Add CNAME in DNS → Railway custom domain
- **Path (vt.co/draft)**: Set up a reverse proxy or redirect rule in your main VT infrastructure to forward `/draft` to the Railway URL

## Embedding in a VT Article

If embedding inside a VT article via the CMS:

```html
<iframe 
  src="https://draft.vt.co" 
  width="100%" 
  height="900" 
  frameborder="0"
  style="border:none; max-width:640px; margin:0 auto; display:block;">
</iframe>
```
