import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Venille Awarded $100,000 Fellowship by 776 Foundation to Build a Future Where Periods Don’t Pollute – Venille Stories',
  description: 'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, co-founder of Reddit, and awarded a $100,000 grant.',
  openGraph: {
    title: 'Venille Awarded $100,000 Fellowship by 776 Foundation to Build a Future Where Periods Don’t Pollute',
    description: 'We are proud to announce that Venille Ltd has been selected for the 776 Foundation Fellowship, backed by Alexis Ohanian, co-founder of Reddit, and awarded a $100,000 grant.',
    url: 'https://venille.com.ng/stories/776-fellowship',
    siteName: 'Venille',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
