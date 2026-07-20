import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  async redirects() {
    return [
      { source: '/our-story', destination: '/about-us', permanent: true },
      { source: '/smart-pad', destination: '/venille-ai', permanent: true },
      {
        source: '/blog/girlified-women-and-girls-engagement',
        destination: '/stories/empowering-women-in-jebu-miango',
        permanent: true,
      },
      {
        source: '/blog/empowering-girls-on-international-day-of-the-girl-child',
        destination: '/stories/venille-national-conversation-menstrual-health',
        permanent: true,
      },
      {
        source: '/blog/10-million-sanitary-napkins',
        destination: '/stories/776-fellowship',
        permanent: true,
      },
      {
        source: '/blog/girlified-x-mit',
        destination: '/stories/undp-selection',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/stories',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/stories/:path*',
        permanent: true,
      },
    ];
  },
});
