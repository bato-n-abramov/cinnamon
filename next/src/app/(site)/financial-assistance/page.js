import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";
import FinancialAssistanceClient from "./FinancialAssistanceClient";

export const dynamic = "force-static";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/financial-assistance";
    const url = `${base}${path}`;

    const title = "Smart Financial Assistance — Cinnamon Health";
    const description =
        "Automated, compliant support that lowers costs and improves adherence. Unified workflows for charity care, nonprofit grants, copay programs, and PAPs.";

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
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Financial Assistance — Cinnamon Health" }],
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

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Financial Assistance",
        url: `${base}/financial-assistance`,
        description: "Automated, compliant support that lowers costs and improves adherence...",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon Health" },
    };

    return (
        <main>
            <FinancialAssistanceClient />
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}
