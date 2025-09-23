import dynamic from 'next/dynamic';

const registry = {
   'dynamic-zone.hero': dynamic(() => import('./hero/Hero')),
   'dynamic-zone.title-text': dynamic(() => import('./title-text/TitleText')),
  //  'dynamic-zone.circles': dynamic(() => import('./circles/Circles')),
  //  'dynamic-zone.process-circles': dynamic(() => import('./process-circles/ProcessCircles')),
   'dynamic-zone.how-it-works': dynamic(() => import('./how-it-works/HowItWorks')),
   'dynamic-zone.logos': dynamic(() => import('./logos/Logos')),
   'dynamic-zone.features': dynamic(() => import('./features/Features')),
   'dynamic-zone.graphic': dynamic(() => import('./graphic/Graphic')),
   'dynamic-zone.prefooter-home': dynamic(() => import('./prefooter-home/PrefooterHome')),
};

export function Section({ block }) {
  const Cmp = registry[block.__component];
  if (!Cmp) {
    return <div style={{color:'red', padding:'8px 0'}}>Unknown component: <b>{block.__component}</b></div>;
  }
  return <Cmp data={block} />;
}
