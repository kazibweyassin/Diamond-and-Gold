import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://diamondcapitalafrica.com'
  const lastModified = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/corporate-profile`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/products`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/process`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/news`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    {
      url: `${baseUrl}/compliance`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/account-holders`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/site-map`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/news/uganda-gold-export-2024`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/news/oecd-compliance-gold-trading`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    },
    {
      url: `${baseUrl}/news/gold-price-trends-2024`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    },
  ]

  return staticPages
}
