import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Initialize services
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Simple in-memory rate limiter (replace with Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 3600000 }); // 1 hour
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 requests per hour
  }

  limit.count++;
  return true;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string;
  type?: 'contact';
}

interface B2BQuoteData {
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  target_volume: string;
  delivery_destination: string;
  kyc_status: string;
  type: 'b2b-quote';
}

type FormData = ContactFormData | B2BQuoteData;

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateContactForm(data: ContactFormData): string | null {
  if (data.company?.trim()) {
    return 'Spam detected';
  }
  if (!data.name?.trim()) {
    return 'Name is required';
  }
  if (data.name.trim().length < 2) {
    return 'Name must be at least 2 characters';
  }
  if (!data.email?.trim()) {
    return 'Email is required';
  }
  if (!validateEmail(data.email)) {
    return 'Invalid email address';
  }
  if (data.phone && !/^[\d\s\+\-()]+$/.test(data.phone)) {
    return 'Invalid phone number';
  }
  if (!data.subject?.trim()) {
    return 'Subject is required';
  }
  if (!data.message?.trim()) {
    return 'Message is required';
  }
  if (data.message.trim().length < 10) {
    return 'Message must be at least 10 characters';
  }
  return null;
}

function validateB2BQuote(data: B2BQuoteData): string | null {
  if (!data.company_name?.trim()) {
    return 'Company name is required';
  }
  if (!data.contact_name?.trim()) {
    return 'Contact name is required';
  }
  if (!data.email?.trim()) {
    return 'Email is required';
  }
  if (!validateEmail(data.email)) {
    return 'Invalid email address';
  }
  if (!data.phone?.trim()) {
    return 'Phone is required';
  }
  if (!/^[\d\s\+\-()]+$/.test(data.phone)) {
    return 'Invalid phone number';
  }
  if (!data.target_volume?.trim()) {
    return 'Target volume is required';
  }
  if (!data.delivery_destination?.trim()) {
    return 'Delivery destination is required';
  }
  if (!data.kyc_status?.trim()) {
    return 'KYC status is required';
  }
  return null;
}

function createContactEmailBody(data: ContactFormData): string {
  return `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
  `.trim();
}

function createB2BEmailBody(data: B2BQuoteData): string {
  return `
NEW B2B QUOTE REQUEST
====================

Company: ${data.company_name}
Contact: ${data.contact_name}
Email: ${data.email}
Phone: ${data.phone}

Target Volume: ${data.target_volume}
Delivery Destination: ${data.delivery_destination}
KYC Status: ${data.kyc_status}

Submitted: ${new Date().toISOString()}
  `.trim();
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: NextRequest) {
  const requestId = globalThis.crypto?.randomUUID?.() ?? `req_${Date.now().toString(36)}`;
  const startedAt = Date.now();

  try {
    const ip = getClientIp(request);
    const body = await request.json();
    const formType = body.type || 'contact';

    console.info('[contact-form] request received', { requestId, ip, type: formType });

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      console.warn('[contact-form] rate limit exceeded', { requestId, ip });
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-Request-Id': requestId } }
      );
    }

    // Validate based on form type
    let validationError: string | null = null;
    if (formType === 'b2b-quote') {
      validationError = validateB2BQuote(body as B2BQuoteData);
    } else {
      validationError = validateContactForm(body as ContactFormData);
    }

    if (validationError) {
      console.warn('[contact-form] validation failed', { requestId, ip, validationError, type: formType });
      return NextResponse.json(
        { error: validationError },
        { status: 400, headers: { 'X-Request-Id': requestId } }
      );
    }

    // Handle B2B Quote Form
    if (formType === 'b2b-quote') {
      const b2bData = body as B2BQuoteData;
      
      // Send email
      if (process.env.RESEND_API_KEY) {
        try {
          await resend.emails.send({
            from: 'noreply@diamondcapitalafrica.com',
            to: process.env.CONTACT_EMAIL || 'sales@diamondcapitalafrica.com',
            replyTo: b2bData.email,
            subject: `B2B Quote Request - ${b2bData.company_name}`,
            html: createB2BEmailBody(b2bData).replace(/\n/g, '<br>'),
          });
          console.info('[b2b-quote] email sent', { requestId, company: b2bData.company_name });
        } catch (emailError) {
          console.error('[b2b-quote] email failed', { requestId, error: emailError });
          // Continue even if email fails - database is primary
        }
      }

      // Save to Supabase
      if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        try {
          const { error: dbError } = await supabase.from('b2b_quotes').insert([
            {
              company_name: b2bData.company_name,
              contact_name: b2bData.contact_name,
              email: b2bData.email,
              phone: b2bData.phone,
              target_volume: b2bData.target_volume,
              delivery_destination: b2bData.delivery_destination,
              kyc_status: b2bData.kyc_status,
              ip_address: ip,
              created_at: new Date().toISOString(),
            },
          ]);

          if (dbError) {
            console.error('[b2b-quote] database insert failed', { requestId, error: dbError });
            // Continue - don't fail if database insert fails
          } else {
            console.info('[b2b-quote] saved to database', { requestId, company: b2bData.company_name });
          }
        } catch (dbError) {
          console.error('[b2b-quote] database error', { requestId, error: dbError });
        }
      }

      return NextResponse.json(
        {
          success: true,
          message:
            'Thank you for your quote request. Our institutional sales team will review your submission and contact you within 24 hours.',
        },
        { status: 200, headers: { 'X-Request-Id': requestId } }
      );
    }

    // Handle Generic Contact Form
    const contactData = body as ContactFormData;

    // Send email
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'noreply@diamondcapitalafrica.com',
          to: process.env.CONTACT_EMAIL || 'info@diamondcapitalafrica.com',
          replyTo: contactData.email,
          subject: `New Contact Form Submission: ${contactData.subject}`,
          html: createContactEmailBody(contactData).replace(/\n/g, '<br>'),
        });
        console.info('[contact-form] email sent', { requestId });
      } catch (emailError) {
        console.error('[contact-form] email failed', { requestId, error: emailError });
      }
    }

    // Save to Supabase if table exists
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      try {
        await supabase.from('contact_submissions').insert([
          {
            name: contactData.name,
            email: contactData.email,
            phone: contactData.phone,
            subject: contactData.subject,
            message: contactData.message,
            ip_address: ip,
            created_at: new Date().toISOString(),
          },
        ]);
        console.info('[contact-form] saved to database', { requestId });
      } catch (dbError) {
        console.error('[contact-form] database error', { requestId, error: dbError });
        // Continue - don't fail if database insert fails
      }
    }

    console.info('[contact-form] submission accepted', {
      requestId,
      ip,
      durationMs: Date.now() - startedAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you within 24 hours.',
      },
      { status: 200, headers: { 'X-Request-Id': requestId } }
    );
  } catch (error) {
    console.error('[contact-form] unexpected error', { requestId, error });
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500, headers: { 'X-Request-Id': requestId } }
    );
  }
}
