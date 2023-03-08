'use client';

import { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export interface NavLinkProps {
  children: ReactNode;
  href: Route;
}

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`p-1 ${
        href === pathname ? 'bg-black hover:text-green-700' : ''
      }`}
    >
      {children}
    </Link>
  );
}
