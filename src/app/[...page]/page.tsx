import { builder } from '@builder.io/sdk';
import React from 'react';

import { BuilderClient } from './builder-client';

builder.init(process.env.NEXT_PUBLIC_BUILDER_IO_KEY as string);

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
  const content = await builder
    .get('page', { url: '/' + page.join('/') })
    .promise();
  return (
    <main>
      <h1>Path: /{page.join('/')}</h1>
      <BuilderClient model="page" content={content} />
    </main>
  );
}
