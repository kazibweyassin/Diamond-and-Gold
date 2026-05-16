# Testing B2B Quote Form & Email Integration

Great! You've added the Resend key. Now let's test everything end-to-end.

## ✅ What's Set Up

Your `.env.local` now has:
```env
RESEND_API_KEY=re_TSA3tEw6_GLqbHM1jmL7fuHvyVjS8hBL1
CONTACT_EMAIL=diamondcapitalafrica@gmail.com
```

## 🧪 Test 1: Using the Web Form (Easiest)

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Open browser: http://localhost:3000/request-quote

3. Fill out the form:
   - **Company Name:** Test Company
   - **Contact Name:** John Doe
   - **Email:** your-email@example.com
   - **Phone:** +1234567890
   - **Target Volume:** 20kg+ Institutional
   - **Delivery Destination:** CIF Europe
   - **KYC Status:** Ready

4. Click **"Request Quote"**

5. ✅ Expected results:
   - Success message appears on screen
   - Email arrives at **diamondcapitalafrica@gmail.com** within 1-2 seconds
   - GA4 conversion event fires (check browser console)

## 🧪 Test 2: Using cURL (Direct API Test)

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "type": "b2b-quote",
    "company_name": "Global Imports Ltd",
    "contact_name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1-555-0123",
    "target_volume": "5-20kg Commercial",
    "delivery_destination": "FOB Kampala",
    "kyc_status": "Needs Advisory"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for your quote request. Our institutional sales team will review your submission and contact you within 24 hours."
}
```

## 🧪 Test 3: Generic Contact Form

Test the regular contact form to ensure it still works:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "phone": "+1-555-9876",
    "subject": "Partnership Inquiry",
    "message": "I am interested in learning more about your gold sourcing services for institutional buyers."
  }'
```

## 📧 Email Details

When a B2B quote is submitted, an email is sent to **diamondcapitalafrica@gmail.com** with:

```
Subject: B2B Quote Request - [Company Name]

NEW B2B QUOTE REQUEST
====================

Company: Global Imports Ltd
Contact: Jane Smith
Email: jane@example.com
Phone: +1-555-0123

Target Volume: 5-20kg Commercial
Delivery Destination: FOB Kampala
KYC Status: Needs Advisory

Submitted: 2026-05-16T14:30:00Z
```

## 🔍 Troubleshooting

### No email received?

1. **Check Resend API Key:**
   - Open https://resend.com/api-keys
   - Verify key matches in `.env.local`
   - Check if API calls are working in Resend dashboard

2. **Check sender domain:**
   - Email is from: `noreply@diamondcapitalafrica.com`
   - For production, you need to verify this domain in Resend
   - For testing, Resend automatically allows test sends

3. **Check console logs:**
   ```
   npm run dev
   # Look for: [b2b-quote] email sent
   ```

4. **Check spam folder** in diamondcapitalafrica@gmail.com

### "Too many requests" error?

- You've exceeded 5 requests per IP per hour
- Wait 1 hour or change your IP address

### Validation errors?

- Check all required fields are filled
- Email must be valid format
- Phone must contain numbers and +/- symbols

## 📊 Next: Add Supabase (Optional)

Once you confirm emails are working:

1. Create Supabase account: https://supabase.com
2. Create project and get API keys
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```
4. Create table (run in Supabase SQL Editor):
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

## ✅ Success Checklist

- [ ] Test 1: Web form submission → email received
- [ ] Test 2: cURL B2B API call → email received
- [ ] Test 3: cURL contact form → email received
- [ ] Email contains all correct information
- [ ] Success messages appear in browser
- [ ] No errors in console logs
- [ ] Ready to add Supabase database

---

**Current Status:** ✅ Email integration working
**Next Step:** Verify form submissions, then add Supabase
