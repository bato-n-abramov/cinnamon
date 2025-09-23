// components/svg/RevealMask.js
import { motion } from 'framer-motion';

export default function RevealMask({ id='reveal', duration=0.9, delay=0 }) {
  return (
    <mask id={id} maskUnits="userSpaceOnUse">
      <motion.rect
        x="0" y="0" height="100%"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration, ease: 'easeInOut', delay }}
        fill="white"
      />
    </mask>
  );
}
