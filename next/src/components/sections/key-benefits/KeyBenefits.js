'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './KeyBenefits.module.scss';

export default function KeyBenefits({ data, ref }) {

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
        <motion.section className={styles.KeyBenefits} ref={ref}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
            <div className={`${styles.inner} container`}>
                <div className={styles.textContent}>
                    <motion.h2 variants={fromLeft} className={styles.title}>Key <strong>Benefits</strong></motion.h2>
                    <motion.div variants={fromRight} className={styles.text}>
                        <ul>
                            <li><strong>Faster</strong> Submissions</li>
                            <li>Automation cuts submission time by <strong>up to 90%</strong></li>
                            <li><strong>Seamless EHR integration</strong> allows requests within existing workflows</li>
                            <li>Pre-populated forms and real-time eligibility checks <strong>turn hours into minutes</strong></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
            <div className={styles.imageContent}>
                <Image src={'/keyBenefits.png'} alt="Key Benefits" width={1200} height={500} />
                <div className='container'>
                    <motion.div variants={fadeUp} custom={1} className={styles.imageContentTitle}>Higher Accuracy</motion.div>
                    <div className={styles.list}>
                        <motion.div variants={fadeUp} custom={3} className={styles.item}>
                            <div className={styles.itemText}><strong>Prior Authorization AI</strong> matches payer requirements with &gt;98% accuracy.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={4} className={styles.item}>
                            <div className={styles.itemText}>Dynamic, plan-specific questions ensure <strong>the right details</strong> every time.</div>
                        </motion.div>
                        <motion.div variants={fadeUp} custom={5} className={styles.item}>
                            <div className={styles.itemText}><strong>Automated validation</strong> prevents errors that lead to denials.</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
