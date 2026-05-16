Web Optimization & Conversion Audit Report
Target Platform: Diamond Capital Africa Website
Objective: Optimize user experience (UX) for paid Google Ads traffic, eliminate brand-name cognitive dissonance, and implement strict B2B institutional lead filtering.
🛠️ Task 1: Eliminate Hero Section "Name Paradox" Friction
The Problem: The company name contains "Diamond", but the primary service is Gold Supply. Users clicking from a "Gold Sourcing" Google Ad experience instant confusion and bounce immediately.
The Solution: Update the homepage Hero typography and copy hierarchy to instantly anchor the user on gold and institutional compliance.
💻 Developer Implementation Instructions
Replace or update the existing homepage Hero text nodes using the exact structural framework below.
<!-- Hero Section Component -->
<div class="hero-container">
  <!-- Small, authoritative context label above the main header -->
  <span class="text-xs uppercase tracking-widest text-gold font-semibold">
    Institutional Precious Metals & Supply Chain Execution
  </span>
  
  <!-- Optimized Main Headline -->
  <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight">
    Certified Gold Sourcing & <br>
    <span class="text-gradient-gold">Institutional Supply Chains</span>
  </h1>
  
  <!-- Clear Value Prop Subheadline -->
  <p class="text-lg text-gray-300 max-w-2xl mt-4">
    Diamond Capital Africa bridges the gap between global buyers and strictly vetted, compliant gold production in East Africa. We deliver conflict-free, ISO-certified bullion through risk-managed transaction pipelines.
  </p>
  
  <!-- Primary Call to Actions -->
  <div class="flex gap-4 mt-8">
    <a href="/request-quote" class="btn-primary">Request a Formal Quote</a>
    <a href="/process" class="btn-secondary">Our 4-Step Compliance Workflow</a>
  </div>
</div>
🛠️ Task 2: Build a High-Value B2B "Request a Quote" Form
The Problem: Generic "Name/Email/Message" forms attract low-quality inquiries, spam, and do not look professional to corporate legal teams or procurement officers.
The Solution: Replace standard contact fields with an elite, conditional multi-step or filtered B2B intake form that separates serious institutional buyers from unqualified entities.
💻 Developer Implementation Instructions
Implement a dedicated contact component (or update the forms on /contact and /request-quote) with structured dropdown validations.
<form id="b2b-quote-form" class="space-y-6 max-w-xl mx-auto bg-dark-card p-8 rounded-lg border border-gray-800">
  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Company Legal Name</label>
      <input type="text" required name="company_name" placeholder="e.g., Global Bullion Trading LLC" class="form-input">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Authorized Representative</label>
      <input type="text" required name="contact_name" placeholder="Full Name" class="form-input">
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Corporate Email Address</label>
      <input type="email" required name="email" placeholder="name@company.com" class="form-input">
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Direct Phone / WhatsApp</label>
      <input type="tel" required name="phone" placeholder="+1 (555) 000-0000" class="form-input">
    </div>
  </div>

  <!-- Step 2: Transaction Intent (Critical Filters) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Target Volume (Per Transaction)</label>
      <select required name="target_volume" class="form-select">
        <option value="" disabled selected>Select volume scale</option>
        <option value="1-5kg">Trial Allocation (1kg — 5kg)</option>
        <option value="5-20kg">Commercial Scale (5kg — 20kg)</option>
        <option value="20kg+">Institutional Scale (20kg+)</option>
      </select>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-400 mb-1">Preferred Delivery Destination</label>
      <select required name="delivery_destination" class="form-select">
        <option value="" disabled selected>Select destination</option>
        <option value="FOB-Kampala">FOB Kampala (Local Vault Pick-up)</option>
        <option value="CIF-Dubai">CIF Dubai (UAE Hub)</option>
        <option value="CIF-Europe">CIF Europe / International Hub</option>
      </select>
    </div>
  </div>

  <!-- Step 3: Compliance Pre-Screening -->
  <div>
    <label class="block text-sm font-medium text-gray-400 mb-1">Compliance & KYC Status</label>
    <select required name="kyc_status" class="form-select">
      <option value="" disabled selected>Select your current status</option>
      <option value="ready">We have corporate KYC/AML documents ready for review</option>
      <option value="needs-advisory">We require legal/compliance transaction onboarding</option>
    </select>
  </div>

  <!-- Submit Button -->
  <button type="submit" class="w-full py-3 bg-gold hover:bg-gold-dark text-black font-bold rounded transition">
    Submit Intent for Compliance Review
  </button>
</form>
🛠️ Task 3: Hardcode Google Tag/GA4 Event Custom Triggers
The Problem: You cannot optimize Google Ads unless the system knows exactly which ad clicks turned into real leads.
The Solution: Inject custom JavaScript event listeners into the submission form, the WhatsApp floating button, and the Investor Portal link to feed analytics directly back into your Google Ads tracking dashboard.
💻 Developer Implementation Instructions
Add the following event tracking script into your site's global script file or layout footer. Ensure the IDs match the interactive HTML elements perfectly.
document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Track Successful B2B Lead Form Submissions
  const quoteForm = document.getElementById("b2b-quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
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
    whatsappWidget.addEventListener("click", function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'Engagement',
          'event_label': 'WhatsApp Chat Click'
        });
        console.log('GA4: WhatsApp widget click event captured.');
      }
    });
  }

  // 3. Track Intent for Restricted Investor Portal Entry
  const portalLink = document.querySelector('a[href*="portal"]');
  if (portalLink) {
    portalLink.addEventListener("click", function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          'event_category': 'High-Intent Engagement',
          'event_label': 'Investor Portal Click'
        });
        console.log('GA4: Investor Portal navigation captured.');
      }
    });
  }
});