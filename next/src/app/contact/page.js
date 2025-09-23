'use client';
import ContactForm from "@/components/sections/contact-form/ContactForm";
import styles from './ContactPage.module.scss';

export default function ContactPage() {

    return (
        <main>
            <section className={styles.contact}>
                <div className={`${styles.inner} container`}>
                    <h1 className={styles.title}>Get In Touch</h1>
                    <div className={styles.text}><strong>Let’s connect</strong> and explore how we can help you improve efficiency, reduce costs, and deliver better outcomes for patients</div>
                    <div className={styles.formWrapper}>
                        <div className={styles.info}>
                            <h2 className={styles.infoTitle}>We’d love to hear from you,<strong> let’s connect!</strong></h2>
                            <div className={styles.address}>565 Bellevue Ave Oakland, CA 94610</div>
                            <a href="mailto:cinnamon.health@gmail.com" className={styles.email}>cinnamon.health@gmail.com</a>
                            <a href="tel:01234567890" className={styles.phone}>01234567890</a>
                        </div>
                        <ContactForm />
                    </div>
                </div>

            </section>
        </main>
    );
}

