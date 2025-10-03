"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./HigherAccuracy.module.scss";

export default function HigherAccuracy() {

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
            transition: { duration: 0.6, delay: i * 0.2, ease: 'linear' },
        }),
    };
    return (
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            className={styles.higherAccuracy}
            viewport={{ once: true, amount: 0.5 }}>
            <div className={styles.imageContent}>
                <div className={`${styles.contentInner} container`}>
                    <motion.h2 variants={fadeUp} custom={1} className={styles.imageContentTitle}>Higher Accuracy</motion.h2>
                    <div className={styles.list}>
                        <motion.div variants={fadeUp} custom={3} className={styles.item}>
                            <div className={styles.icon}><Image src={"/target.svg"} alt="target" width={1200} height={500} /></div>
                            <div className={styles.itemText}><strong>Prior Authorization AI</strong> matches payer requirements with &gt;98% accuracy.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={4} className={styles.item}>
                            <div className={styles.icon}><Image src={"/list.svg"} alt="list" width={1200} height={500} /></div>
                            <div className={styles.itemText}>Dynamic, plan-specific questions ensure <strong>the right details</strong> every time.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={5} className={styles.item}>
                            <div className={styles.icon}><Image src={"/certificate.svg"} alt="certificate" width={1200} height={500} /></div>
                            <div className={styles.itemText}><strong>Automated validation</strong> prevents errors that lead to denials.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}