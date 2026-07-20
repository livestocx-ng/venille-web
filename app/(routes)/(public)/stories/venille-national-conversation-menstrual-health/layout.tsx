import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Venille Joins National Conversation on Menstrual Health – Venille Stories",
  description: "Contributing to Nigeria's national dialogue on period poverty, hygiene access, and women's empowerment.",
  openGraph: {
    title: "Venille Joins National Conversation on Menstrual Health and Women's Empowerment",
    description: "Contributing to Nigeria's national dialogue on period poverty, hygiene access, and women's empowerment.",
    url: 'https://venille.com.ng/stories/venille-national-conversation-menstrual-health',
    siteName: 'Venille',
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
