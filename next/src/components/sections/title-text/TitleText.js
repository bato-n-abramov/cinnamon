'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from './TitleText.module.scss';

export default function TitleText({ data }) {
  const title = data?.Title ?? [];
  const text = data?.Text ?? [];
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.12,
      },
    },
  };

  const fromLeft = {
    hidden: { opacity: 0, x: reduce ? 0 : -28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fromRight = {
    hidden: { opacity: 0, x: reduce ? 0 : 28 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  if ((!Array.isArray(title) || title.length === 0) &&
    (!Array.isArray(text) || text.length === 0)) return null;

  return (
    <motion.section
      className={styles.titleText}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      <div className={`${styles.titleTextWrapper} container`}>
        <motion.div className={styles.left} variants={fromLeft}>
          {Array.isArray(title) && title.length > 0 && (
            <BlocksRenderer className={styles.title} content={title} />
          )}
        </motion.div>

        <motion.div className={styles.right} variants={fromRight}>
          {Array.isArray(text) && text.length > 0 && (
            <BlocksRenderer content={text} />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
