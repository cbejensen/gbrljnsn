import Link from 'next/link';

import { builderSSR } from '@/builder/ssr';

interface NavLink {
  text: string;
  url: string;
}

export async function Header() {
  const data = await builderSSR.getAll('nav-links');
  console.log(data);
  const {
    data: { links },
  } = data[0];
  console.log(links);
  return (
    <header>
      <ul className="flex gap-6 py-8 px-4">
        {links.map(({ text, url }) => (
          <li key={url}>
            <Link href={url as Route}>{text}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
