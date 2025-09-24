'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './ImageText.module.scss';

export default function ImageText({ data }) {
    //   const { heading, text, CTA, items } = data || {};

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
        <motion.section
            className={styles.imageText}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
        >
            <div className={`${styles.inner} container`}>
                <motion.div variants={fromLeft} className={styles.image}>
                    <Image width={500} height={500} src="/image-text.png" alt="Image Text" />
                </motion.div>
                <motion.div variants={fromRight} className={styles.textContent}>
                    <h2 className={styles.title}>Charity Care Safety Net</h2>
                    <div className={styles.text}>
                        Charity care enables health systems to provide access for financially vulnerable patients while balancing mission-driven care with financial and regulatory requirements. <br /><br />
                        It often serves as a lifeline for those who might otherwise forgo necessary treatment – typically managed by revenue cycle financial navigators. <br /><br />
                        Cinnamon integrates charity care into our Coverage Waterfall to expedite care when other programs fall short.
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
