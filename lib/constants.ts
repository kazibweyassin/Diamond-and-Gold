/**
 * Application Constants
 */

// Gold Pricing
export const GOLD_PRICING = {
  DCA_PREMIUM: 0.018, // 1.8% facilitation fee
  OZ_TO_GRAM: 31.1035,
  GRAM_TO_KG: 32.1507,
};

// Contact Information
export const CONTACT = {
  PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER || "256704833021",
  WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "256704833021",
  EMAIL: process.env.NEXT_PUBLIC_EMAIL || "info@diamondcapitalafrica.com",
};

// Site Information
export const SITE = {
  NAME: process.env.NEXT_PUBLIC_SITE_NAME || "Diamond Capital Africa",
  URL: process.env.NEXT_PUBLIC_SITE_URL || "https://diamondcapitalafrica.com",
  GA_ID: process.env.NEXT_PUBLIC_GA_ID || "",
  GOOGLE_TAG_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-18021829324",
};

// API Configuration
export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "",
  GOLD_PRICE_API: "https://metals.live/api/latest",
};

// Feature Flags
export const FEATURES = {
  ENABLE_ANALYTICS: true,
  ENABLE_CONTACT_FORM: true,
  GOLD_TICKER_FETCH_INTERVAL: 60000, // 1 minute
};
