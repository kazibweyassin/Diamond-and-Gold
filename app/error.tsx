'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-text-primary mb-4">Oops!</h1>
        <p className="text-xl text-slate-700 mb-2">Something went wrong</p>
        <p className="text-sm text-slate-600 mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-full transition duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-gold-600 text-gold-600 hover:bg-gold-50 font-semibold rounded-full transition duration-300"
          >
            Go Home
          </Link>
        </div>

        {error.digest && (
          <p className="text-xs text-slate-500 mt-8">Error ID: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
