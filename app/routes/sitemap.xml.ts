import type { LoaderFunctionArgs } from 'react-router';

const PUBLIC_PATHS = ['/', '/starter'];

export const loader = ({ request }: LoaderFunctionArgs) => {
  const { origin } = new URL(request.url);
  const urls = PUBLIC_PATHS.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
