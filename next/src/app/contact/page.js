import { getBaseUrl } from "@/lib/baseUrl";
import { jsonLd } from "@/lib/jsonLd";
import ContactForm from "@/components/sections/contact-form/ContactForm";
import { Location } from "@/components/global/icons/Location";
import Image from "next/image";
import styles from "./ContactPage.module.scss";


export const dynamic = "force-static";

export function generateMetadata() {
    const base = getBaseUrl();
    const path = "/contact";
    const url = `${base}${path}`;

    const title = "Contact Us — Cinnamon Health";
    const description =
        "Connect with Cinnamon Health to explore how we can help improve efficiency, reduce costs, and deliver better outcomes for patients.";

    const ogImage = "/og/default.jpg";

    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            url,
            siteName: "Cinnamon Health",
            title,
            description,
            images: [{ url: ogImage, width: 1200, height: 630, alt: "Contact — Cinnamon Health" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
        robots: { index: true, follow: true },
    };
}


export default function ContactPage() {
    const base = getBaseUrl();
    const url = `${base}/contact`;

    const webPageLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us",
        url,
        description:
            "Connect with Cinnamon Health to explore how we can help improve efficiency, reduce costs, and deliver better outcomes for patients.",
        isPartOf: { "@type": "WebSite", url: base, name: "Cinnamon Health" },
    };

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
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(webPageLd)} />
        </main>
    );
}

