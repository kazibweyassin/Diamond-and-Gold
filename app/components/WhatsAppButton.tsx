'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '256704833021'; // Without + or spaces
  const message = 'Hello, I am interested in your gold products.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl md:h-16 md:w-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp Logo SVG */}
      <svg
        viewBox="0 0 32 32"
        className="h-8 w-8 md:h-9 md:w-9"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.74 5.478 2.031 7.781L0 32l8.406-2.188A15.927 15.927 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.344c-2.537 0-4.906-.706-6.938-1.938l-.5-.313-5.156 1.344 1.375-5.031-.344-.531A13.283 13.283 0 012.656 16c0-7.369 5.975-13.344 13.344-13.344S29.344 8.631 29.344 16 23.369 29.344 16 29.344zm7.313-9.969c-.406-.188-2.375-1.156-2.75-1.281-.375-.125-.656-.188-.906.188-.281.375-1.031 1.281-1.281 1.531-.219.281-.438.313-.844.125-.375-.188-1.625-.594-3.094-1.906-1.125-1.031-1.906-2.281-2.125-2.656-.219-.406-.031-.625.156-.844.188-.188.406-.5.594-.75.188-.219.25-.406.375-.656.125-.281.063-.5-.031-.719-.094-.188-.906-2.156-1.219-2.969-.344-.781-.656-.656-.906-.656-.219-.031-.5-.031-.75-.031s-.688.094-1.063.5c-.344.375-1.344 1.313-1.344 3.188s1.375 3.688 1.563 3.938c.188.281 2.656 4.031 6.438 5.656.906.375 1.594.625 2.156.813.906.281 1.719.25 2.375.156.719-.125 2.375-.969 2.719-1.906.313-.938.313-1.75.219-1.906-.094-.188-.375-.281-.781-.469z" />
      </svg>

      {/* Tooltip on hover */}
      {isHovered && (
        <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white shadow-xl">
          Chat with us on WhatsApp
          <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-slate-900" />
        </div>
      )}

      {/* Pulse animation ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75" />
    </a>
  );
}
