"use client";
import { useRef } from "react";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import KeyBenefits from "@/components/sections/key-benefits/KeyBenefits";
import ImageTextV2 from "@/components/sections/image-text-v2/ImageTextV2";
import SpeedToTherapy from "@/components/sections/speed-to-therapy/SpeedToTherapy";
import CostBurnout from "@/components/sections/cost-burnout/CostBurnout";
import Impact from "@/components/sections/impact/Impact";

export default function PriorAuthorizationPage() {
    const nextSectionRef = useRef(null);


    const heroData = {
        title: "Cinnamon <br /><em>Prior Authorization AI</em>",
        subtitle: "Cinnamon transforms prior authorization from one of healthcare’s biggest bottlenecks into a seamless, automated process. Our <strong>Prior Authorization AI</strong> accelerates approvals, reduces denials, and frees providers to focus on patient care. <strong>Not paperwork</strong>.",
    }

    const costBurnoutData = {
        title: "Lower Cost & Less Burnout",
        items: ["Providers <strong>save thousands</strong> in administrative overhead.", "Automated workflows <strong>reduce staff burden and physician burnout.</strong>", "Freed resources can be redirected to direct <strong>patient care.</strong>"]
    }


    return (
        <main>
            <HeroV2 data={heroData} scrollTargetRef={nextSectionRef} />
            <KeyBenefits ref={nextSectionRef} />
            <ImageTextV2 />
            <SpeedToTherapy />
            <CostBurnout data={costBurnoutData} />
            <Impact />
        </main>
    );
}

