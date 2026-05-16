# Backend Setup: Resend Email + Supabase Database

## Quick Start

Your `/api/contact` endpoint now supports **both generic contact forms** and **B2B quote requests** with full email and database integration.

## 1. Set Up Resend Email Service

### Create Resend Account
1. Go to https://resend.com
2. Sign up with your email (free tier: 100 emails/day)
3. Go to **API Keys** and copy your API key
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=sales@diamondcapitalafrica.com
   ```

### Email Configuration
- **From:** `noreply@diamondcapitalafrica.com` (update domain in `route.ts` if different)
- **To (B2B Quotes):** Uses `CONTACT_EMAIL` env var (default: sales@diamondcapitalafrica.com)
- **To (Generic Contact):** Uses `CONTACT_EMAIL` env var (default: info@diamondcapitalafrica.com)
- **Reply-To:** Automatically set to submitter's email

## 2. Set Up Supabase Database

### Create Supabase Project
1. Go to https://supabase.com
2. Sign up (free tier: 500MB storage, unlimited API calls)
3. Create new project
4. Go to **Settings** > **API** and copy:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

### Create B2B Quotes Table

In Supabase SQL Editor, run:

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
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Add RLS policy to allow inserts
ALTER TABLE b2b_quotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON b2b_quotes
  FOR INSERT
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_b2b_quotes_created_at ON b2b_quotes(created_at DESC);
CREATE INDEX idx_b2b_quotes_email ON b2b_quotes(email);
```

### Optional: Create Contact Submissions Table

If you want to also track generic contact form submissions:

```sql
CREATE TABLE contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  ip_address TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
```

## 3. Environment Variables

Add these to `.env.local`:

```env
# Resend Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=sales@diamondcapitalafrica.com

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 4. Form Submission Flow

### B2B Quote Form (`/request-quote`)
1. User fills form with: company_name, contact_name, email, phone, target_volume, delivery_destination, kyc_status
2. Form submits to `/api/contact` with `type: 'b2b-quote'`
3. API validates all B2B-specific fields
4. API sends email to `CONTACT_EMAIL` with formatted quote request
5. API inserts record into `b2b_quotes` table in Supabase
6. User sees success message: "Thank you for your quote request..."
7. GA4 conversion event fires (tracked in Google Ads)

### Generic Contact Form
1. User fills form with: name, email, phone, subject, message
2. Form submits to `/api/contact` with `type: 'contact'` (or no type)
3. API validates generic contact fields
4. API sends email to `CONTACT_EMAIL` with formatted message
5. API inserts record into `contact_submissions` table (if exists)
6. User sees success message: "Your message has been received..."

## 5. Error Handling

The API gracefully handles failures:

- **Email fails**: Still saves to database and returns success (notification sent)
- **Database fails**: Still sends email and returns success (record captured)
- **Both fail**: Returns success response (user shouldn't see backend errors)
- **Validation fails**: Returns 400 with specific error message
- **Rate limit**: Returns 429 (max 5 requests per IP per hour)

## 6. Testing

### Test B2B Quote Submission
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "type": "b2b-quote",
    "company_name": "Global Imports Ltd",
    "contact_name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "target_volume": "20kg+ Institutional",
    "delivery_destination": "CIF Europe",
    "kyc_status": "Ready"
  }'
```

### Test Generic Contact
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "subject": "Pricing Inquiry",
    "message": "I am interested in bulk gold pricing for my business."
  }'
```

## 7. Logs & Monitoring

Check Next.js console logs for:
- `[b2b-quote] email sent` - B2B email successfully sent
- `[b2b-quote] saved to database` - B2B quote saved to Supabase
- `[b2b-quote] email failed` - Email service error (non-blocking)
- `[b2b-quote] database error` - Database insert error (non-blocking)

All requests are logged with unique request IDs for debugging.

## 8. Production Considerations

- **Email Domain**: Replace `noreply@diamondcapitalafrica.com` with verified domain in Resend
- **Rate Limiting**: Current: 5 requests per IP per hour (in-memory). Upgrade to Redis in production
- **Database Backups**: Enable automatic daily backups in Supabase settings
- **Security**: Environment variables should be stored securely in deployment platform (Vercel, Netlify, etc.)
- **Monitoring**: Set up error alerts via Resend/Supabase dashboards

## 9. Next Steps

1. ✅ Install packages (DONE)
2. ✅ Update `/api/contact` endpoint (DONE)
3. Create Resend account and get API key
4. Create Supabase project and database tables
5. Add environment variables to `.env.local`
6. Test form submissions
7. View submissions in Supabase dashboard
8. Check emails in your inbox

---

**Questions?** Review the TypeScript interfaces in `route.ts` for exact field requirements.
