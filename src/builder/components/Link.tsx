import { default as NextLink } from 'next/link';
import { ComponentProps } from 'react';

export function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink {...props} className='hover:text-primary' href={props.href ?? ''} />;
}
