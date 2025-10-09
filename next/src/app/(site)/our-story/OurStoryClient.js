"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import AccessBarriers from "@/components/sections/access-barriers/AccessBarriers";
import OurStory from "@/components/sections/our-story/OurStory";
import OurTeam from "@/components/sections/our-team/OurTeam";

export default function PremierAccessPage() {


    const heroData = {
        title: "The Founders’<br /> <em>Mindset</em>",
        subtitle: "Operator-founders Eric Geslien and Bryan Andrade bring product discipline to healthcare.<br /> They build where it matters most, at the point of care, and measure success by what truly counts:<br /> <strong>less friction, faster starts</strong>, and programs delivered right the first time.",
    }

    return (
        <>
            <HeroV2 data={heroData} />
            <AccessBarriers />
            <OurStory />
            <OurTeam />
        </>
    );
}

