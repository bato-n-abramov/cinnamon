"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import WhyPremierAccess from "@/components/sections/why-premier-access/WhyPremierAccess";

export default function PremierAccessPage() {


    const heroData = {
        title: "Premier Access",
        subtitle: "<strong>Empowering</strong> pharmaceutical brands to optimize patient access and outcomes. Discover how Premier Access can elevate your brand’s impact while reducing operational complexities.",
        cta: {
            url: "/contact",
            text: "Talk to our team",
        }
    }

    return (
        <main>
            <HeroV2 data={heroData} />
            <WhyPremierAccess />
        </main>
    );
}

