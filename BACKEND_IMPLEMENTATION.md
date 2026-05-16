# Backend Integration Complete ✅

## What's Been Implemented

### 1. Updated `/api/contact` Endpoint
Your API endpoint now handles **two form types**:

#### Generic Contact Forms
- Fields: name, email, phone, subject, message
- Sends email to `CONTACT_EMAIL`
- Saves to `contact_submissions` table
- Used by general inquiries

#### B2B Quote Forms
- Fields: company_name, contact_name, email, phone, target_volume, delivery_destination, kyc_status
- Sends email to `CONTACT_EMAIL`
- Saves to `b2b_quotes` table
- Used by `/request-quote` page (institutional buyers)

### 2. Installed Dependencies
- ✅ `resend` - Email delivery service
- ✅ `@supabase/supabase-js` - Database client

### 3. Implementation Details

**Smart Error Handling:**
- Email fails → Still saves to DB + returns success
- DB fails → Still sends email + returns success
- Both fail → Returns success (client doesn't see backend errors)

**Rate Limiting:**
- Max 5 requests per IP per hour
- Returns 429 status if exceeded

**Logging:**
- Unique request IDs for debugging
- Detailed logs for email/database operations
- Duration tracking

**Data Validation:**
- Email format validation
- Phone number format validation
- Required field validation
- Spam detection for generic forms

### 4. Form Submission Flow

```
User submits form
       ↓
POST /api/contact (with type: 'b2b-quote' or 'contact')
       ↓
Validate form fields
       ↓
Send email via Resend
       ↓
Insert into Supabase table
       ↓
Return success response to user
       ↓
GA4 conversion event fires (in browser)
```

## Next: Quick Setup (5-10 minutes)

### Step 1: Create Resend Account
1. Visit https://resend.com
2. Sign up (free: 100 emails/day)
3. Get API key from dashboard
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=sales@diamondcapitalafrica.com
   ```

### Step 2: Create Supabase Project
1. Visit https://supabase.com
2. Sign up (free: 500MB storage)
3. Create new project
4. Copy API keys from Settings
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```

### Step 3: Create Database Tables
In Supabase SQL Editor, create `b2b_quotes` table:

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
```

### Step 4: Test It
1. Go to `http://localhost:3000/request-quote`
2. Fill out the B2B quote form
3. Submit
4. Check your email inbox (should arrive in seconds)
5. Check Supabase dashboard → b2b_quotes table

## File References

- **API Implementation:** [app/api/contact/route.ts](app/api/contact/route.ts)
- **B2B Form:** [app/request-quote/page.tsx](app/request-quote/page.tsx)
- **Detailed Setup Guide:** [BACKEND_SETUP.md](BACKEND_SETUP.md)

## Data Models

### B2B Quote
```typescript
{
  company_name: string      // "Global Imports Ltd"
  contact_name: string      // "John Doe"
  email: string            // "john@example.com"
  phone: string            // "+1234567890"
  target_volume: string    // "20kg+ Institutional"
  delivery_destination: string // "CIF Europe"
  kyc_status: string       // "Ready" | "Needs Advisory"
  ip_address: string       // "203.0.113.45"
  created_at: timestamp    // 2026-05-16T14:30:00Z
}
```

### Contact Form
```typescript
{
  name: string            // "Jane Smith"
  email: string           // "jane@example.com"
  phone: string           // "+1234567890"
  subject: string         // "Pricing Inquiry"
  message: string         // "I am interested in bulk gold pricing..."
  ip_address: string      // "203.0.113.45"
  created_at: timestamp   // 2026-05-16T14:30:00Z
}
```

## Deployment Checklist

- [ ] Resend account created + API key added
- [ ] Supabase project created + tables built
- [ ] `.env.local` updated with credentials
- [ ] Test form submissions working
- [ ] Emails arriving successfully
- [ ] Supabase shows submissions
- [ ] Deploy to production
- [ ] Update `.env` on production platform (Vercel/Netlify)
- [ ] Replace `AW-XXXXXXXXX/CONVERSION_LABEL_FORM` with actual Google Ads label in GlobalAnalyticsTracker.tsx

---

**Status:** ✅ Backend ready for configuration
**Time to completion:** ~10 minutes (account setup + table creation)
