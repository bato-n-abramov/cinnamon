"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./CostBurnoutV2.module.scss";

export default function CostBurnoutV2({ data }) {

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
                <motion.div variants={fromLeft} className={styles.image}>
                    <Image src={data.image} width={200} height={200} alt="decor" />
                </motion.div>
                <motion.div variants={fromRight} className={styles.textContent}>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                    <div className={styles.text}>
                        <ul>
                            {data.items.map((item, i) => (
                                <li key={i}>
                                    <Image src={"/check2.svg"} width={28} height={28} alt="check" />
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
