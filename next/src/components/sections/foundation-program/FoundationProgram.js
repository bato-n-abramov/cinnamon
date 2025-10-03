"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./FoundationProgram.module.scss";
import { Shield } from "@/components/global/icons/Shield";
import { Heart } from "@/components/global/icons/Heart";

export default function FoundationProgram() {

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
            className={styles.foundationProgram}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className={`${styles.inner} container`}>
                <motion.div variants={fadeUp} custom={0} className={styles.tag}>Financial assistance embedded in your workflow</motion.div>
                <motion.h2 variants={fadeUp} custom={1} className={styles.title}>Foundation Program <strong>Intelligence</strong></motion.h2>
                <motion.div variants={fadeUp} custom={2} className={styles.text}>
                    Cinnamon’s healthcare SaaS matches patients to nonprofit funds in real time. Automating follow-through so no one slips through the cracks.
                </motion.div>
                <div className={styles.list}>
                    <motion.div className={`${styles.item} ${styles.itemImage}`} variants={fadeUp} custom={1}>
                        <Image src={'/foundationProgram.png'} alt="foundationProgram" width={300} height={300} />
                    </motion.div>
                    <motion.div className={styles.item} variants={fadeUp} custom={3}>
                        <Shield />
                        <div className={styles.itemText}><strong>Nonprofit foundations deliver</strong> targeted aid for underinsured patients, but funds open and close fast and eligibility is rigid.</div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>
                        <Heart />
                        <div className={styles.itemText}>Cinnamon monitors program availability by disease, matches eligible patients from EHR signals, and alerts your team to enroll. <strong>Quickly and compliantly.</strong></div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
