import Image from "next/image";
import { sfetch } from "@/lib/strapi";

export default async function Home() {
  const json = await sfetch("/api/pages", {
    query: {
      filters: { slug: { $eq: "home" } },
      populate: { sections: { populate: "*" } },
    },
  });

  const page = json?.data?.[0];
  if (!page) return <h1>No content</h1>;

  return (
    <main>
      {page.sections?.map((section) => (
        <Section key={section.id} data={section} />
      ))}
    </main>
  );
}

function Section({ data }) {
  switch (data.__component) {
    case "hero.hero":
      return (
        <section className="hero">
          <h1>{data.Title}</h1>
          {data.Image?.url && (
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.Image.url}`}
              alt={data.Image.alternativeText || ""}
              width={data.Image.width || 200}
              height={data.Image.height || 200}
            />
          )}
        </section>
      );

    default:
      return null;
  }
}
