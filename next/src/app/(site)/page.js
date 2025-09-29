// import { sfetch } from '@/lib/strapi';
// import { Section } from '@/components/sections';
// import { homepageMock } from "@/mocks/homepage";
export const revalidate = 60; // ISR

import Hero from "@/components/sections/hero/Hero";
import TitleText from "@/components/sections/title-text/TitleText";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import Logos from "@/components/sections/logos/Logos";
import Graphic from "@/components/sections/graphic/Graphic";
import Features from "@/components/sections/features/Features";
import CostBurnout from "@/components/sections/cost-burnout/CostBurnout";

// async function getHomepage() {
//   const json = await sfetch('/api/pages', {
//     cache: 'no-store',
//     revalidate: 0,
//     query: {
//       filters: { slug: { $eq: 'homepage' } },
//       populate: {
//         dynamic_zone: {
//           on: {
//             'dynamic-zone.hero': { populate: '*' },
//             'dynamic-zone.title-text': { populate: '*' },

//             'dynamic-zone.how-it-works': {
//               populate: {
//                 items_list: { populate: '*' },
//               },
//             },
//             // 'dynamic-zone.process-circles': {
//             //   populate: {
//             //     Process_circles: { populate: '*' }, 
//             //   },
//             // },
//             'dynamic-zone.circles': {
//               populate: {
//                 Circle_items: { populate: '*' },
//               },
//             },
//             'dynamic-zone.logos': { populate: '*' },
//             'dynamic-zone.features': {
//               populate: {
//                 Features_Items: { populate: '*' },
//               },
//             },
//             'dynamic-zone.grahic': {
//               populate: '*'
//             },

//             'dynamic-zone.prefooter-home': { populate: '*' },

//             // 'dynamic-zone.whatever': { populate: '*' },
//           },
//         },
//       },
//       publicationState: 'live',
//     },
//   });
//   return json?.data?.[0] ?? null;
// }


const heroData = {
  __component: "dynamic-zone.hero",
  id: 21,
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
    id: 21,
    text: "Learn More",
    URL: "/contact",
    target: "_self",
  },
}

const titleTextData = {
  __component: "dynamic-zone.title-text",
  id: 16,
  Title: [
    {
      type: "heading",
      level: 2,
      children: [
        { type: "text", text: "The Bridge", bold: true },
        { type: "text", text: " Across the Ecosystem" },
      ],
    },
  ],
  Text: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Healthcare is a complex adaptive ecosystem, and Cinnamon is the first company to build a platform that provides benefits to all stakeholders simultaneously.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ type: "text", text: "" }],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Medication access works when health systems, patients, and manufacturers engage synchronously. Cinnamon aligns all three—so the path to therapy is efficient, affordable, and accurate. Resulting in streamlining pharmacy practices while enhancing patient experiences.",
        },
      ],
    },
  ],
}

