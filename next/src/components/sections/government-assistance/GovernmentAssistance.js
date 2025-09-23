'use client';
import Image from 'next/image';
import styles from './GovernmentAssistance.module.scss';

export default function GovernmentAssistance({ data }) {

    return (
        <section className={styles.governmentAssistance}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}><strong>How Cinnamon</strong> Connects Patients to Government Assistance</h2>
                    <div className={styles.text}>Cinnamon is designed to make sure patients don’t miss out on financial support they may qualify for. <br /><br />  Our system uses a waterfall coverage process to screen for available government programs:</div>
                </div>
            </div>
            <div className={styles.imageContent}>
                <Image width={1200} height={450} src="/government-assistance.png" alt="Government Assistance" />
                <div className='container'>
                    <div className={styles.list}>
                        <div className={styles.item}>
                            <h3 className={styles.itemTitle}>Medicare & Medicaid Check</h3>
                            <div className={styles.itemText}>We verify whether a patient is eligible for Medicare or Medicaid coverage.</div>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.itemTitle}>Medicare Low-Income Subsidy (LIS) Review</h3>
                            <div className={styles.itemText}>We check if the patient qualifies for extra help through Medicare’s Low-Income Subsidy program.</div>
                        </div>
                        <div className={styles.item}>
                            <h3 className={styles.itemTitle}>Application Support</h3>
                            <div className={styles.itemText}>If a patient is eligible, our platform helps complete and submit the necessary applications to ensure they can access benefits quickly.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className={styles.quote}>With meticulous upfront work, we ensure patients don’t leave support on the table, unlocking the full range of available government assistance so costs fall and access gets easier.</div>
            </div>
        </section>
    );
}
