import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";
import PremierAccessClient from "./PremierAccessClient";

export const dynamic = "force-static";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/premier-access";
    const url = `${base}${path}`;

    const title = "Premier Access — Cinnamon Health";
    const description =
        "Empowering pharmaceutical brands to streamline high-cost drug access and improve patient outcomes—reducing operational complexity and accelerating starts.";

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
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Premier Access — Cinnamon Health" }],
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
    const url = `${base}/premier-access`;

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Premier Access",
        url,
        description:
            "Empowering pharmaceutical brands to streamline high-cost drug access and improve patient outcomes.",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon Health" },
    };

    return (
        <main>
            <PremierAccessClient />
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}
