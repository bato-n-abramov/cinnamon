'use client';
import Image from 'next/image';
import styles from './CoverageWaterfall.module.scss';

export default function CoverageWaterfall({ data }) {

    return (
        <section className={styles.coverageWaterfall}>
            <div className={`${styles.inner} container`}>
                <div className={styles.tag}>The fastest path to “covered”</div>
                <h2 className={styles.title}>Coverage <strong>Waterfall</strong></h2>
                <div className={styles.text}>Cinnamon fuses EHR signals (demographics, insurance, meds, diagnoses) with FPL, benefits checks, and out-of-pocket estimates to decide in the right order <strong>how each patient can pay</strong> </div>
                <div className={styles.image}>
                    <Image width={100} height={100} src="/coverageWaterfall.svg" alt="Coverage Waterfall" />
                </div>
                <div className={styles.quote}>The result is an actionable worklist for your staff with eligibility, matching opportunities, and next steps you can assign and filter by drug, diagnosis, site, or program type. Instant, accurate, traceable.</div>
            </div>
        </section>
    );
}
