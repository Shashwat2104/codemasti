import type { MetaFunction } from 'react-router';
import { ClientOnly } from 'remix-utils/client-only';
import { BaseChat } from '~/components/chat/BaseChat';
import { Chat } from '~/components/chat/Chat.client';
import { Header } from '~/components/header/Header';
import { FirstRunOnboarding } from '~/components/onboarding/FirstRunOnboarding';
import { BRAND_NAME, SEO_DESCRIPTION, SEO_TITLE, SOCIAL_IMAGE_PATH } from '~/utils/brand';

export const meta: MetaFunction = () => {
  const siteUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  const imageUrl = siteUrl ? `${siteUrl}${SOCIAL_IMAGE_PATH}` : SOCIAL_IMAGE_PATH;

  return [
    { title: SEO_TITLE },
    { name: 'description', content: SEO_DESCRIPTION },
    { property: 'og:site_name', content: BRAND_NAME },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: SEO_TITLE },
    { property: 'og:description', content: SEO_DESCRIPTION },
    { property: 'og:image', content: imageUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: SEO_TITLE },
    { name: 'twitter:description', content: SEO_DESCRIPTION },
    { name: 'twitter:image', content: imageUrl },
    ...(siteUrl
      ? [
          { property: 'og:url', content: siteUrl },
          { tagName: 'link', rel: 'canonical', href: siteUrl },
        ]
      : []),
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: BRAND_NAME,
        description: SEO_DESCRIPTION,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      },
    },
  ];
};

export const loader = () => Response.json({});

/**
 * Landing page component for CodeMasti
 * Note: Settings functionality should ONLY be accessed through the sidebar menu.
 * Do not add settings button/panel to this landing page as it was intentionally removed
 * to keep the UI clean and consistent with the design system.
 */
export default function Index() {
  return (
    <div className="flex flex-col h-full w-full bg-bolt-elements-background-depth-1">
      <Header />
      <ClientOnly fallback={<BaseChat />}>{() => <Chat />}</ClientOnly>
      <FirstRunOnboarding />
    </div>
  );
}
