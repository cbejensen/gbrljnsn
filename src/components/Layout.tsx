import { ReactNode } from 'react';
import { Header } from './Header';

export function Layout({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <div className={`min-h-screen flex ${className}`}>
      <div className="w-[30px] bg-[#72a99c]"></div>
      <div className="flex-1">
        <div className="flex flex-col h-full mx-8">
          <Header />
          <main className="flex-1 px-12 py-16">
            {children}
          </main>
          <footer className="text-center text-sm py-8 border-t">
            © 2023 by Gabriel Jensen
          </footer>
        </div>
      </div>
    </div>
  );
}
