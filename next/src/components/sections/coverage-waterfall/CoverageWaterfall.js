"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./CoverageWaterfall.module.scss";

export default function CoverageWaterfall({ data }) {

    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.12,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: "linear" },
        }),
    };

    return (
        <motion.section className={styles.coverageWaterfall}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}>
            <div className={`${styles.inner} container`}>
                <motion.div variants={fadeUp} custom={0} className={styles.tag}>The fastest path to “covered”</motion.div>
                <motion.h2 variants={fadeUp} custom={1} className={styles.title}>Coverage <strong>Waterfall</strong></motion.h2>
                <motion.div variants={fadeUp} custom={2} className={styles.text}>Cinnamon fuses EHR signals (demographics, insurance, meds, diagnoses) with FPL, benefits checks, and out-of-pocket estimates to decide in the right order <strong>how each patient can pay</strong> </motion.div>
                <motion.div variants={fadeUp} custom={3} className={styles.image}>
                    <Image width={100} height={100} src="/coverageWaterfall.svg" alt="Coverage Waterfall" />
                </motion.div>
                <motion.div variants={fadeUp} custom={4} className={styles.quote}>The result is an actionable worklist for your staff with eligibility, matching opportunities, and next steps you can assign and filter by drug, diagnosis, site, or program type. Instant, accurate, traceable.</motion.div>
            </div>
        </motion.section>
    );
}
