const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const TOKEN = process.env.STRAPI_API_TOKEN;

export async function sfetch(path, { revalidate, query } = {}) {
  const qs = query ? `?${new URLSearchParams(flatten(query))}` : '';
  const res = await fetch(`${STRAPI_URL}${path}${qs}`, {
    headers: TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {},
    next: { revalidate: revalidate ?? Number(process.env.NEXT_REVALIDATE_SECONDS || 60) },
  });
  if (!res.ok) {
    throw new Error(`Strapi ${res.status} ${path}`);
  }
  return res.json();
}


function flatten(o, p = '', out = {}) {
  Object.keys(o || {}).forEach((k) => {
    const key = p ? `${p}[${k}]` : k;
    if (typeof o[k] === 'object' && o[k] !== null) {
      flatten(o[k], key, out);
    } else {
      out[key] = String(o[k]);
    }
  });
  return out;
}
