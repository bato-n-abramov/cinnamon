'use client';

import styles from './AssistanceBenefits.module.scss';

export default function AssistanceBenefits({ data, ref }) {

    return (
        <section className={styles.assistanceBenefits} ref={ref}>

            <div className={`container ${styles.inner}`}>
                <div className={styles.tag}>Rules vary. Funds move. Cinnamon keeps pace.</div>
                <h2 className={styles.title}><strong>Patient assistance</strong>, handled at the point of care</h2>
                <div className={styles.text}>Cinnamon unifies charity care, nonprofit grants, and manufacturer Co-pay programs and Patient Assistance Programs (PAPs) in one workflow. We screen from EHR signals, auto-populate forms, capture e-signatures, and track awards/expirations with renewal nudges.<br />
                    <strong>Fast, Compliant, Auditable</strong></div>
                <div className={styles.compare}>
                    <div className={styles.left}>
                        <div className={styles.compareTitle}>For Health Systems</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li>Reduce out-of-pocket burden and abandonment</li>
                                <li>Streamline applications with guided, auditable workflows</li>
                                <li>Enroll sooner with real-time program intelligence</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.compareTitle}>For Drug Manufacturers</div>
                        <div className={styles.compareText}>
                            <ul>
                                <li>Shorten time-to-therapy and improve adherence</li>
                                <li>Expand equitable access through timely foundation matching</li>
                                <li>Gain actionable visibility into program impact—without PHI exposure</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
