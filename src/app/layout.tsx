import './globals.css';

export const metadata = {
  title: 'Gabriel Jensen',
  description:
    'I am just a man named Gabriel who creates things like poetry, devotionals, and music',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
