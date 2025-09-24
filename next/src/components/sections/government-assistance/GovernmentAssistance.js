'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './GovernmentAssistance.module.scss';

export default function GovernmentAssistance({ data }) {
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

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: 'linear' },
        }),
    };



    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className={styles.governmentAssistance}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.textContent}>
                    <motion.h2 variants={fromLeft} className={styles.title}><strong>How Cinnamon</strong> Connects Patients to Government Assistance</motion.h2>
                    <motion.div variants={fromRight} className={styles.text}>Cinnamon is designed to make sure patients don’t miss out on financial support they may qualify for. <br /><br />  Our system uses a waterfall coverage process to screen for available government programs:</motion.div>
                </div>
            </div>
            <div className={styles.imageContent}>
                <Image width={1200} height={450} src="/government-assistance.png" alt="Government Assistance" />
                <div className='container'>
                    <div className={styles.list}>
                        <motion.div variants={fadeUp} custom={2} className={styles.item}>
                            <h3 className={styles.itemTitle}>Medicare & Medicaid Check</h3>
                            <div className={styles.itemText}>We verify whether a patient is eligible for Medicare or Medicaid coverage.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={3} className={styles.item}>
                            <h3 className={styles.itemTitle}>Medicare Low-Income Subsidy (LIS) Review</h3>
                            <div className={styles.itemText}>We check if the patient qualifies for extra help through Medicare’s Low-Income Subsidy program.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={4} className={styles.item}>
                            <h3 className={styles.itemTitle}>Application Support</h3>
                            <div className={styles.itemText}>If a patient is eligible, our platform helps complete and submit the necessary applications to ensure they can access benefits quickly.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <motion.div variants={fadeUp} custom={5} className={styles.quote}>With meticulous upfront work, we ensure patients don’t leave support on the table, unlocking the full range of available government assistance so costs fall and access gets easier.</motion.div>
            </div>
        </motion.section>
    );
}
