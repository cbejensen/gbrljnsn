import { withChildren } from '@builder.io/react';
import { Builder, builder } from '@builder.io/sdk';
import { Link } from './components/Link';

builder.init(process.env.NEXT_PUBLIC_BUILDER_IO_KEY as string);

Builder.registerComponent(withChildren(Link), {
  name: 'Link',
  inputs: [
    {
      name: 'href',
      friendlyName: 'URL',
      type: 'url',
      required: true,
      defaultValue: '/',
    },
  ],
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: { name: 'Text', options: { text: 'Text' } },
    },
  ],
});
