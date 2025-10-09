import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";
import OurStoryClient from "./OurStoryClient";

export const dynamic = "force-static";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/our-story";
    const url = `${base}${path}`;

    const title = "Our Story — Cinnamon Health";
    const description =
        "Operator-founders Eric Geslien and Bryan Andrade bring product discipline to healthcare—building at the point of care and measuring what matters: less friction, faster starts, and first-time-right programs.";

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
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Our Story — Cinnamon Health" }],
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
    const url = `${base}/our-story`;

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Our Story",
        url,
        description:
            "Operator-founders Eric Geslien and Bryan Andrade bring product discipline to healthcare—building at the point of care and measuring what matters.",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon Health" },
    };

    return (
        <main>
            <OurStoryClient />
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}
