'use client';
import ContactForm from "@/components/sections/contact-form/ContactForm";
import { Location } from "@/components/global/icons/Location";
import { Phone } from "@/components/global/icons/Phone";
import { Message } from "@/components/global/icons/Message";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {

    return (
        <main className={styles.ContactMain}>
            <section className={styles.contact}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.formWrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.infoTitle}>let’s Get In Touch</h1>
                            <div className={styles.infoText}>Let’s connect and explore how we can help you improve efficiency, reduce costs, and deliver better outcomes for patients</div>
                            <div className={styles.address}><Location /> 565 Bellevue Ave Oakland, CA 94610</div>
                            <a href="mailto:cinnamon.health@gmail.com" className={styles.email}><Message /> cinnamon.health@gmail.com</a>
                            <a href="tel:01234567890" className={styles.phone}><Phone /> 01234567890</a>
                        </div>
                        <ContactForm />
                    </div>
                </div>

            </section>
        </main>
    );
}

