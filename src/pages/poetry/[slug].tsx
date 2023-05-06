import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { BuilderContent } from '@builder.io/sdk';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

export default function Poem({ poem }: { poem: BuilderContent }) {
  const router = useRouter();
  const isPreviewing = useIsPreviewing();
  if (!router.isFallback && !poem && !isPreviewing) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <BuilderComponent
      options={{ includeRefs: true }}
      model="poem"
      content={poem}
    />
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let poem =
    (await builder
      .get('poem', {
        includeRefs: true,
        query: {
          'data.slug': slug,
        },
      })
      .toPromise()) || null;

  return {
    props: {
      poem,
    },
  };
}

export async function getStaticPaths() {
  const poems = await builder.getAll('poem', {
    options: { noTargeting: true },
  });
  return {
    paths: poems?.map((poem) => `/poetry/${poem.data?.slug}`) || [],
    fallback: true,
  };
}
