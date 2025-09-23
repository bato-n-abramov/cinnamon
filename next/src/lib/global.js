import { sfetch } from '@/lib/strapi';

export async function getGlobal() {
  const json = await sfetch('/api/global', {
    query: {
      populate: {
        Header: {
          populate: '*'
        },
        Footer: {
          populate: '*'
        },
      },
      publicationState: 'live',
    },
  });

  return json?.data ?? null;
}