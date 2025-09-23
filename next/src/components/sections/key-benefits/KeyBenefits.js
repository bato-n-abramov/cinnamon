'use client';
import Image from 'next/image';
import styles from './KeyBenefits.module.scss';

export default function KeyBenefits({ data, ref }) {
    return (
        <section className={styles.KeyBenefits} ref={ref}>
            <div className={`${styles.inner} container`}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>Key <strong>Benefits</strong></h2>
                    <div className={styles.text}>
                        <ul>
                            <li><strong>Faster</strong> Submissions</li>
                            <li>Automation cuts submission time by <strong>up to 90%</strong></li>
                            <li><strong>Seamless EHR integration</strong> allows requests within existing workflows</li>
                            <li>Pre-populated forms and real-time eligibility checks <strong>turn hours into minutes</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.imageContent}>
                <Image src={'/keyBenefits.png'} alt="Key Benefits" width={1200} height={500} />
                <div className='container'>
                    <div className={styles.imageContentTitle}>Higher Accuracy</div>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <div className={styles.itemText}><strong>Prior Authorization AI</strong> matches payer requirements with &gt;98% accuracy.</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>Dynamic, plan-specific questions ensure <strong>the right details</strong> every time.</div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemText}><strong>Automated validation</strong> prevents errors that lead to denials.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
