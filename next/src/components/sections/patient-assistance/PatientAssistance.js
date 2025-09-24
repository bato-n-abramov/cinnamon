'use client';
import { motion } from 'framer-motion';
import styles from './PatientAssistance.module.scss';

export default function PatientAssistance({ data }) {

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
        <motion.section
            className={styles.patientAssistance}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} custom={0} className={styles.title}>Patient Assistance Programs <strong>(PAPs)</strong></motion.h2>
                <motion.div variants={fadeUp} custom={1} className={styles.text}>
                    Manufacturer PAPs are vital lifelines for uninsured and underinsured patients. However, this process is often slowed by complex eligibility rules, manual enrollment, and fragmented communication.<br /><br />
                    Cinnamon streamlines PAP access by automatically verifying FPL requirements, checking eligibility, surfacing real-time program availability, collecting required patient signatures, and guiding enrollment.<br /><br />
                    It also tracks when medications need to be ordered and maintains detailed logs of when they are received. Ensuring nothing falls through the cracks.
                </motion.div>
            </div>
        </motion.section>
    );
}