const HowItWorksData = {
  "__component": "dynamic-zone.how-it-works",
  "id": 3,
  "Title": [
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Our real time connection to the "
        },
        {
          "type": "text",
          "text": "EHR unlocks",
          "bold": true
        }
      ],
      "level": 2
    }
  ],
  "main_content": {
    "id": 4,
    "Title": "Medication Access ",
    "Text": "Cinnamon unifies charity care, nonprofit grants, and manufacturer Co-pay programs and PAPs in one workflow."
  },
  "Subtitle": "Cinnamon connects Prior Authorization AI, Patient Assistance, and Adherence Campaigns - all centered on faster, easier Medication Access.",
  "items_list": [
    {
      "id": 6,
      "Title": "Prior Authorization",
      "Text": "Cinnamon transforms Prior Authorization through accelerated approvals, reduced denials, and enables providers to focus on patient care.",
      "Icon": {
        "id": 30,
        "documentId": "fgia38ytpwp9uz160ht75pjk",
        "name": "shield-tick (2).svg",
        "alternativeText": null,
        "caption": null,
        "width": 40,
        "height": 40,
        "formats": null,
        "hash": "shield_tick_2_8cce7cc422",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 0.87,
        "url": "/uploads/shield_tick_2_8cce7cc422.svg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2025-09-18T14:37:02.114Z",
        "updatedAt": "2025-09-18T14:37:06.228Z",
        "publishedAt": "2025-09-18T14:37:02.114Z"
      },
      "Link": {
        "id": 5,
        "Link_url": "/contact",
        "Link_title": "Learn More",
        "Link_target": "_self"
      }
    },
    {
      "id": 7,
      "Title": "Patient Assistance",
      "Text": "Cinnamon unifies charity care, nonprofit grants, and manufacturer Co-pay programs and PAPs in one workflow.",
      "Icon": {
        "id": 29,
        "documentId": "e17gnu2cmclakshbcrismikn",
        "name": "Layer_1.svg",
        "alternativeText": null,
        "caption": null,
        "width": 50,
        "height": 50,
        "formats": null,
        "hash": "Layer_1_94c41d3f88",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 4.79,
        "url": "/uploads/heart.svg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2025-09-18T14:37:02.113Z",
        "updatedAt": "2025-09-18T14:37:02.113Z",
        "publishedAt": "2025-09-18T14:37:02.113Z"
      },
      "Link": {
        "id": 5,
        "Link_url": "/contact",
        "Link_title": "Learn More",
        "Link_target": "_self"
      }
    },
    {
      "id": 5,
      "Title": "Adherence Campaigns",
      "Text": "Reauthorization notifications, Re-enrollment, and Medication Adherence Reminders",
      "Icon": {
        "id": 28,
        "documentId": "w07nwwu4eytxuobykxgp4uv0",
        "name": "task-square (2).svg",
        "alternativeText": null,
        "caption": null,
        "width": 40,
        "height": 40,
        "formats": null,
        "hash": "task_square_2_84adbd3bbb",
        "ext": ".svg",
        "mime": "image/svg+xml",
        "size": 1.54,
        "url": "/uploads/task_square_2_84adbd3bbb.svg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "createdAt": "2025-09-18T14:37:02.109Z",
        "updatedAt": "2025-09-18T14:37:02.109Z",
        "publishedAt": "2025-09-18T14:37:02.109Z"
      },
      "Link": null
    }
  ]
}

const logosData = {
  __component: "dynamic-zone.logos",
  id: 11,
  Title: "Trusted by",
  Images: [
    { id: 23, url: "/uploads/Mask_group_6385aff067.png", width: 180, height: 27, name: "Mask group.png" },
    { id: 17, url: "/uploads/Mask_group_5_a0cff2bb86.png", width: 180, height: 51, name: "Mask group-5.png" },
    { id: 15, url: "/uploads/Mask_group_4_5fca5d81fc.png", width: 180, height: 39, name: "Mask group-4.png" },
    { id: 14, url: "/uploads/Mask_group_3_24ae6c5233.png", width: 180, height: 51, name: "Mask group-3.png" },
    { id: 13, url: "/uploads/Mask_group_1_934ee02d69.png", width: 180, height: 45, name: "Mask group-1.png" },
    { id: 12, url: "/uploads/Mask_group_2_52c581c897.png", width: 180, height: 51, name: "Mask group-2.png" },
  ],
}

