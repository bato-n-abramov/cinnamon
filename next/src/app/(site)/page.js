import Hero from "@/components/sections/hero/Hero";
import TitleText from "@/components/sections/title-text/TitleText";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Logos from "@/components/sections/logos/Logos";
import Graphic from "@/components/sections/graphic/Graphic";
import Features from "@/components/sections/features/Features";
import CostBurnout from "@/components/sections/cost-burnout/CostBurnout";


const heroData = {
  heading: "One platform. \nOne partner. <em>Zero cost</em>",
  text: "Each successful handoff strengthens trust and accelerates the next, forming a flywheel that compounds across the network and moves care forward.",
  items: [
    {
      id: 55,
      items_title: "For Health Systems",
      items_text: "Workflow efficiencies, revenue growth, and more patients served.",
    },
    {
      id: 56,
      items_title: "For Patients",
      items_text: "Access to care and better experiences throughout their medication journeys.",
    },
    {
      id: 57,
      items_title: "For Manufacturers",
      items_text: "Prior authorization approvals, access to workflows, and medication adherence.",
    },
  ],
  CTA: {
    text: "Learn More",
    URL: "/contact",
    target: "_self",
  },
}

const titleTextData = {
  Title: "<strong>The Bridge</strong> Across<br/>the Ecosystem",
  Text: "Healthcare is a complex adaptive ecosystem, and Cinnamon is the first company to build a platform that provides benefits to all stakeholders simultaneously. <br /> <br /> Medication access works when health systems, patients, and manufacturers engage synchronously. <br /> <br /> Cinnamon aligns all three so the path to therapy is efficient, affordable, and accurate, streamlining pharmacy practices and enhancing patient experiences."
}

const HowItWorksData = {
  Title: "Our real time connection to the <strong>EHR unlocks</strong>",
  "main_content": {
    "id": 4,
    "Title": "Medication Access ",
    "Text": "Cinnamon reduces barriers to medication access, driving stronger adherence, fewer treatment interruptions, and improved outcomes."
  },
  "Subtitle": "Cinnamon connects Prior Authorization AI, Patient Assistance, and Adherence Campaigns. All centered on faster, easier Medication Access.",
  "items_list": [
    {
      "id": 6,
      "Title": "Prior Authorization",
      "Text": "Cinnamon transforms Prior Authorization through accelerated approvals, reduced denials, and enables providers to focus on patient care.",
      "Icon": {
        "id": 30,
        "url": "/shield_tick_2_8cce7cc422.svg",
      },
      "Link": {
        "id": 5,
        "Link_url": "/prior-authorization",
        "Link_title": "Learn More",
        "Link_target": "_self"
      }
    },
    {
      "id": 7,
      "Title": "Patient Assistance",
      "Text": "Cinnamon unifies charity care, nonprofit grants, and manufacturer copay programs and PAPs in one workflow.",
      "Icon": {
        "id": 29,
        "url": "/heart.svg",
      },
      "Link": {
        "id": 5,
        "Link_url": "/financial-assistance",
        "Link_title": "Learn More",
        "Link_target": "_self"
      }
    },
    {
      "id": 5,
      "Title": "Adherence Campaigns",
      "Text": "Reauthorization notifications, re-enrollment, and medication adherence reminders.",
      "Icon": {
        "id": 28,
        "url": "/task_square_2_84adbd3bbb.svg",
      },
      "Link": null
    }
  ]
}

const logosData = {
  Title: "Trusted by",
  Images: [
    { id: 23, url: "/Mask_group_6385aff067.png", width: 180, height: 27, name: "Mask group.png" },
    { id: 17, url: "/Mask_group_5_a0cff2bb86.png", width: 180, height: 51, name: "Mask group-5.png" },
    { id: 15, url: "/Mask_group_4_5fca5d81fc.png", width: 180, height: 39, name: "Mask group-4.png" },
    { id: 14, url: "/Mask_group_3_24ae6c5233.png", width: 180, height: 51, name: "Mask group-3.png" },
    { id: 13, url: "/Mask_group_1_934ee02d69.png", width: 180, height: 45, name: "Mask group-1.png" },
    { id: 12, url: "/Mask_group_2_52c581c897.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 33, url: "/Mask_group.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 44, url: "/Mask_group-1.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 45, url: "/Mask_group-2.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 46, url: "/Mask_group-3.png", width: 180, height: 51, name: "Mask group-2.png" },
    { id: 47, url: "/Mask_group-4.png", width: 180, height: 51, name: "Mask group-2.png" },
  ],
}

const graphicData = {
  Title: "Patient medication <strong>journey</strong>",
  "Subtitle": "Cinnamon automates prior authorization, unlocks patient assistance, and accelerates adherence.",
}

const featuresData = {
  Title: "Why Teams Choose <strong>Cinnamon</strong>",
  Subtitle: "One Partner, One Platform and a Zero-Cost Connection for Health Systems",
  Features_Items: [
    {
      id: 4,
      Image: { url: "/colorfilter_aacd3338df.svg" },
      Text: "A financial EHR overlay that sits on top of <strong>Epic, Oracle, Meditech, Flatiron</strong> and more"

    },
    {
      id: 5,
      Image: { url: "/layer_99c212c313.svg" },
      Text: "<strong>One screen</strong> - no hopping between tools"
    },
    {
      id: 6,
      Image: { url: "/flash_98ab049537.svg" },
      Text: "<strong>Application submission automation</strong> with the accuracy to cut time-to-therapy"
    },
  ],
}

const costBurnoutData = {
  title: "Engineered Advantages",
  items: ['<strong>Real-time connection</strong> to the health-system EHR', '<strong>FHIR-based pipelines</strong> for EHR data requests', '<strong>Coverage Waterfall</strong> that benefits health systems and patients']
}

export const metadata = {
  title: "Cinnamon Health",
};

export default function Home() {

  return (
    <main>
      <Hero data={heroData} />
      <TitleText data={titleTextData} />
      <HowItWorks data={HowItWorksData} />
      <Logos data={logosData} />
      <Graphic data={graphicData} />
      <Features data={featuresData} />
      <CostBurnout data={costBurnoutData} />
    </main>
  );
}
