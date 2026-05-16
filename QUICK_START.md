# Backend Setup Quick Reference

## What's Running Now ✅

Your `/api/contact` endpoint is **fully functional** and ready to receive:
- B2B Quote requests from `/request-quote` page
- Generic contact form submissions

The code is written and will:
1. ✅ Validate form data
2. ✅ Send emails via Resend (once API key added)
3. ✅ Save to Supabase database (once configured)
4. ✅ Handle errors gracefully
5. ✅ Rate limit requests (5 per IP per hour)

## What You Need to Do (3 Steps - 5 minutes)

### 1️⃣ Create Resend Account
- Visit: https://resend.com
- Sign up (free tier is fine)
- Get API key: https://resend.com/api-keys
- Add to `.env.local`:
  ```
  RESEND_API_KEY=re_xxxxxxxxxxxxx
  CONTACT_EMAIL=sales@diamondcapitalafrica.com
  ```

### 2️⃣ Create Supabase Project
- Visit: https://supabase.com
- Sign up (free tier is fine)
- Create new project
- Go to Settings > API, copy both keys
- Add to `.env.local`:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
  ```

### 3️⃣ Create Database Table
In Supabase SQL Editor, run this:

```sql
CREATE TABLE b2b_quotes (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  target_volume TEXT NOT NULL,
  delivery_destination TEXT NOT NULL,
  kyc_status TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE b2b_quotes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public inserts" ON b2b_quotes FOR INSERT WITH CHECK (true);
CREATE INDEX idx_b2b_quotes_created_at ON b2b_quotes(created_at DESC);
```

That's it! Forms will now work.

## Test It
1. Go to http://localhost:3000/request-quote
2. Fill out form and submit
3. Check your email (~1 second)
4. Check Supabase dashboard > b2b_quotes table

## Documentation Files
- **BACKEND_SETUP.md** - Complete step-by-step setup guide
- **BACKEND_IMPLEMENTATION.md** - Technical overview & data models
- **app/api/contact/route.ts** - Full implementation code

## Troubleshooting

**No email received?**
- Check `.env.local` has `RESEND_API_KEY` set
- Check spam folder
- Check Resend API key is correct

**Data not in Supabase?**
- Check `.env.local` has `NEXT_PUBLIC_SUPABASE_URL` and key
- Check table was created (run SQL above)
- Check RLS policy allows inserts

**Status codes?**
- 200: Success
- 400: Validation error (check error message)
- 429: Rate limited (5 per IP per hour)
- 500: Server error (check console logs)

---

Time to full deployment: **~15 minutes**
Current status: **Ready for account setup**
