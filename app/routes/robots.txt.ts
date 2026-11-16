import type { LoaderFunctionArgs } from 'react-router';

export const loader = ({ request }: LoaderFunctionArgs) => {
  const { origin } = new URL(request.url);
  const body = ['User-agent: *', 'Allow: /', 'Disallow: /api/', '', `Sitemap: ${origin}/sitemap.xml`, ''].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
