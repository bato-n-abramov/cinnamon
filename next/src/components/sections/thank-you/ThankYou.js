'use client';
import Link from 'next/link';
import styles from './ThankYou.module.scss';

export default function ThankYou() {
    return (
        <div className={styles.thanks}>
            <h2 className={styles.thanksTitle}>Thank You!</h2>
            <p className={styles.thanksText}>
                Your message has been successfully sent. <br />
                Our team will get back to you shortly.
            </p>

            <Link href="/" className="button-icon">
                <span className="button-icon-text">Go to Homepage</span>
                <span className="button-icon-arrow" aria-hidden>
                    <svg className="arrow-hidden" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                    </svg>
                    <svg className="arrow-move" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                    </svg>
                </span>
            </Link>
        </div>
    );
}
