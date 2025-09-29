"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import { mediaUrl } from "@/lib/strapi";

export default function Header({ data }) {
  const logo = data.logo;
  const menu = Array.isArray(data.menu) ? data.menu : [];
  const btn = data.header_button;


  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const THRESHOLD = 8;
    const SHOW_AFTER = 64;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = Math.max(0, window.scrollY || 0);
        const diff = y - (lastY.current || 0);

        setAtTop(y < 4);

        if (!isOpen) {
          if (Math.abs(diff) > THRESHOLD) {
            if (diff > 0 && y > SHOW_AFTER) setHidden(true);
            else setHidden(false);
          }
        } else {
          setHidden(false);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const renderNavLink = (item) => {
    const href = item.link || "#";
    const label = item.title || href;
    const isActive = pathname === href;
    return (
      <Link
        key={item.id || href}
        href={href}
        className={`${styles.navLink} ${isActive ? styles.active : ''}`}
        onClick={() => setIsOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={[
      styles.header,
      hidden ? styles.headerHidden : "",
      !atTop ? styles.headerScrolled : "",
    ].join(" ")}>
      <div className={`${styles.headerInner}`}>
        <Link className={styles.headerLogo} href="/" onClick={() => setIsOpen(false)}>
          {logo?.url && (
            <Image
              src={mediaUrl(logo.url)}
              alt={logo.alternativeText || "Logo"}
              width={logo.width || 120}
              height={logo.height || 40}
              priority
              unoptimized
            />
          )}
        </Link>

        <nav className={styles.headerNav}>
          {/* {menu.map((item) => {
            const href = item.link || '#';
            const label = item.title || href;

            return (
              <Link key={item.id || href} href={href} className={styles.navLink}>
                {label}
              </Link>
            )
          })} */}
          {menu.map(renderNavLink)}
        </nav>

        {btn?.text && (() => {
          const href = btn.URL || btn.url || "#";
          const target = btn.target;
          return (
            <Link className={`${styles.headerCta} button-primary`} href={href} target={target}>
              {btn.text}
            </Link>
          )
        })()}
        <div className={`${styles.headerMenuToggler} ${isOpen ? styles.togglerOpen : ''}`} onClick={toggleMenu}>
          <div className={styles.menuToggler}>
            <div className={styles.menuTogglerLines}>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={`${styles.mobileMenuInner}  ${isOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileMenuWrapper}>
            <div className={styles.mobileMenuWrapperInner}>
              <div className={styles.mobileMenuContent}>
                <nav className={styles.mobileMenuNav}>
                  {/* {menu.map((item) => {
                    const href = item.link || '#';
                    const label = item.title || href;

                    return (
                      <Link key={item.id || href} href={href} className={styles.navLink}>
                        {label}
                      </Link>
                    )
                  })} */}
                  {menu.map(renderNavLink)}
                </nav>
                {btn?.text && (() => {
                  const href = btn.URL || btn.url || "#";
                  const target = btn.target;
                  return (
                    <Link className={`${styles.headerCtaMob} button-primary`} href={href} target={target} onClick={() => setIsOpen(false)}>
                      {btn.text}
                    </Link>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
