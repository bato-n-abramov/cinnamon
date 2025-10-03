"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./SpeedToTherapy.module.scss";

export default function SpeedToTherapy() {

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
        <motion.section className={styles.SpeedToTherapy}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}><strong>Faster Speed </strong>To Therapy</motion.h2>
                <div className={styles.list}>
                    <motion.div variants={fadeUp} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/time.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}>Electronic approvals that once took weeks now happen <strong>in minutes.</strong></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }} className={styles.decor}><Image src={'/arrow.svg'} width={10} height={10} alt='decor' /></motion.div>
                    <motion.div variants={fadeUp} custom={1} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/calendar.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}>Expedited pathways ensure urgent cases <strong>meet required timelines.</strong></div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }} className={styles.decor}><Image src={'/arrow.svg'} width={10} height={10} alt='decor' /></motion.div>
                    <motion.div variants={fadeUp} custom={4} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/pill.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}><strong>Patients start treatment sooner</strong>, lowering abandonment rates and improving adherence.</div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
