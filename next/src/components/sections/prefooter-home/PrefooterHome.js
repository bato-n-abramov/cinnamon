'use client';
import { motion } from 'framer-motion';
import styles from './PrefooterHome.module.scss';

export default function PrefooterHome({ data }) {
    const { Title } = data || {};

    const slideUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const slideRightToLeft = {
        hidden: { opacity: 0, x: 40 },
        show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <motion.section
            className={styles.prefooterHome}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className={`${styles.prefooterHomeWrapper} container`}>
                <motion.h2
                    className={styles.prefooterHomeTitle}
                    dangerouslySetInnerHTML={{ __html: Title }}
                    variants={slideUp}
                />

                <motion.div
                    className={styles.prefooterHomeText}
                    variants={container}
                >
                    <motion.p variants={slideRightToLeft}>
                        <strong>Real-time connection </strong>to the health-system EHR
                    </motion.p>
                    <motion.p variants={slideRightToLeft}>
                        <strong>FHIR-based pipelines</strong> for EHR data requests
                    </motion.p>
                    <motion.p variants={slideRightToLeft}>
                        <strong>Coverage Waterfall </strong>that benefits health systems and patients
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
}
