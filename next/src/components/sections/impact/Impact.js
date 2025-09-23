'use client';
import Image from 'next/image';
import styles from './Impact.module.scss';

export default function Impact({ data }) {
    return (
        <section className={styles.impact}>
            <div className={styles.image1}>
                <Image src={'/people1.png'} alt="Impact" width={56} height={56} />
            </div>
            <div className={styles.image2}>
                <Image src={'/people2.png'} alt="Impact" width={80} height={80} />
            </div>
            <div className={styles.image3}>
                <Image src={'/people3.png'} alt="Impact" width={50} height={50} />
            </div>
            <div className={styles.image4}>
                <Image src={'/people4.png'} alt="Impact" width={50} height={50} />
            </div>
            <div className={styles.image5}>
                <Image src={'/people5.png'} alt="Impact" width={56} height={56} />
            </div>
            <div className={styles.image6}>
                <Image src={'/people6.png'} alt="Impact" width={80} height={80} />
            </div>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>The Impact</h2>
                <div className={styles.text}>
                    With Cinnamon’s Prior Authorization AI, health systems and providers achieve faster approvals, higher accuracy, and smoother workflows.<br /><br />
                    <strong>Delivering better outcomes</strong> for patients while reducing the cost and complexity of care.
                </div>
            </div>
        </section>
    );
}
