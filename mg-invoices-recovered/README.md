# MG Invoices — Recovered Build

Recovered from the live Vercel deployment on 2026-08-06 after the original
GitHub repo (`rudzie-dev/MG-Invoices`) was deleted (past GitHub's 90-day
support-restore window).

## What this is
- `mg-invoices-recovered/build/index.html`, `mg-invoices-recovered/build/assets/index-*.css`, `mg-invoices-recovered/build/assets/index-*.js`
  — the production build pulled straight from `mg-invoices.vercel.app`.
- The JS bundle has been de-minified (via Prettier) for readability, but it
  is still the **compiled Vite output**, not your original authored files
  (App.jsx, individual components, etc). There was no published sourcemap,
  so a perfect file-by-file reconstruction isn't possible.
- It IS fully functional — all your business logic (invoice CRUD, stats
  calculation, company defaults, PDF/print styling) is intact and readable
  in `mg-invoices-recovered/build/assets/index-DLEb9MEe.js`.

## Your data is safe
This app talks to a Supabase project (`rxtaludvbiyfevqhmkus.supabase.co`)
that is separate from the deleted GitHub repo. Your actual invoices/clients
were never in the repo — they're in Supabase and untouched.

## Running this recovered copy
Just serve the `mg-invoices-recovered/build/` folder as static files:

    npx serve mg-invoices-recovered/build

Or redeploy straight to Vercel:

    npx vercel deploy mg-invoices-recovered/build --prod

## Recommended next step
Treat this as a rescue copy, not a final answer. Consider having it
reverse-engineered into clean, separate React components (App.jsx,
InvoiceList.jsx, InvoiceForm.jsx, etc.) so you have real maintainable
source again and can push it to a fresh GitHub repo.
