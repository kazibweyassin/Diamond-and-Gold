'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const BREADCRUMB_MAP: Record<string, BreadcrumbItem[]> = {
  '/compliance': [
    { name: 'Home', path: '/' },
    { name: 'Compliance', path: '/compliance' },
  ],
  '/process': [
    { name: 'Home', path: '/' },
    { name: 'Process', path: '/process' },
  ],
  '/contact': [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ],
  '/faq': [
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ],
  '/products': [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/products' },
  ],
  '/about': [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  '/news': [
    { name: 'Home', path: '/' },
    { name: 'News', path: '/news' },
  ],
  '/corporate-profile': [
    { name: 'Home', path: '/' },
    { name: 'Corporate Profile', path: '/corporate-profile' },
  ],
  '/privacy-policy': [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
  ],
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const breadcrumbs = BREADCRUMB_MAP[pathname];

  if (!breadcrumbs) return null;

  const schemaItems = breadcrumbs.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://diamondcapitalafrica.com${item.path}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: schemaItems,
          }),
        }}
      />
      <nav className="text-sm text-slate-600 mb-4" aria-label="breadcrumb">
        <ol className="flex items-center gap-2">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center gap-2">
              <Link
                href={item.path}
                className="hover:text-slate-900 transition"
              >
                {item.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="text-slate-400">/</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
