"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import WhyPremierAccess from "@/components/sections/why-premier-access/WhyPremierAccess";

export default function PremierAccessPage() {


    const heroData = {
        title: "Premier Access",
        subtitle: "Premier Access <strong>is the transformative solution</strong> for pharmaceutical brands seeking to streamline the journey from high-cost drug prescriptions <strong>to patient success.</strong>",
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

