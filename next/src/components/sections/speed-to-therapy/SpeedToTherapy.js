'use client';
import Image from 'next/image';
import styles from './SpeedToTherapy.module.scss';

export default function SpeedToTherapy({ data }) {
    return (
        <section className={styles.SpeedToTherapy}>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>Faster Speed <strong>to Therapy</strong></h2>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/item1.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}>Electronic approvals that once took weeks now happen <strong>in minutes.</strong></div>
                    </div>
                    <div className={styles.decor}><Image src={'/decor.svg'} width={10} height={10} alt='decor' /></div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/item2.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}>Expedited pathways ensure urgent cases <strong>meet required timelines.</strong></div>
                    </div>
                    <div className={styles.decor}><Image src={'/decor2.svg'} width={10} height={10} alt='decor' /></div>
                    <div className={styles.item}>
                        <div className={styles.itemIcon}>
                            <Image src={'/item3.svg'} alt="Speed To Therapy" width={160} height={160} />
                        </div>
                        <div className={styles.itemText}><strong>Patients start treatment sooner</strong>, lowering abandonment rates and improving adherence.</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
