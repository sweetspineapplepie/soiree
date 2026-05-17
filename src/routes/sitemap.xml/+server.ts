export const prerender = true;

const siteUrl = 'https://soiree-studio.com';
const pages = [
  '',
  '/batch-02',
  '/care-guide',
  '/contact',
  '/details',
  '/edition-01',
  '/faq',
  '/iteration',
  '/reserve',
  '/shipping',
  '/story',
  '/thank-you'
];

export async function GET() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
    >
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${siteUrl}${page}</loc>
          <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${page}" />
          <xhtml:link rel="alternate" hreflang="id" href="${siteUrl}/id${page}" />
          <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page}" />
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>`
        )
        .join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
