import { NextRequest, NextResponse } from 'next/server';

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
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm(data: ContactFormData): string | null {
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

function createEmailBody(data: ContactFormData): string {
  return `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}

Message:
${data.message}
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

    console.info('[contact-form] request received', { requestId, ip });

    // Rate limiting check
    if (!checkRateLimit(ip)) {
      console.warn('[contact-form] rate limit exceeded', { requestId, ip });
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'X-Request-Id': requestId } }
      );
    }

    // Parse request body
    const data: ContactFormData = await request.json();

    // Validate form data
    const validationError = validateForm(data);
    if (validationError) {
      console.warn('[contact-form] validation failed', { requestId, ip, validationError });
      return NextResponse.json(
        { error: validationError },
        { status: 400, headers: { 'X-Request-Id': requestId } }
      );
    }

    // In a production environment, you would:
    // 1. Send email via Resend, SendGrid, or similar service
    // 2. Save to database
    // 3. Queue for processing
    
    // For now, we'll log it (in production, replace this)
    console.info('[contact-form] submission accepted', {
      requestId,
      ip,
      subject: data.subject,
      durationMs: Date.now() - startedAt,
    });

    // TODO: Implement actual email sending
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: 'noreply@diamondcapitalafrica.com',
    //   to: process.env.NEXT_PUBLIC_EMAIL,
    //   replyTo: data.email,
    //   subject: `New Contact: ${data.subject}`,
    //   html: createEmailBody(data).replace(/\n/g, '<br>'),
    // });

    // TODO: Save to database
    // await db.contactSubmissions.create({
    //   name: data.name,
    //   email: data.email,
    //   phone: data.phone,
    //   subject: data.subject,
    //   message: data.message,
    //   ipAddress: ip,
    //   submittedAt: new Date(),
    //   status: 'received',
    // });

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
