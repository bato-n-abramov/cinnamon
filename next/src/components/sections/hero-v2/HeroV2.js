'use client';
import { useCallback } from 'react';

import styles from './HeroV2.module.scss';

export default function HeroV2({ data, scrollTargetRef }) {
    const handleScroll = useCallback(() => {
        console.log(scrollTargetRef);

        if (scrollTargetRef?.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [scrollTargetRef]);

    return (
        <section className={styles.heroV2}>
            <div className={styles.blob1} aria-hidden />
            <div className={styles.blob2} aria-hidden />
            <div className={styles.darkGradient} aria-hidden />
            <div className={`container ${styles.heroV2Inner}`}>
                <h1 className={styles.heroV2Title} dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                <div className={styles.heroV2Text} dangerouslySetInnerHTML={{ __html: data.subtitle }} ></div>
                <div className={styles.heroV2Cta} onClick={handleScroll}><span>Let&apos;s Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                        <path d="M5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L11.3033 7.75736C11.5962 7.46447 11.5962 6.98959 11.3033 6.6967C11.0104 6.40381 10.5355 6.40381 10.2426 6.6967L6 10.9393L1.75736 6.6967C1.46447 6.40381 0.989593 6.40381 0.696699 6.6967C0.403806 6.98959 0.403806 7.46447 0.696699 7.75736L5.46967 12.5303ZM6 0L5.25 0L5.25 12H6H6.75L6.75 0L6 0Z" fill="#00696E" />
                    </svg></div>
            </div>
        </section >
    );
}
