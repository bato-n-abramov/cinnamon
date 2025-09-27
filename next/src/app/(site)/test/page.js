"use client";

import KeyBenefitsV2 from "@/components/sections/key-benefits-v2/KeyBenefitsV2";
import SpeedToTherapyV2 from "@/components/sections/speed-to-therapy-v2/SpeedToTherapyV2";
import ImageTextV3 from "@/components/sections/image-text-v3/ImageTextV3";
import CostBurnoutV2 from "@/components/sections/cost-burnout-v2/CostBurnoutV2";
import ImpactV2 from "@/components/sections/impact-v2/ImpactV2";
import AssistanceBenefitsV2 from "@/components/sections/assistance-benefits-v2/AssistanceBenefitsV2";
import FoundationProgramV2 from "@/components/sections/foundation-program-v2/FoundationProgramV2";
import ImageList from "@/components/sections/image-list/ImageList";
import AssistanceBenefitsV3 from "@/components/sections/assistance-benefits-v3/AssistanceBenefitsV3";

export default function TestPage() {

    const costBurnoutData = {
        title: "<strong>Lower Cost</strong><br /> & Less Burnout",
        items: ["Providers <strong>save thousands</strong> in administrative overhead.", "Automated workflows <strong>reduce staff burden and physician burnout.</strong>", "Freed resources can be redirected to direct <strong>patient care.</strong>"],
        image: "/CostBurnoutV2.png"
    }

    return (
        <main>
            <KeyBenefitsV2 />
            <SpeedToTherapyV2 />
            <ImageTextV3 />
            <CostBurnoutV2 data={costBurnoutData} />
            <ImpactV2 />
            <AssistanceBenefitsV2 />
            <FoundationProgramV2 />
            <ImageList />
            <AssistanceBenefitsV3 />
        </main>
    );
}

