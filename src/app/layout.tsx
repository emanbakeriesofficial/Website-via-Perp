import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';

export const metadata: Metadata = {
  title: 'ERTQA | Crafted Gifts, Awards & Experiential Design Solutions',
  description:
    'From concept to creation, ERTQA designs and manufactures premium gifts, awards, and custom products that reflect your brand identity and bring every occasion to life.',
  openGraph: {
    type: 'website',
    title: 'ERTQA | Crafted Gifts, Awards & Experiential Design Solutions',
    description:
      'From concept to creation, ERTQA designs and manufactures premium gifts, awards, and custom products that reflect your brand identity and bring every occasion to life.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERTQA | Crafted Gifts, Awards & Experiential Design Solutions',
    description:
      'From concept to creation, ERTQA designs and manufactures premium gifts, awards, and custom products that reflect your brand identity and bring every occasion to life.',
  },
  icons: {
    icon: 'https://framerusercontent.com/images/pmmr9z5snD2P20Bedm7yUIerAkE.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
