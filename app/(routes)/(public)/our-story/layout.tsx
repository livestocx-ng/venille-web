import type { Metadata } from 'next';
import { SITE_URL } from '@/core/utilities';

export const metadata: Metadata = {
  title: 'Venille - Our Story',
  description:
    'Revolutionizing period health with sanitary pads made from upcycled banana stem fiber. Comfortable, highly absorbent, chemical-free, and completely plastic-free.',
  keywords: [
    'Venille',
    'Sanitary Pads',
    'Banana Stem Fiber',
    'Plant-based Period Care',
    'Eco-friendly Pads',
    'Eco-friendly Pads',
    'Menstrual Health',
    'Period Poverty',
  ],
  openGraph: {
    title: 'Venille - Our Story',
    description:
      'Revolutionizing period health with sanitary pads made from upcycled banana stem fiber. Comfortable, highly absorbent, chemical-free, and completely plastic-free.',
    url: SITE_URL,
    siteName: 'Venille',
    type: 'website',
    images: [
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/975f9859-8d4f-4750-b8c0-996558021936.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/975f9859-8d4f-4750-b8c0-996558021936.jpeg',
        width: 300,
        height: 200,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6aaf925c-ce92-471f-82b9-fcf61156fc27.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6aaf925c-ce92-471f-82b9-fcf61156fc27.jpeg',
        width: 300,
        height: 300,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        alt: 'Venille Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        alt: 'Venille Banner',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@venilleng',
    creator: '@venilleng',
    title: 'Venille - Our Story',
    description:
      'Revolutionizing period health with sanitary pads made from upcycled banana stem fiber. Comfortable, highly absorbent, chemical-free, and completely plastic-free.',
    images: [
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/975f9859-8d4f-4750-b8c0-996558021936.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/975f9859-8d4f-4750-b8c0-996558021936.jpeg',
        width: 300,
        height: 200,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6aaf925c-ce92-471f-82b9-fcf61156fc27.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/6aaf925c-ce92-471f-82b9-fcf61156fc27.jpeg',
        width: 300,
        height: 300,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        alt: 'Venille Banner',
        width: 1200,
        height: 630,
      },
      {
        url: 'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        secureUrl:
          'https://afritint-media.s3.eu-north-1.amazonaws.com/versions/original/4cbeda68-4293-4d8b-b1f8-a4f7af11856e.jpeg',
        alt: 'Venille Banner',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
