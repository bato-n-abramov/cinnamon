"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./ImageTextV2.module.scss";

export default function ImageTextV2() {

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
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const fromRight = {
        hidden: { opacity: 0, x: reduce ? 0 : 28 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.section className={styles.imageTextV2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
            <div className={`${styles.inner} container`}>
                <motion.div variants={fromLeft} className={styles.textContent}>
                    <h2 className={styles.title}>More <strong>Approvals</strong></h2>
                    <div className={styles.text}>
                        <ul>
                            <li>Complete, accurate submissions drive significantly <strong>higher approval rates</strong>
                                <div className={styles.itemDecor}><Image src={"/Floating-icons.png"} width={50} height={50} alt="Decor" /></div>
                            </li>
                            <li><strong>Predictive analytics</strong> keep pace with constantly changing payer rules</li>
                            <li>Smart resubmission workflows <strong>accelerate appeals and reduce delays</strong></li>
                        </ul>
                    </div>
                </motion.div>
                <motion.div variants={fromRight} className={styles.image}>
                    <Image src={'/image-textv2.png'} alt="Image Text" width={500} height={500} />
                </motion.div>
            </div>
        </motion.section>
    );
}
