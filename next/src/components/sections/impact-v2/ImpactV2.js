'use client';
import styles from './ImpactV2.module.scss';

export default function ImpactV2({ data }) {
    return (
        <section className={styles.impact}>
            <div className={`${styles.inner} container`}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>The Impact</h2>
                    <div className={styles.text}>
                        With Cinnamon’s Prior Authorization AI, health systems and providers achieve faster approvals, higher accuracy, and smoother workflows.<br /><br />
                        <strong>Delivering better outcomes</strong> for patients while reducing the cost and complexity of care.
                    </div>
                </div>
            </div>
        </section>
    );
}
