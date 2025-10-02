"use client";

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import GovernmentAssistance from "@/components/sections/government-assistance/GovernmentAssistance";
import PatientAssistance from "@/components/sections/patient-assistance/PatientAssistance";
import ImageText from "@/components/sections/image-text/ImageText";
import CoverageWaterfall from "@/components/sections/coverage-waterfall/CoverageWaterfall";
import AssistanceBenefitsV2 from "@/components/sections/assistance-benefits-v2/AssistanceBenefitsV2";
import FoundationProgramV2 from "@/components/sections/foundation-program-v2/FoundationProgramV2";
import ImageList from "@/components/sections/image-list/ImageList";
import AssistanceBenefitsV3 from "@/components/sections/assistance-benefits-v3/AssistanceBenefitsV3";
import CharityCare from "@/components/sections/charity-care/CharityCare";

export default function FinancialAssistancePage() {

    const heroData = {
        title: "Smart <br /><em>Financial Assistance</em>",
        subtitle: "Automated, compliant support that lowers costs and improves adherence.",
    }

    return (
        <main>
            <HeroV2 data={heroData} />
            <AssistanceBenefitsV2 />
            <GovernmentAssistance />
            <FoundationProgramV2 />
            <ImageList />
            <AssistanceBenefitsV3 />
            <CharityCare />
            <CoverageWaterfall />
        </main>
    );
}

