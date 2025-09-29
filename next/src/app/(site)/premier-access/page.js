"use client";
import { useRef } from "react";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import ProductOverview from "@/components/sections/product-overview/ProductOverview";
import WhyPremierAccess from "@/components/sections/why-premier-access/WhyPremierAccess";

export default function PremierAccessPage() {
    const nextSectionRef = useRef(null);


    const heroData = {
        title: "Premier Access",
        subtitle: "<strong>Empowering</strong> pharmaceutical brands to optimize patient access and outcomes. Discover how Premier Access can elevate your brand’s impact while reducing operational complexities.",
        cta: {
            url: "#",
            text: "Talk to our team",
        }
    }

    return (
        <main>
            <HeroV2 data={heroData} scrollTargetRef={nextSectionRef} />
            {/* <ProductOverview /> */}
            <WhyPremierAccess />
        </main>
    );
}

