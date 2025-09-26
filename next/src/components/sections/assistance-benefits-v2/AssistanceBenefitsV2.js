"use client";

import { motion } from "framer-motion";
import styles from "./AssistanceBenefitsV2.module.scss";

export default function AssistanceBenefitsV2({ data, ref }) {

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
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container} className={styles.assistanceBenefits} ref={ref}>
            <div className={`container ${styles.inner}`}>
                <motion.div variants={fadeUp} custom={0} className={styles.tag}>Rules vary. Funds move. Cinnamon keeps pace.</motion.div>
                <motion.h2 variants={fadeUp} custom={1} className={styles.title}><strong>Patient assistance</strong>, handled at the point of care</motion.h2>
                <motion.div variants={fadeUp} custom={2} className={styles.text}>Cinnamon unifies charity care, nonprofit grants, and manufacturer Co-pay programs and Patient Assistance Programs (PAPs) in one workflow. We screen from EHR signals, auto-populate forms, capture e-signatures, and track awards/expirations with renewal nudges.<br />
                    <strong>Fast, Compliant, Auditable</strong></motion.div>
                <motion.div variants={fadeUp} custom={3} className={styles.compare}>
                    <div className={styles.left}>
                        <div className={styles.compareTitle}>For Health Systems</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li>Reduce out-of-pocket burden and abandonment</li>
                                <li>Streamline applications with guided, auditable workflows</li>
                                <li>Enroll sooner with real-time program intelligence</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.compareTitle}>For Drug Manufacturers</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li>Shorten time-to-therapy and improve adherence</li>
                                <li>Expand equitable access through timely foundation matching</li>
                                <li>Gain actionable visibility into program impact—without PHI exposure</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
