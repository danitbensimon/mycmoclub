# Deploy Guide — mycmoclub.com to Vercel

Step-by-step walkthrough to get this site live on Vercel with your custom domain.

---

## Step 1: Push the code to GitHub (5 min)

### 1a. Create a GitHub account (skip if you already have one)
Go to https://github.com/signup and create a free account.

### 1b. Create a new repository
1. Click the `+` icon (top right) → **New repository**
2. Repository name: `mycmoclub`
3. Set to **Private** (recommended — keeps your code private)
4. **Do NOT** check "Add README" (we already have one)
5. Click **Create repository**

### 1c. Push this folder to the repo
In your terminal, inside this project folder, run:

```bash
git init
git add .
git commit -m "Initial commit — migrated from Anima"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mycmoclub.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

GitHub may ask you to authenticate — follow the prompts.

---

## Step 2: Deploy to Vercel (3 min)

### 2a. Sign in to Vercel
Go to https://vercel.com and sign in (use "Continue with GitHub" — easiest).

### 2b. Import your repository
1. Click **Add New... → Project**
2. Find `mycmoclub` in the list and click **Import**
3. Vercel auto-detects Vite — **don't change any build settings**
4. **Before clicking Deploy**, expand "Environment Variables" and add:
   - Name: `RESEND_API_KEY`
   - Value: `re_...` (your Resend API key — get one at https://resend.com/api-keys)
5. Click **Deploy**

Wait ~60 seconds. You'll get a URL like `mycmoclub-xyz.vercel.app`.

### 2c. Test the staging deployment
Visit the Vercel URL. Click through every page:
- `/` → Home
- `/membership` → Membership
- `/ambassador` → Ambassador
- `/vendors` → Experts/Vendors
- `/privacy` → Privacy
- `/members` → Should show "Coming Soon"

Submit a test application — confirm it appears in HubSpot.

---

## Step 3: Set up Resend domain (5 min, one-time)

Without this, emails from `noreply@mycmoclub.com` will be rejected.

1. Go to https://resend.com/domains
2. Click **Add Domain** → enter `mycmoclub.com`
3. Resend shows you 3 DNS records (TXT, MX, and DKIM)
4. Add those records at your DNS provider (wherever mycmoclub.com is managed — probably your current host or a registrar like GoDaddy/Cloudflare)
5. Wait ~5 min, click **Verify** in Resend

Once verified, your `/api/send-email` endpoint will work.

---

## Step 4: Point your domain to Vercel (10 min)

### 4a. Add the custom domain in Vercel
1. In your Vercel project → **Settings → Domains**
2. Type `mycmoclub.com` → click **Add**
3. Vercel shows you DNS instructions. You'll see two options:
   - **A record** pointing to `76.76.21.21` (root domain)
   - **CNAME** pointing to `cname.vercel-dns.com` (for www)

### 4b. Update DNS at your domain registrar
Go to wherever `mycmoclub.com` DNS is currently managed. Before you change anything:

**Lower the TTL first** (24 hours before cutover):
- Find the existing A record for `mycmoclub.com`
- Change its TTL to 300 seconds (5 minutes)
- Save

**Then (24h later) change the records:**
- Update the A record for `@` (root) to `76.76.21.21`
- Add a CNAME for `www` pointing to `cname.vercel-dns.com`
- Delete any old Anima DNS records pointing to Anima

Propagation takes 5–60 minutes. Vercel will automatically issue an SSL certificate.

### 4c. Verify
Visit `https://mycmoclub.com` — you should see the new site. Check the padlock (HTTPS).

---

## Step 5: Monitor for 48 hours

- Watch Vercel → **Deployments → Functions** logs for `/api/send-email` errors
- Watch HubSpot for incoming form submissions
- Check Resend dashboard for email delivery status
- Keep Anima hosting alive as fallback for 1 week, then cancel

---

## Ongoing changes

Once live, edits flow like this:
1. Edit files locally (or ask Claude to edit them)
2. `git add . && git commit -m "your change" && git push`
3. Vercel auto-deploys in ~30 seconds
4. Changes live on `mycmoclub.com`

---

## Rollback plan

If something breaks after DNS cutover:
1. In your DNS registrar, revert the A/CNAME records to your old Anima hosting
2. Propagation takes 5 min (because you lowered TTL in step 4b)
3. Debug the Vercel deployment without pressure

---

## Troubleshooting

**Routes return 404 on refresh**
→ Check `vercel.json` has the SPA rewrites rule. Already configured in this project.

**Emails don't send**
→ Check `RESEND_API_KEY` is set in Vercel env vars. Check Resend dashboard for domain verification status.

**HubSpot form submissions fail**
→ The forms POST directly from the browser to HubSpot (no backend). Check browser console for CORS/network errors. HubSpot Form IDs are hardcoded in the form components — verify they still exist in HubSpot.

**Build fails on Vercel**
→ Check Vercel build logs. Usually a missing env var or Node version mismatch. Node 20 is recommended (Vercel default).
