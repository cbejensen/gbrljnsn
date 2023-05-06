import '@/builder';
import { Layout } from '@/components/Layout';
import '@/styles/globals.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Quattrocento } from 'next/font/google';
import type { ReactElement, ReactNode } from 'react';

const quattrocento = Quattrocento({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-quattrocento',
});

export type NextPageWithLayout<Props = {}, InitialProps = Props> = NextPage<
  Props,
  InitialProps
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout =
    Component.getLayout ??
    ((page) => <Layout className={quattrocento.className}>{page}</Layout>);

  return getLayout(
    <div className={quattrocento.className}>
      <Component {...pageProps} />
    </div>
  );
}
