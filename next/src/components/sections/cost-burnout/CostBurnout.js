'use client';

import styles from './CostBurnout.module.scss';

export default function CostBurnout({ data }) {
    return (
        <section className={styles.CostBurnout}>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>Lower Cost & Less Burnout</h2>
                <div className={styles.text}>
                    <ul>
                        <li>Providers <strong>save thousands</strong> in administrative overhead</li>
                        <li>Automated workflows <strong>reduce staff burden and physician burnout</strong></li>
                        <li>Freed resources can be redirected to direct <strong>patient care</strong></li>

                    </ul>
                </div>
            </div>
        </section>
    );
}
