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
            viewport={{ once: true, amount: 0.3 }}
            variants={container} className={styles.assistanceBenefits} ref={ref}>
            <div className={`container ${styles.inner}`}>
                <motion.div variants={fadeUp} custom={0} className={styles.tag}>Rules vary. Funds move. Cinnamon keeps pace.</motion.div>
                <motion.h2 variants={fadeUp} custom={1} className={styles.title}><strong>Patient assistance,</strong> handled at the point of care</motion.h2>
                <motion.div variants={fadeUp} custom={2} className={styles.text}>Cinnamon unifies charity care, nonprofit grants, and manufacturer Co-pay programs and Patient Assistance Programs (PAPs) in one workflow. We screen from EHR signals, auto-populate forms, capture e-signatures, and track awards/expirations with renewal nudges.<br />
                    <strong>Fast, Compliant, Auditable</strong></motion.div>
                <motion.div variants={fadeUp} custom={3} className={styles.compare}>
                    <div className={styles.item}>
                        <div className={styles.compareTitle}>For Health Systems</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li><strong>Reduce</strong> out-of-pocket burden and abandonment</li>
                                <li><strong>Streamline applications</strong> with guided, auditable workflows</li>
                                <li>Enroll sooner with <strong>real-time program intelligence</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.compareTitle}>For Drug Manufacturers</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li><strong>Shorten time-to-therapy</strong> and improve adherence</li>
                                <li>Expand equitable access through <strong>timely foundation matching</strong></li>
                                <li>Gain actionable visibility into program impact, <strong>without PHI exposure</strong></li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
