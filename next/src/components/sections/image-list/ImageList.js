"use client";

import styles from "./ImageList.module.scss";

import Image from "next/image";

export default function ImageList({ data }) {

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
        visible: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: 'linear' },
        }),
    };

    return (
        <section className={styles.imageList}>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>Manufacturer Co-Pay <strong>Automation</strong></h2>
                <div className={styles.text}>Co-pay programs can slash out-of-pocket costs, but they’re easy to miss.</div>
                <div className={styles.content}>
                    <div className={styles.image}>
                        <Image src={"/imageList.png"} width={445} height={642} alt={"image"} />
                    </div>
                    <div className={styles.textContent}>
                        <p className={styles.subtitle}>Cinnamon does the heavy lifting:</p>
                        <div className={styles.list}>
                            <ol className={styles.numberList}>
                                <li>Real-time eligibility</li>
                                <li>The right offer for the therapy</li>
                                <li>One-click delivery:</li>
                            </ol>
                            <ul className={styles.bulletList}>
                                <li><Image src={"/check_yellow.svg"} width={24} height={24} alt={"check"} /> E-voucher</li>
                                <li><Image src={"/check_yellow.svg"} width={24} height={24} alt={"check"} /> Digital card</li>
                                <li><Image src={"/check_yellow.svg"} width={24} height={24} alt={"check"} /> Specialty workflow</li>
                            </ul>
                        </div>
                        <div className={styles.quote}>
                            <p>So patients use it now and teams stay compliant.</p>
                            <div>Commercial insurance only; federal program exclusions apply.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
