"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import GovernmentAssistance from "@/components/sections/government-assistance/GovernmentAssistance";
import CoverageWaterfall from "@/components/sections/coverage-waterfall/CoverageWaterfall";
import AssistanceBenefits from "@/components/sections/assistance-benefits/AssistanceBenefits";
import FoundationProgram from "@/components/sections/foundation-program/FoundationProgram";
import ImageList from "@/components/sections/image-list/ImageList";
import AssistanceBenefitsV2 from "@/components/sections/assistance-benefits-v2/AssistanceBenefitsV2";
import CharityCare from "@/components/sections/charity-care/CharityCare";

export default function FinancialAssistancePage() {

    const heroData = {
        title: "Smart <br /><em>Financial Assistance</em>",
        subtitle: "Automated, compliant support that lowers costs and improves adherence.",
    }

    return (
        <main>
            <HeroV2 data={heroData} />
            <AssistanceBenefits />
            <GovernmentAssistance />
            <FoundationProgram />
            <ImageList />
            <AssistanceBenefitsV2 />
            <CharityCare />
            <CoverageWaterfall />
        </main>
    );
}

