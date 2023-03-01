import Link from 'next/link';

import { builderSSR } from '@/builder/ssr';

interface NavLink {
  text: string;
  url: string;
}

export async function Header() {
  const navLinks = await builderSSR.getAll('nav-link');
  return (
    <header>
      <ul className="flex gap-6 py-8 px-4">
        {navLinks
          .map(({ data }) => data as NavLink)
          .map(({ text, url }) => (
            <li key={url}>
              <Link href={url as Route}>{text}</Link>
            </li>
          ))}
      </ul>
    </header>
  );
}
