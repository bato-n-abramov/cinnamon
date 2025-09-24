'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProductOverview.module.scss';

export default function ProductOverview({ data }) {
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
        <motion.section className={styles.ProductOverview}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.5 }}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} className={styles.title}>
                    <strong>Premier Access</strong> is the transformative solution for pharmaceutical brands seeking to streamline the journey from high-cost drug prescriptions to patient success.
                </motion.h2>
                <div className={styles.list}>
                    <motion.div variants={fadeUp} custom={1} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src="/productOverviewIcon1.svg" width={100} height={100} alt="icon" />
                        </div>
                        <div className={styles.itemText}>Designed for market access, patient services, and brand strategy teams, our platform revolutionizes three critical areas: <strong>prior authorization, access processes, and adherence support.</strong></div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} className={styles.itemImage}>
                        <Image src={'/productOverview.png'} width={500} height={500} alt="icon" />
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src="/productOverviewIcon2.svg" width={100} height={100} alt="icon" />
                        </div>
                        <div className={styles.itemText}>By leveraging the Cinnamon network, <strong>Premier Access accelerates approvals, enhances access, and drives patient adherence.</strong><br />
                            Ensuring your therapies reach those who need them most, faster and more effectively.</div>
                    </motion.div>
                </div>
                <motion.div variants={fadeUp} custom={4} className={styles.text}><strong>Contact us</strong> today to learn more through our secure information request form below.</motion.div>
                <motion.a variants={fadeUp} custom={5} href='/contact' className={`${styles.cta} button-icon`}>
                    <span className='button-icon-text'>Talk to our team</span>
                    <span className='button-icon-arrow'>
                        <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                        </svg>
                        <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                        </svg>
                    </span>
                </motion.a>
            </div>
        </motion.section >
    );
}
