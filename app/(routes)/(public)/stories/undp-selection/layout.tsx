import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UNDP Selection – Venille Stories',
  description: 'Venille selected by the United Nations Development Programme for sustainable development impact.',
  openGraph: {
    title: 'UNDP Selection',
    description: 'Venille selected by the United Nations Development Programme for sustainable development impact.',
    url: 'https://venille.com.ng/stories/undp-selection',
    siteName: 'Venille',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
