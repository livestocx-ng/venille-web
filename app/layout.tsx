import React from 'react';
import localFont from 'next/font/local';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/notifications/styles.css';
import './global.css';
import { theme } from '@/core/themes';
import { SITE_URL } from '@/core/utilities';

import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { ClientLayout } from '@/core/components/layout/clientLayout';

const outfit = localFont({
  src: './fonts/outfit-latin-wght-normal.woff2',
  variable: '--font-outfit',
  display: 'swap',
  weight: '100 900',
});

const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Venille – Sustainable Menstrual Health and Hygiene',
  description:
    'Zero leaks, maximum comfort, environmentally friendly sanitary pads. Venille delivers sustainable menstrual health and hygiene solutions across Nigeria.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ClientLayout>{children}</ClientLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
