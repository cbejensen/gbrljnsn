import builder from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from './NavLink';

export function Header() {
	const [linksArray, setLinksArray] = useState<BuilderContent[]>()
	useEffect(() => {
		builder.getAll('nav-links').then(setLinksArray);
	}, [])
	
  const { data } = linksArray?.[0] ?? {};
  const { links } = (data ?? { links: [] }) as {
    links: { text: string; url: string }[];
  };

  return (
    <header>
      <nav>
        <ul className="flex gap-6 py-8 px-4">
          <li className="mr-8">
            <Link href="/" className="p-1 text-gray-500">
              Gabriel Jensen
            </Link>
          </li>
          {links.map(({ text, url }) => (
            <li key={url}>
              <NavLink href={url}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
