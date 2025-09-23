'use client';
import Image from 'next/image';
import styles from './ImageTextV2.module.scss';

export default function ImageTextV2({ data }) {
    return (
        <section className={styles.imageTextV2}>
            <div className={`${styles.inner} container`}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>More <strong>Approvals</strong></h2>
                    <div className={styles.text}>
                        <ul>
                            <li>Complete, accurate submissions drive significantly <strong>higher approval rates</strong></li>
                            <li><strong>Predictive analytics</strong> keep pace with constantly changing payer rules</li>
                            <li>Smart resubmission workflows <strong>accelerate appeals and reduce delays</strong></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src={'/image-textv2.png'} alt="Image Text" width={500} height={500} />
                </div>
            </div>
        </section>
    );
}
