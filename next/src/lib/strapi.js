import qs from 'qs';

const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL || '').replace(/\/+$/, '');
const TOKEN = (process.env.STRAPI_API_TOKEN || '').trim();


export async function sfetch(path, { revalidate, query, cache } = {}) {
  if (!STRAPI_URL) {
    throw new Error('Missing NEXT_PUBLIC_STRAPI_URL');
  }

  const qsString = query ? `?${qs.stringify(query, { encodeValuesOnly: true })}` : '';
  const url = `${STRAPI_URL}${path}${qsString}`;
console.log('[sfetch]', url);  
  const headers = { Accept: 'application/json' };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const res = await fetch(url, {
    headers,
    cache: cache ?? undefined,
    next: { revalidate: revalidate ?? Number(process.env.NEXT_REVALIDATE_SECONDS || 60) },
  });

  if (!res.ok) {
    let detail = '';
    try { detail = await res.text(); } catch {}
    console.error('Strapi HTTP error', res.status, url, detail);
    throw new Error(`Strapi ${res.status} ${path}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

// media helper
export const mediaUrl = (u) =>
  u?.startsWith('http') ? u : `${STRAPI_URL}${u || ''}`;
