import { builder } from '@builder.io/sdk';

builder.init(process.env.NEXT_PUBLIC_BUILDER_IO_KEY as string);

export const builderSSR = builder;
