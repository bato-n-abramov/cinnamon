"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./TitleText.module.scss";

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
          <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} ></h2>
        </motion.div>

        <motion.div className={styles.right} variants={fromRight}>
          <div dangerouslySetInnerHTML={{ __html: text }} ></div>
        </motion.div>
        <motion.div variants={fromLeft} className={styles.imageWrapper}>
          <div className={styles.image}><Image src={"/titleText.png"} width={700} height={700} alt={"image"} /></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
