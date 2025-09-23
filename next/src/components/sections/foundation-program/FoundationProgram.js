'use client';
import styles from './FoundationProgram.module.scss';

export default function FoundationProgram({ data }) {

    return (
        <section className={styles.foundationProgram}>
            <div className={`${styles.inner} container`}>
                <div className={styles.tag}>Financial assistance embedded in your workflow</div>
                <h2 className={styles.title}>Foundation Program <strong>Intelligence</strong></h2>
                <div className={styles.text}>
                    Cinnamon’s healthcare SaaS matches patients to nonprofit funds in real time. Automating follow-through so no one slips through the cracks. <br /><br />
                    Nonprofit foundations deliver targeted aid for underinsured patients, but funds open and close fast and eligibility is rigid.<br /><br />
                    Cinnamon monitors program availability by disease, matches eligible patients from EHR signals, and alerts your team to enroll. <strong>Quickly and compliantly</strong>.
                </div>
            </div>
        </section>
    );
}
