'use client';

import { useEffect } from 'react';

/**
 * GlobalAnalyticsTracker
 * Implements custom event tracking for:
 * - B2B Quote form submissions (conversion)
 * - WhatsApp engagement clicks
 * - Investor Portal navigation (high-intent tracking)
 */
export default function GlobalAnalyticsTracker() {
  useEffect(() => {
    // 1. Track Successful B2B Lead Form Submissions
    const quoteForm = document.getElementById('b2b-quote-form');
    if (quoteForm) {
      quoteForm.addEventListener('submit', function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/CONVERSION_LABEL_FORM', // Developer: Replace with exact Google Ads Tag
            'event_category': 'Lead Generation',
            'event_label': 'B2B Quote Request Form'
          });
          console.log('GA4/Google Ads: Form submission event dispatched successfully.');
        }
      });
    }

    // 2. Track Highly-Engaged WhatsApp Inquiries
    const whatsappWidget = document.querySelector('a[href*="wa.me"]');
    if (whatsappWidget) {
      whatsappWidget.addEventListener('click', function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click', {
            'event_category': 'Engagement',
            'event_label': 'WhatsApp Chat Click'
          });
          console.log('GA4: WhatsApp widget click event captured.');
        }
      });
    }

    // 3. Track Intent for Restricted Investor Portal Entry
    const portalLink = document.querySelector('a[href*="invest"]');
    if (portalLink) {
      portalLink.addEventListener('click', function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click', {
            'event_category': 'High-Intent Engagement',
            'event_label': 'Investor Portal Click'
          });
          console.log('GA4: Investor Portal navigation captured.');
        }
      });
    }

    // 4. Track Request Quote CTA clicks
    const requestQuoteLinks = document.querySelectorAll('a[href*="/request-quote"]');
    requestQuoteLinks.forEach((link) => {
      link.addEventListener('click', function () {
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'click', {
            'event_category': 'Form Entry',
            'event_label': 'Request Quote Click'
          });
          console.log('GA4: Request Quote click tracked.');
        }
      });
    });
  }, []);

  return null; // This component only tracks events, no UI rendering
}
