'use client';
import { mediaUrl } from '@/lib/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { motion } from 'framer-motion';
import styles from './Graphic.module.scss';

export default function Graphic({ data }) {
  const { Title, Subtitle, Image, mobImage } = data;

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  };

  return (
    <motion.section
      className={styles.graphic}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${styles.graphicWrapper} container`}>
        <motion.div className={styles.graphicTitle} variants={slideUp}>
          {Array.isArray(Title) && Title.length > 0 && <BlocksRenderer content={Title} />}
        </motion.div>

        <motion.div className={styles.graphicSubtitle} variants={slideUp}>
          {Subtitle}
        </motion.div>
      </div>

      <motion.div className={styles.graphicImage} variants={fadeIn}>
        {Image?.url && (
          <img
            src={mediaUrl(Image.url)}
            alt={Image.alternativeText || 'Image'}
            width={Image.width || 120}
            height={Image.height || 40}
            className={styles.desktop}
          />
        )}

        {mobImage?.url && (
          <img
            src={mediaUrl(mobImage.url)}
            alt={mobImage.alternativeText || 'Image'}
            width={mobImage.width || 120}
            height={mobImage.height || 40}
            className={styles.mob}
          />
        )}
      </motion.div>
    </motion.section>
  );
}
