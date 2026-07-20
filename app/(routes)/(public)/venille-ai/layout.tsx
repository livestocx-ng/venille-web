import type { Metadata } from 'next';
import { SITE_URL } from '@/core/utilities';

export const metadata: Metadata = {
  title: 'Venille - Venille AI',
  description:
    'Venille AI helps girls and young women manage menstrual and sexual health via WhatsApp, mobile app, and USSD.',
  keywords: [
    'Venille',
    'Venille AI',
    'Digital Health',
    'Menstrual Health',
    'Period Tracking',
    'WhatsApp Health',
    'USSD',
    'Sexual Health Education',
  ],
  openGraph: {
    title: 'Venille - Venille AI',
    description:
      'Venille AI helps girls and young women manage menstrual and sexual health via WhatsApp, mobile app, and USSD.',
    url: `${SITE_URL}/venille-ai`,
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
    title: 'Venille - Venille AI',
    description:
      'Venille AI helps girls and young women manage menstrual and sexual health via WhatsApp, mobile app, and USSD.',
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
