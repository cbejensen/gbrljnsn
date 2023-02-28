import React from 'react';

import { builderSSR } from '@/builder/ssr';

import { BuilderClient } from '../../builder/BuilderClient';

export async function generateStaticParams() {
  const pages = await builderSSR.getAll('page', {
    fields: 'data.url',
    options: { noTargeting: true },
  });
  return (
    (pages ?? [])
      .map(({ data }) => {
        if (!data?.url) {
          return;
        }
        const segments = data.url
          .split('/')
          // remove leading/trailing slash
          .filter(Boolean);
        return { page: segments };
      })
      // ignore pages with no URL
      .filter(Boolean)
  );
}

export default async function Page({
  params: { page },
}: {
  params: { page: string[] };
}) {
  const content = await builderSSR
    .get('page', { url: '/' + page.join('/') })
    .promise();
  return (
    <main>
      <h1>Path: /{page.join('/')}</h1>
      <BuilderClient model="page" content={content} />
    </main>
  );
}
