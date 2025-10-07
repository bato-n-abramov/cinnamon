"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./AssistanceBenefitsV2.module.scss";

export default function AssistanceBenefitsV2() {

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
            viewport={{ once: true, amount: 0.2 }}
            variants={container} className={styles.assistanceBenefits} >
            <div className={`container ${styles.inner}`}>
                <motion.h2 variants={fadeUp} custom={1} className={styles.title}>Patient Assistance Programs <strong>(PAPs)</strong></motion.h2>
                <div className={styles.list}>
                    <motion.div className={styles.itemWrapper} variants={fadeUp} custom={3} >
                        <div className={styles.itemIcon}><Image src={"/icon1.svg"} width={50} height={50} alt="Icon" /></div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                Manufacturer PAPs <strong>are vital lifelines</strong> for uninsured and underinsured patients. However, this process is often slowed by complex eligibility rules, manual enrollment, and fragmented communication.
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.itemWrapper} variants={fadeUp} custom={4}>
                        <div className={styles.itemIcon}><Image src={"/icon2.svg"} width={50} height={50} alt="Icon" /></div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <strong>Cinnamon streamlines PAP access</strong> by automatically verifying FPL requirements, checking eligibility, surfacing real-time program availability, collecting required patient signatures, and guiding enrollment.
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className={styles.itemWrapper} variants={fadeUp} custom={5}>
                        <div className={styles.itemIcon}><Image src={"/icon3.svg"} width={50} height={50} alt="Icon" /></div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                It also tracks when medications need to be ordered and maintains detailed logs of when they are received. <strong>Ensuring nothing falls through the cracks.</strong>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
