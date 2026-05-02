import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
        <p className="text-2xl font-semibold text-text-primary mb-2">Page Not Found</p>
        <p className="text-slate-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>

        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white font-semibold rounded-full transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}
