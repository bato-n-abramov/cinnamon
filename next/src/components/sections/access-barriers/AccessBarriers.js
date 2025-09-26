"use client";

import { motion } from "framer-motion";
import styles from "./AccessBarriers.module.scss";
import { FloatArrow } from "@/components/global/icons/FloatArrow";
export default function AccessBarriers({ data }) {

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
            variants={container} className={styles.accessBarriers}>

            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} className={styles.title}><strong>Where Access </strong>Breaks </motion.h2>
                <motion.div variants={fadeUp} className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.text}>It happens <strong>when teams juggle</strong> fragmented tools, complex insurance policies, and competing timelines.</div>
                    </div>
                    <div className={styles.icon}><FloatArrow /></div>
                    <div className={`${styles.item} ${styles.border}`}>
                        <div className={styles.text}><strong>Cinnamon</strong> takes an <strong>ecosystem approach aligning health systems, patients, and manufacturers</strong> to reduce auto-denials, lower out-of-pocket exposure, and strengthen adherence.</div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
