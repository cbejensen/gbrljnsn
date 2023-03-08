import Link from 'next/link';

import { builderSSR } from '@/builder/ssr';

import { NavLink } from './NavLink';

export async function Header() {
  const data = await builderSSR.getAll('nav-links');
  const { data: content } = data[0];
  const { links } = (content ?? { links: [] }) as {
    links: { text: string; url: string }[];
  };

  return (
    <header>
      <nav>
        <ul className="flex gap-6 py-8 px-4 text-sm">
          <li className="mr-8">
            <Link href="/" className="p-1 text-gray-500">
              Gabriel Jensen
            </Link>
          </li>
          {links.map(({ text, url }) => (
            <li key={url}>
              <NavLink href={url as Route}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