const graphicData = {
  "__component": "dynamic-zone.graphic",
  "id": 9,
  "Title": [
    {
      "type": "heading",
      "children": [
        {
          "type": "text",
          "text": "Patient medication "
        },
        {
          "type": "text",
          "text": "journey",
          "bold": true
        }
      ],
      "level": 2
    }
  ],
  "Subtitle": "Cinnamon automates prior authorization, unlocks patient assistance, and accelerates adherence.",
  "Image": {
    "id": 27,
    "documentId": "nxtov9pn2n2vrgj43xcpn010",
    "name": "dump-image.png",
    "alternativeText": null,
    "caption": null,
    "width": 1410,
    "height": 715,
    "formats": {
      "thumbnail": {
        "name": "thumbnail_dump-image.png",
        "hash": "thumbnail_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 245,
        "height": 124,
        "size": 17.53,
        "sizeInBytes": 17530,
        "url": "/uploads/thumbnail_dump_image_282cad1062.png"
      },
      "small": {
        "name": "small_dump-image.png",
        "hash": "small_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 500,
        "height": 254,
        "size": 48.6,
        "sizeInBytes": 48596,
        "url": "/uploads/small_dump_image_282cad1062.png"
      },
      "medium": {
        "name": "medium_dump-image.png",
        "hash": "medium_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 750,
        "height": 380,
        "size": 91.94,
        "sizeInBytes": 91939,
        "url": "/uploads/medium_dump_image_282cad1062.png"
      },
      "large": {
        "name": "large_dump-image.png",
        "hash": "large_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 1000,
        "height": 507,
        "size": 149.55,
        "sizeInBytes": 149553,
        "url": "/uploads/large_dump_image_282cad1062.png"
      }
    },
    "hash": "dump_image_282cad1062",
    "ext": ".png",
    "mime": "image/png",
    "size": 41.24,
    "url": "/uploads/dump_image_282cad1062.png",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "createdAt": "2025-09-18T10:00:02.228Z",
    "updatedAt": "2025-09-18T10:00:02.228Z",
    "publishedAt": "2025-09-18T10:00:02.228Z"
  },
  "mobImage": {
    "id": 27,
    "documentId": "nxtov9pn2n2vrgj43xcpn010",
    "name": "dump-image.png",
    "alternativeText": null,
    "caption": null,
    "width": 1410,
    "height": 715,
    "formats": {
      "thumbnail": {
        "name": "thumbnail_dump-image.png",
        "hash": "thumbnail_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 245,
        "height": 124,
        "size": 17.53,
        "sizeInBytes": 17530,
        "url": "/uploads/dump-mob.png"
      },
      "small": {
        "name": "small_dump-image.png",
        "hash": "small_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 500,
        "height": 254,
        "size": 48.6,
        "sizeInBytes": 48596,
        "url": "/uploads/dump-mob.png"
      },
      "medium": {
        "name": "medium_dump-image.png",
        "hash": "medium_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 750,
        "height": 380,
        "size": 91.94,
        "sizeInBytes": 91939,
        "url": "/uploads/dump-mob.png"
      },
      "large": {
        "name": "large_dump-image.png",
        "hash": "large_dump_image_282cad1062",
        "ext": ".png",
        "mime": "image/png",
        "path": null,
        "width": 1000,
        "height": 507,
        "size": 149.55,
        "sizeInBytes": 149553,
        "url": "/uploads/dump-mob.png"
      }
    },
    "hash": "dump_image_282cad1062",
    "ext": ".png",
    "mime": "image/png",
    "size": 41.24,
    "url": "/uploads/dump-mob.png",
    "previewUrl": null,
    "provider": "local",
    "provider_metadata": null,
    "createdAt": "2025-09-18T10:00:02.228Z",
    "updatedAt": "2025-09-18T10:00:02.228Z",
    "publishedAt": "2025-09-18T10:00:02.228Z"
  }
}

const featuresData = {
  __component: "dynamic-zone.features",
  id: 2,
  Title: [
    {
      type: "heading",
      level: 2,
      children: [
        { type: "text", text: "Why Teams Choose " },
        { type: "text", text: "Cinnamon", bold: true },
      ],
    },
  ],
  Subtitle: "One Partner, One Platform and a Zero-Cost Connection for Health Systems",
  Features_Items: [
    {
      id: 4,
      Image: { url: "/uploads/colorfilter_aacd3338df.svg" },
      Text: [
        {
          type: "paragraph",
          children: [
            { type: "text", text: "A " },
            { type: "text", text: "financial EHR overlay", },
            { type: "text", text: " that sits on top of " },
            { type: "text", text: "Epic", bold: true },
            { type: "text", text: ", " },
            { type: "text", text: "Oracle", bold: true },
            { type: "text", text: ", " },
            { type: "text", text: "Meditech", bold: true },
            { type: "text", text: ", " },
            { type: "text", text: "Flatiron", bold: true },
            { type: "text", text: " and more" },
          ],
        },
      ],
    },
    {
      id: 5,
      Image: { url: "/uploads/layer_99c212c313.svg" },
      Text: [
        {
          type: "paragraph",
          children: [
            { type: "text", text: "One screen ", bold: true },
            { type: "text", text: "- no hopping between tools" },
          ],
        },
      ],
    },
    {
      id: 6,
      Image: { url: "/uploads/flash_98ab049537.svg" },
      Text: [
        {
          type: "paragraph",
          children: [
            { type: "text", text: "Application submission automation", bold: true },
            { type: "text", text: " with the accuracy to " },
            { type: "text", text: "cut time-to-therapy" },
          ],
        },
      ],
    },
  ],
}

const costBurnoutData = {
  title: "Engineered Advantages",
  items: ['<strong>Real-time connection</strong> to the health-system EHR', '<strong>FHIR-based pipelines</strong> for EHR data requests', '<strong>Coverage Waterfall</strong> that benefits health systems and patients']
}

export default async function Home() {
  // const page = await getHomepage();
  // const page = homepageMock;
  // if (!page) return <main><h1>Empty</h1></main>;
  return (
    <main>
      {/* {page.dynamic_zone?.map((block, i) => (
        <Section key={block.id ?? i} block={block} />
      ))} */}
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
