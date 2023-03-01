import './globals.css';

import { Quattrocento } from 'next/font/google';

const quattrocento = Quattrocento({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-quattrocento',
});

export const metadata = {
  title: 'Gabriel Jensen',
  description:
    'I am just a man named Gabriel who creates things like poetry, devotionals, and music',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${quattrocento.variable} font-serif`}>{children}</body>
    </html>
  );
}
