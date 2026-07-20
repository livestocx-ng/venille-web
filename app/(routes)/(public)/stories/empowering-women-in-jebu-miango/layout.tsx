import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Empowering Women in Jebu Miango: Venille's Outreach for World Health Day – Venille Stories",
  description: 'Community outreach bringing menstrual health education and eco-friendly pads to women in Jebu Miango.',
  openGraph: {
    title: "Empowering Women in Jebu Miango: Venille's Outreach for World Health Day",
    description: 'Community outreach bringing menstrual health education and eco-friendly pads to women in Jebu Miango.',
    url: 'https://venille.com.ng/stories/empowering-women-in-jebu-miango',
    siteName: 'Venille',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
