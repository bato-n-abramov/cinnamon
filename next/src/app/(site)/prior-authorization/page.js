import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";
import PriorAuthorizationClient from "./PriorAuthorizationClient";

export const dynamic = "force-static";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/prior-authorization";
    const url = `${base}${path}`;

    const title = "Prior Authorization AI — Cinnamon Health";
    const description =
        "Cinnamon transforms prior authorization with AI-driven automation—accelerating approvals, reducing denials, and freeing providers to focus on patient care.";

    const ogImage = "/og/default.jpg";

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            url,
            siteName: "Cinnamon Health",
            title,
            description,
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Prior Authorization AI — Cinnamon Health" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}


export default function Page() {

    const base = getBaseUrl();
    const url = `${base}/prior-authorization`;

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Prior Authorization",
        url,
        description:
            "Cinnamon transforms prior authorization with AI-driven automation—accelerating approvals, reducing denials, and freeing providers to focus on patient care.",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon Health" },
    };

    return (
        <main>
            <PriorAuthorizationClient />
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}
