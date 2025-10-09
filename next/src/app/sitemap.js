import { getBaseUrl } from "@/lib/baseUrl";

export default async function sitemap() {
    const base = getBaseUrl();
    const now = new Date();

    const routes = [
        "/",
        "/our-story",
        "/premier-access",
        "/prior-authorization",
        "/financial-assistance",
        "/privacy-policy",
        "/terms-of-use",
        "/contact",
    ];

    return routes.map((path) => ({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: path === "/" ? "weekly" : "monthly",
        priority: path === "/" ? 1.0 : 0.7,
    }));
}
