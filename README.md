# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f4df2cdb-92cc-4f5a-96ef-441b39486b20

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f4df2cdb-92cc-4f5a-96ef-441b39486b20) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm ci

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Cloud agent environment setup

This repo includes `.cursor/environment.json` with:

```json
{
  "install": "npm ci"
}
```

That ensures Cursor Cloud Agents preinstall Node/npm dependencies exactly from `package-lock.json` before running tasks.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f4df2cdb-92cc-4f5a-96ef-441b39486b20) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)

## Subscription / Stripe deployment checklist

The freemium paywall is fully wired in code. To take it live you only need to
configure Stripe + deploy the edge functions. Steps are ordered; `[x]` is already done.

- [x] **Run the DB migration** `supabase/migrations/20260627000000_subscribers_and_achievements.sql`
  (creates the `subscribers` and `user_achievements` tables with RLS).

### 1. Create the Stripe product & price

1. In the [Stripe Dashboard](https://dashboard.stripe.com/products) → **Products → Add product**.
2. Name it (e.g. `Bible Quest Premium`), set a **recurring** price of **$2.99 / month**.
3. Copy the **Price ID** (looks like `price_1A2b3C...`) — this becomes `STRIPE_PRICE_ID`.
   - If you skip this, checkout still works via the inline fallback price in
     `create-subscription`, but using a real Price ID is recommended for production.

### 2. Create the Stripe webhook endpoint

1. Stripe Dashboard → **Developers → Webhooks → Add endpoint**.
2. Endpoint URL: `https://fwjfbenicnnprhkmnsmm.supabase.co/functions/v1/stripe-webhook`
3. Select these events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. After creating it, copy the **Signing secret** (`whsec_...`) — this becomes `STRIPE_WEBHOOK_SECRET`.

### 3. Enable the Stripe Customer Portal

- Stripe Dashboard → **Settings → Billing → [Customer portal](https://dashboard.stripe.com/settings/billing/portal)** → **Activate**.
  (Required for the "Manage billing" button, which calls the `customer-portal` function.)

### 4. Set Supabase secrets

`SUPABASE_URL`, `SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` are injected
automatically by the platform — you only need to set the three Stripe secrets:

```sh
supabase secrets set \
  STRIPE_SECRET_KEY=sk_live_xxx \
  STRIPE_PRICE_ID=price_xxx \
  STRIPE_WEBHOOK_SECRET=whsec_xxx
```

(Or set them in the dashboard: **Project Settings → Edge Functions → Secrets**.)
Use your **test** keys first (`sk_test_…`, `whsec_…` from a test-mode webhook) to verify the flow.

### 5. Deploy the edge functions

```sh
supabase functions deploy create-subscription
supabase functions deploy check-subscription
supabase functions deploy customer-portal
supabase functions deploy stripe-webhook --no-verify-jwt
```

`stripe-webhook` **must** be deployed with `--no-verify-jwt` (Stripe calls it
directly; authenticity is enforced via the signing secret). `verify_jwt` is
already configured per-function in `supabase/config.toml`.

### 6. Smoke test

1. Sign up for a free account → confirm you can read **Genesis 1** and the first
   theology chapter, and that other chapters show the premium upsell.
2. Click **Subscribe**, complete checkout with Stripe's test card `4242 4242 4242 4242`.
3. You should land back on `/profile?subscription=success`, the cache busts, and
   premium chapters unlock. Confirm a row appears in the `subscribers` table.
4. On `/profile`, click **Manage billing** → the Stripe customer portal should open.
5. Cancel from the portal → the `subscribers` row flips to `canceled` and access reverts.

> Note: the public `send-contact-email` function uses `RESEND_API_KEY` (set the
> same way) and has a honeypot field for basic abuse protection — unrelated to billing.
