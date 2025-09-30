"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CharityCare.module.scss";

export default function CharityCare({ data }) {

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
            variants={container} className={styles.charityCare}>
            <div className={`container ${styles.inner}`}>
                <motion.div variants={fadeUp} className={styles.content}>
                    <div className={styles.icon}> <Image src={"/charityCareArrow.png"} width={200} height={200} alt={"arrow"} /></div>
                    <h2 className={styles.title}>Charity Care Safety Net</h2>
                    <div className={styles.tag}>Cinnamon integrates charity care into our Coverage Waterfall
                        to expedite care when other programs fall short.</div>
                    <div className={styles.text}>
                        Charity care enables health systems to provide access for financially vulnerable patients while balancing mission-driven care with financial and regulatory requirements.<br /><br />
                        It often serves as a lifeline for those who might otherwise forgo necessary treatment – typically managed by revenue cycle financial navigators.
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
