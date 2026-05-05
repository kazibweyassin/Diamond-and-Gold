'use client';

import { useEffect, useState } from 'react';

export default function PageUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 300);

    toggleVisible();
    window.addEventListener('scroll', toggleVisible, { passive: true });

    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="group fixed bottom-24 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 motion-reduce:transition-none md:bottom-28 md:h-14 md:w-14"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}