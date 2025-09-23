'use client';
import styles from './PatientAssistance.module.scss';

export default function PatientAssistance({ data }) {

    return (
        <section className={styles.patientAssistance}>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>Patient Assistance Programs <strong>(PAPs)</strong></h2>
                <div className={styles.text}>
                    Manufacturer PAPs are vital lifelines for uninsured and underinsured patients. However, this process is often slowed by complex eligibility rules, manual enrollment, and fragmented communication.<br /><br />
                    Cinnamon streamlines PAP access by automatically verifying FPL requirements, checking eligibility, surfacing real-time program availability, collecting required patient signatures, and guiding enrollment.<br /><br />
                    It also tracks when medications need to be ordered and maintains detailed logs of when they are received. Ensuring nothing falls through the cracks.
                </div>
            </div>
        </section>
    );
}
