import { default as NextLink } from 'next/link';
import { ComponentProps } from 'react';

export function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} href={props.href ?? ''} />;
}
