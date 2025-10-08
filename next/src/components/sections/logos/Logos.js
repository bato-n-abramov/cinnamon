"use client";

import Image from "next/image";
import { mediaUrl } from "@/lib/strapi";
import { motion } from "framer-motion";
import styles from "./Logos.module.scss";

export default function Logos({ data }) {
  const { Title, Images } = data || {};
  if (!Array.isArray(Images) || Images.length === 0) return null;

  const doubled = [...Images, ...Images];

  return (
    <section className={styles.logos}>
      <div className={`${styles.logosWrapper} container`}>
        {Title && <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} viewport={{ once: true }} className={styles.logosTitle}>{Title}</motion.div>}
      </div>

      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          <motion.ul className={styles.track} aria-hidden={false} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'easeOut' }} viewport={{ once: true }}>
            {doubled.map((img, i) => {
              const url = mediaUrl(img.url);
              const width = img.width || 180;
              const height = img.height || 45;
              return (
                <li key={`${img.id}-${i}`} className={styles.item}>
                  <Image
                    src={url}
                    alt={img.alternativeText || img.name || "Logo"}
                    width={width}
                    height={height}
                    className={styles.logoImg}
                    unoptimized
                  />
                </li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
