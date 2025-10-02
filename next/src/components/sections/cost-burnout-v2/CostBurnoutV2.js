"use client";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import styles from "./CostBurnoutV2.module.scss";

export default function CostBurnoutV2({ data }) {

    const reduce = useReducedMotion();

    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.12,
            },
        },
    };

    const fromLeft = {
        hidden: { opacity: 0, x: reduce ? 0 : -28 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const fromRight = {
        hidden: { opacity: 0, x: reduce ? 0 : 28 },
        show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.section className={styles.CostBurnout} initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={container}>
            <div className={`${styles.inner} container`}>
                <motion.div variants={fromLeft} className={styles.image}>
                    <Image src={data.image} width={200} height={200} alt="decor" />
                </motion.div>
                <motion.div variants={fromRight} className={styles.textContent}>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: data.title }}></h2>
                    <div className={styles.text}>
                        <ul>
                            {data.items.map((item, i) => (
                                <li key={i}>
                                    <span className={styles.icon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M18.6667 9.99935C18.6667 14.6018 14.9358 18.3327 10.3333 18.3327C5.73083 18.3327 2 14.6018 2 9.99935C2 5.39685 5.73083 1.66602 10.3333 1.66602C14.9358 1.66602 18.6667 5.39685 18.6667 9.99935ZM13.6917 7.47435C13.8087 7.59154 13.8744 7.75039 13.8744 7.91602C13.8744 8.08164 13.8087 8.24049 13.6917 8.35768L9.525 12.5243C9.40781 12.6414 9.24896 12.7071 9.08333 12.7071C8.91771 12.7071 8.75885 12.6414 8.64167 12.5243L6.975 10.8577C6.91359 10.8005 6.86434 10.7315 6.83018 10.6548C6.79602 10.5781 6.77765 10.4954 6.77617 10.4115C6.77469 10.3275 6.79013 10.2442 6.82156 10.1664C6.853 10.0885 6.89979 10.0178 6.95913 9.95848C7.01848 9.89913 7.08918 9.85235 7.167 9.82091C7.24483 9.78948 7.32818 9.77404 7.4121 9.77552C7.49602 9.777 7.57878 9.79537 7.65545 9.82953C7.73211 9.86369 7.80111 9.91294 7.85833 9.97435L9.08333 11.1993L10.9458 9.33685L12.8083 7.47435C12.9255 7.35731 13.0844 7.29157 13.25 7.29157C13.4156 7.29157 13.5745 7.35731 13.6917 7.47435Z" fill="#FFFBF7" />
                                        </svg>
                                    </span>
                                    <span dangerouslySetInnerHTML={{ __html: item }}></span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}
