import { BuilderComponent } from '@builder.io/react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
	const { model } = router.query;
  return model && <BuilderComponent model={model as string} />;
}
