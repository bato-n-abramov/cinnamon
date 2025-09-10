import { sfetch } from "@/lib/strapi";

export const revalidate = 60;

async function getPage(slug) {
  const json = await sfetch("/api/pages", {
    query: {
      filters: { slug: { $eq: slug } },
      populate: { sections: { populate: "*" } },
    },
  });
  return json?.data?.[0] || null;
}

export default async function Page({ params }) {
  const page = await getPage(params.slug);

  if (!page) return <h1>Not found</h1>;

  return (
    <main>
      <h1>{page.Title}</h1>
      {page.sections?.map((s, i) => <Section key={i} data={s} />)}
    </main>
  );
}

function Section({ data }) {
  switch (data.__component) {
    case "hero.hero":
      return (
        <section className="hero">
          <h2>{data.Title}</h2>
          {data.Image?.url && (
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.Image.url}`}
              alt=""
              width={data.Image.width}
              height={data.Image.height}
            />
          )}
        </section>
      );
 
    default:
      return null;
  }
}
