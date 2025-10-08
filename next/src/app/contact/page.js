
import ContactForm from "@/components/sections/contact-form/ContactForm";
import { Location } from "@/components/global/icons/Location";
import Image from "next/image";
import styles from "./ContactPage.module.scss";

export const metadata = {
    title: "Contact Us | Cinnamon Health",
};


export default function ContactPage() {
    return (
        <main className={styles.ContactMain}>
            <section className={styles.contact}>
                <div className={`${styles.inner} container`}>
                    <div className={styles.formWrapper}>
                        <div className={styles.info}>
                            <h1 className={styles.infoTitle}>let’s Get In Touch</h1>
                            <div className={styles.infoText}>Let’s connect and explore how we can help you improve efficiency, reduce costs, and deliver better outcomes for patients</div>
                            <div className={styles.image}><Image src={"/contact.png"} width={700} height={700} alt={"image"} /></div>
                            <div className={styles.addressTitle}>Mailing address</div>
                            <div className={styles.address}><Location />1101 Marina Village Parkway Alameda CA 94501</div>
                        </div>
                        <ContactForm />
                    </div>
                </div>

            </section>
        </main>
    );
}

