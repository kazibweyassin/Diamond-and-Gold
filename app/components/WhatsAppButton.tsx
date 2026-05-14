'use client';

import { CONTACT } from '@/lib/constants';

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'd like to inquire about visa services."
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
        fixed bottom-4 left-4 z-50
        sm:bottom-6 sm:left-6
        flex h-14 w-14 md:h-16 md:w-16
        items-center justify-center
        rounded-full bg-[#25D366]
        shadow-lg shadow-[#25D366]/30
        transition-all duration-300
        hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50
        animate-pulse-ring
      "
    >
      {/* Pulse ring animation */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 animate-ping"
        style={{ animationDuration: '2.5s' }}
      />

      {/* WhatsApp SVG */}
      <svg
        className="relative h-8 w-8 text-white md:h-9 md:w-9"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.768.966-.941 1.165-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006c-1.052 0-2.082.398-2.836 1.123-.755.726-1.172 1.71-1.172 2.745 0 1.035.417 2.019 1.172 2.745.754.725 1.784 1.123 2.836 1.123h.006c1.052 0 2.082-.398 2.836-1.123.755-.726 1.172-1.71 1.172-2.745 0-1.035-.417-2.019-1.172-2.745-.754-.725-1.784-1.123-2.836-1.123M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0" />
      </svg>

      {/* Tooltip — correct logic: hidden by default, shown on hover */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute bottom-full left-1/2 -translate-x-1/2 mb-3
          whitespace-nowrap rounded-lg
          bg-gray-900 px-3 py-1.5
          text-xs font-medium text-white
          opacity-0 scale-95
          transition-all duration-200
          group-hover:opacity-100 group-hover:scale-100
          after:absolute after:top-full after:left-1/2 after:-translate-x-1/2
          after:border-4 after:border-transparent after:border-t-gray-900 after:content-['']
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}