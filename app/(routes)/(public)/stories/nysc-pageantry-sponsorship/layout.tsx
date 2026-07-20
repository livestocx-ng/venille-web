import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NYSC Pageantry Sponsorship – Venille Stories',
  description: 'Venille sponsors NYSC pageantry to promote menstrual health awareness among young women.',
  openGraph: {
    title: 'NYSC Pageantry Sponsorship',
    description: 'Venille sponsors NYSC pageantry to promote menstrual health awareness among young women.',
    url: 'https://venille.com.ng/stories/nysc-pageantry-sponsorship',
    siteName: 'Venille',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
