// import { builderSSR } from './builder.ssr';
import { builder } from '@builder.io/sdk';
import React from 'react';

import { MyCustomComponent } from './builder-test';

builder.init(process.env.BUILDER_IO_KEY as string);

// const getPage = async ({ params }) => {
//   const urlPath = Array.isArray(params?.page)
//     ? params?.page.join('/')
//     : params?.page ?? '';

//   // Fetch the builder content
//   const page = await builder
//     .get('page', { userAttributes: { urlPath } })
//     .toPromise();

//   return {
//     props: {
//       page: page || null,
//     },
//     revalidate: 5,
//   };
// };

export async function generateStaticParams() {
  const pages = await builder.getAll('page', {
    fields: 'data.url',
    options: { noTargeting: true },
  });
  return (
    (pages ?? [])
      .map(({ data }) => {
        if (!data?.url) {
          return;
        }
        // filter removes leading/trailing slash
        const segments = data.url.split('/').filter(Boolean);
        return { page: segments };
      })
      // ignores page with no URL
      .filter(Boolean)
  );
}

export default async function Page({
  params: { page },
}: {
  params: { page: string[] };
}) {
  return (
    <main>
      <h1>Path:</h1>
      {page.join('/')}
      <MyCustomComponent />
    </main>
  );
}
