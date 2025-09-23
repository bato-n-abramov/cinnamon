'use client';
import Image from 'next/image';
import styles from './ImageText.module.scss';

export default function ImageText({ data }) {
    //   const { heading, text, CTA, items } = data || {};

    return (
        <section className={styles.imageText}>
            <div className={`${styles.inner} container`}>
                <div className={styles.image}>
                    <Image width={500} height={500} src="/image-text.png" alt="Image Text" />
                </div>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Charity Care Safety Net</h2>
                    <div className={styles.text}>
                        Charity care enables health systems to provide access for financially vulnerable patients while balancing mission-driven care with financial and regulatory requirements. <br /><br />
                        It often serves as a lifeline for those who might otherwise forgo necessary treatment – typically managed by revenue cycle financial navigators. <br /><br />
                        Cinnamon integrates charity care into our Coverage Waterfall to expedite care when other programs fall short.
                    </div>
                </div>
            </div>
        </section>
    );
}
