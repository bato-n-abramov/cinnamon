"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import desktopAnim from "@/lottie/desktop.json";
import mobileAnim from "@/lottie/mobile.json";
import styles from "./Graphic.module.scss";

export default function Graphic({ data }) {
  const { Title, Subtitle } = data;

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);


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
          <h2 dangerouslySetInnerHTML={{ __html: Title }} ></h2>
        </motion.div>

        <motion.div className={styles.graphicSubtitle} variants={slideUp}>
          {Subtitle}
        </motion.div>
      </div>

      <motion.div className={styles.graphicImage} variants={fadeIn} onViewportEnter={() => {
        desktopRef.current?.setSpeed(2);
        desktopRef.current?.goToAndPlay(0);
        mobileRef.current?.setSpeed(2);
        mobileRef.current?.goToAndPlay(0);
      }}>
        <Lottie
          lottieRef={desktopRef}
          animationData={desktopAnim}
          autoplay={false}
          loop={false}

          className={`${styles.lottie} ${styles.desktop}`}
        />

        <Lottie
          lottieRef={mobileRef}
          animationData={mobileAnim}
          autoplay={false}
          loop={false}
          className={`${styles.lottie} ${styles.mobile}`}
        />
      </motion.div>
    </motion.section>
  );
}
