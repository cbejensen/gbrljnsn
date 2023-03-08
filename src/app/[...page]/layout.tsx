import { Header } from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container m-auto">
      <Header />
      <main className="px-8">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
