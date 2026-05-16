'use client';

import { CONTACT } from '@/lib/constants';

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'd like to inquire about your gold services."
);

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${CONTACT.WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        group
        fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6
        flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20
        items-center justify-center
        rounded-full bg-[#25D366]
        shadow-lg shadow-[#25D366]/40
        transition-all duration-300
        hover:scale-110 hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50
        active:scale-95
      "
    >
      {/* WhatsApp Icon */}
      <svg
        className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.05.547 4.052 1.586 5.86L.461 23.16l5.67-1.488C7.986 23.427 9.961 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.06 15.795c-.27.75-1.58 1.39-2.16 1.47-.56.08-1.29.12-2.08-.13-.5-.17-1.14-.39-1.95-.85-3.35-1.73-5.53-5.25-5.7-5.55-.17-.3-1.37-1.83-1.37-3.49 0-1.66.86-2.48 1.17-2.82.3-.33.65-.41.86-.41.22 0 .43 0 .63.01.2.01.47-.08.73.56.27.7.92 2.26.99 2.42.08.16.13.35.03.56-.11.22-.33.47-.5.6-.16.14-.33.29-.16.57.17.28.77 1.27 1.65 2.06 1.14 1.07 2.1 1.4 2.4 1.56.23.13.36.11.5-.06.13-.17.65-.76.82-1.02.17-.26.33-.22.56-.13.23.1 1.46.69 1.71.81.25.12.41.18.47.28.07.1.07.59-.2 1.31z" />
      </svg>

      {/* Tooltip - Hidden on mobile */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100 after:absolute after:top-full after:right-2 after:border-4 after:border-transparent after:border-t-gray-900 after:content-[''] sm:block"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}