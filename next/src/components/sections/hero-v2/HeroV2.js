'use client';
import { useCallback } from 'react';
import { motion } from 'framer-motion';


import styles from './HeroV2.module.scss';

export default function HeroV2({ data, scrollTargetRef }) {
    // const handleScroll = useCallback(() => {

    //     if (scrollTargetRef?.current) {
    //         scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }, [scrollTargetRef]);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: 'linear' },
        }),
    };

    return (
        <section className={styles.heroV2}>
            <div className={styles.blob1} aria-hidden />
            <div className={styles.blob2} aria-hidden />
            <div className={styles.darkGradient} aria-hidden />
            <div className={`container ${styles.heroV2Inner}`}>
                <motion.h1 className={styles.heroV2Title} dangerouslySetInnerHTML={{ __html: data.title }} variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0}></motion.h1>
                <motion.div className={styles.heroV2Text} dangerouslySetInnerHTML={{ __html: data.subtitle }} variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}></motion.div>
                {data.cta && (
                    <motion.a href={data.cta.url || '#'} target={data.cta.target || '_self'} className={`${styles.heroV2Cta} button-icon`} variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={3}>
                        <span className='button-icon-text'>{data.cta.text}</span>
                        <span className='button-icon-arrow'>
                            <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                            </svg>
                            <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                            </svg>
                        </span>
                    </motion.a>
                )}
                {/* <motion.div className={styles.heroV2Scroll} onClick={handleScroll} variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={4}>
                    <span>Scroll down to learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                        <path d="M5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L11.3033 7.75736C11.5962 7.46447 11.5962 6.98959 11.3033 6.6967C11.0104 6.40381 10.5355 6.40381 10.2426 6.6967L6 10.9393L1.75736 6.6967C1.46447 6.40381 0.989593 6.40381 0.696699 6.6967C0.403806 6.98959 0.403806 7.46447 0.696699 7.75736L5.46967 12.5303ZM6 0L5.25 0L5.25 12H6H6.75L6.75 0L6 0Z" fill="#00696E" />
                    </svg>
                </motion.div> */}
            </div>
        </section >
    );
}
