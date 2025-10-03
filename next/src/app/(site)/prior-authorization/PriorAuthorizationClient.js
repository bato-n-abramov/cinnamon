"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import KeyBenefits from "@/components/sections/key-benefits/KeyBenefits";
import HigherAccuracy from "@/components/sections/higher-accuracy/HigherAccuracy";
import CostBurnoutV2 from "@/components/sections/cost-burnout-v2/CostBurnoutV2";
import Impact from "@/components/sections/impact/Impact";
import SpeedToTherapy from "@/components/sections/speed-to-therapy/SpeedToTherapy";
import ImageTextV2 from "@/components/sections/image-text-v2/ImageTextV2";



export default function PriorAuthorizationPage() {


    const heroData = {
        title: "Cinnamon <br /><em>Prior Authorization AI</em>",
        subtitle: "Cinnamon transforms prior authorization from one of healthcare’s biggest bottlenecks into a seamless, automated process. Our <strong>Prior Authorization AI</strong> accelerates approvals, reduces denials, and frees providers to focus on patient care. <strong>Not paperwork</strong>.",
    }

    const costBurnoutData = {
        title: "<strong>Lower Cost</strong><br /> & Less Burnout",
        items: ["Providers <strong>save thousands</strong> in administrative overhead.", "Automated workflows <strong>reduce staff burden and physician burnout.</strong>", "Freed resources can be redirected to direct <strong>patient care.</strong>"],
        image: "/CostBurnoutV2.png"
    }



    return (
        <main>
            <HeroV2 data={heroData} />
            <KeyBenefits />
            <HigherAccuracy />
            <ImageTextV2 />
            <SpeedToTherapy />
            <CostBurnoutV2 data={costBurnoutData} />
            <Impact />
        </main>
    );
}

