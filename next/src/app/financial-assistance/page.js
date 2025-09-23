'use client';
import { useRef } from 'react';

import HeroV2 from "@/components/sections/hero-v2/HeroV2";
import AssistanceBenefits from "@/components/sections/assistance-benefits/AssistanceBenefits";
import GovernmentAssistance from "@/components/sections/government-assistance/GovernmentAssistance";
import FoundationProgram from "@/components/sections/foundation-program/FoundationProgram";
import TitleText from "@/components/sections/title-text/TitleText";
import PatientAssistance from "@/components/sections/patient-assistance/PatientAssistance";
import ImageText from "@/components/sections/image-text/ImageText";
import CoverageWaterfall from "@/components/sections/coverage-waterfall/CoverageWaterfall";

export default function FinancialAssistancePage() {
    const nextSectionRef = useRef(null);

    const titleText = {
        Title: [
            {
                type: "heading",
                level: 2,
                children: [
                    { type: "text", text: "Manufacturer Co-Pay" },
                    { type: "text", text: " Automation", bold: true },
                ],
            },
        ],
        Text: [
            {
                type: "paragraph",
                children: [
                    { type: "text", text: "Co-pay programs can slash out-of-pocket costs, but they’re easy to miss. " },
                    { type: "text", text: "Cinnamon does the heavy lifting", bold: true },
                    { type: "text", text: ": " },
                ],
            },
            {
                type: "list",
                format: "unordered",
                children: [
                    { type: "list-item", children: [{ type: "text", text: "real-time eligibility," }] },
                    { type: "list-item", children: [{ type: "text", text: "the right offer for the therapy," }] },
                    { type: "list-item", children: [{ type: "text", text: "one-click delivery." }] },
                ],
            },
            { type: "paragraph", children: [{ type: "text", text: "" }] },
            { type: "paragraph", children: [{ type: "text", text: "One-click delivery:", bold: true }] },
            {
                type: "list",
                format: "unordered",
                children: [
                    { type: "list-item", children: [{ type: "text", text: "e-voucher, " }] },
                    { type: "list-item", children: [{ type: "text", text: "digital card, " }] },
                    { type: "list-item", children: [{ type: "text", text: "specialty workflow." }] },
                ],
            },
            { type: "paragraph", children: [{ type: "text", text: "" }] },
            { type: "paragraph", children: [{ type: "text", text: "So patients use it now and teams stay compliant." }] },
            { type: "paragraph", children: [{ type: "text", text: "" }] },
            { type: "paragraph", children: [{ type: "text", text: "Commercial insurance only; federal program exclusions apply." }] },
        ],
    };

    return (
        <main>
            <HeroV2 scrollTargetRef={nextSectionRef} />
            <AssistanceBenefits ref={nextSectionRef} />
            <GovernmentAssistance />
            <FoundationProgram />
            <TitleText data={titleText} />
            <PatientAssistance />
            <ImageText />
            <CoverageWaterfall />
        </main>
    );
}

