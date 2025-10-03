"use client";

import Image from "next/image";
import { mediaUrl } from "@/lib/strapi";
import { motion } from "framer-motion";
import styles from "./Logos.module.scss";

export default function Logos({ data, speed = 30 }) {
  const { Title, Images } = data || {};
  const hasImages = Array.isArray(Images) && Images.length > 0;
  if (!hasImages) return null;

  const styleVar = { ['--ticker-duration']: `${speed}s` };

  const RenderList = ({ duplicated = false }) => (
    <motion.ul
      className={styles.logosTrack}
      aria-hidden={duplicated ? 'true' : undefined}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {Images.map((img, i) => {
        const url = mediaUrl(img.url);
        const width = img.width || 180;
        const height = img.height || 45;

        return (
          <motion.li
            key={`${duplicated ? 'dup-' : ''}${img.id}`}
            className={styles.logosItem}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Image
              src={url}
              alt={img.alternativeText || img.name || 'Logo'}
              width={width}
              height={height}
              className={styles.logoImg}
              unoptimized
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );

  return (
    <section className={styles.logos}>
      <div className={`${styles.logosWrapper} container`}>
        {Title && (
          <motion.div
            className={styles.logosTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {Title}
          </motion.div>
        )}
      </div>

      <div className={styles.ticker} style={styleVar}>
        <div className={styles.tickerInner}>
          <RenderList />
          <RenderList duplicated />
        </div>
      </div>
    </section>
  );
}
