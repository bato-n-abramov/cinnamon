import { sfetch } from '@/lib/strapi';
import { Section } from '@/components/sections';
import { homepageMock } from '@/mocks/homepage';
export const revalidate = 60; // ISR

async function getHomepage() {
  const json = await sfetch('/api/pages', {
    cache: 'no-store',
    revalidate: 0,
    query: {
      filters: { slug: { $eq: 'homepage' } },
      populate: {
        dynamic_zone: {
          on: {
            'dynamic-zone.hero': { populate: '*' },
            'dynamic-zone.title-text': { populate: '*' },

            'dynamic-zone.how-it-works': {
              populate: {
                items_list: { populate: '*' },
              },
            },
            // 'dynamic-zone.process-circles': {
            //   populate: {
            //     Process_circles: { populate: '*' }, 
            //   },
            // },
            'dynamic-zone.circles': {
              populate: {
                Circle_items: { populate: '*' },
              },
            },
            'dynamic-zone.logos': { populate: '*' },
            'dynamic-zone.features': {
              populate: {
                Features_Items: { populate: '*' },
              },
            },
            'dynamic-zone.grahic': {
              populate: '*'
            },

            'dynamic-zone.prefooter-home': { populate: '*' },

            // 'dynamic-zone.whatever': { populate: '*' },
          },
        },
      },
      publicationState: 'live',
    },
  });
  return json?.data?.[0] ?? null;
}




export default async function Home() {
  // const page = await getHomepage();
  const page = homepageMock;
  if (!page) return <main><h1>Empty</h1></main>;
  return (
    <main>
      {page.dynamic_zone?.map((block, i) => (
        <Section key={block.id ?? i} block={block} />
      ))}
    </main>
  );
}
