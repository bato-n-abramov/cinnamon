"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./CostBurnout.module.scss";

export default function CostBurnout({ data }) {

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
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fromRight = {
        hidden: { opacity: 0, x: reduce ? 0 : 28 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.section className={styles.CostBurnout} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fromLeft} className={styles.title}>{data.title}</motion.h2>
                <motion.div variants={fromRight} className={styles.text}>
                    <ul>
                        {data.items.map((item, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    );
}
