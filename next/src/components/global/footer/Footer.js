"use client";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { mediaUrl } from "@/lib/strapi";
import Image from "next/image";

export default function Footer({ data }) {
  const logo = data.Logo || data.logo;
  const text = data.Text || data.text;
  const images = Array.isArray(data.Images) ? data.Images : [];
  const subtitle = data.Subtitle || '';
  const menu_1 = data.Menu_1 || [];
  const menu_2 = data.Menu_2 || [];
  const footerBtn = data.footer_button || [];


  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerWrapper} container`}>

        <div className={styles.footerTop}>
          <div className={styles.footerCol}>
            {logo?.url && (
              <Link href="/" className={styles.footerLogo}>
                <Image
                  src={mediaUrl(logo.url)}
                  alt={logo.alternativeText || "Logo"}
                  width={logo.width || 120}
                  height={logo.height || 40}
                />
              </Link>
            )}
            {subtitle && <div className={styles.footerSubtitle}>{subtitle}</div>}
            {footerBtn?.text && <Link className={`${styles.footerCta} button-primary`} href={footerBtn.URL} target={footerBtn.target}>
              {footerBtn.text}
            </Link>}
          </div>

          <div className={styles.footerCol}>
            <div className={styles.footerMenus}>
              {menu_1.length > 0 && (
                <ul className={styles.footerMenu}>
                  <li className={styles.footerMenuTitle}>Company</li>
                  {menu_1.map((item) => (
                    <li key={item.id} className={styles.footerLink}>
                      <Link href={item.link} target={item.target}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {menu_2.length > 0 && (
                <ul className={styles.footerMenu}>
                  <li className={styles.footerMenuTitle}>Legal</li>
                  {menu_2.map((item) => (
                    <li key={item.id} className={styles.footerLink}>
                      <Link href={item.link} target={item.target}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {images.length > 0 && (
              <div className={styles.footerLogos}>
                {images.map((img) => (
                  <img
                    key={img.id}
                    src={mediaUrl(img.url)}
                    alt={img.alternativeText || "logo"}

                  />
                ))}
              </div>
            )}
            {text && <div className={styles.footerText}>{text}</div>}
          </div>
        </div>
      </div>
      <div className={styles.footerImage}>
        <Image
          src="/footer_logo.svg"
          alt="footer Logo"
          width={100}
          height={100}
        />
      </div>
    </footer>
  );
}
