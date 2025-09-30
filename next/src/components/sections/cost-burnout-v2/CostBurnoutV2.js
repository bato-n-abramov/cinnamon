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
                                    <svg
                                        width="28"
                                        height="28"
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <clipPath id="bgblur_0_1888_4384_clip_path" transform="translate(24 24)">
                                                <rect width="28" height="28" rx="14" />
                                            </clipPath>
                                        </defs>

                                        <g clipPath="url(#bgblur_0_1888_4384_clip_path)">
                                            <foreignObject x="-24" y="-24" width="76" height="76">
                                                <div
                                                    xmlns="http://www.w3.org/1999/xhtml"
                                                    style={{
                                                        backdropFilter: 'blur(12px)',
                                                        WebkitBackdropFilter: 'blur(12px)',
                                                        height: '100%',
                                                        width: '100%',
                                                    }}
                                                />
                                            </foreignObject>
                                        </g>

                                        <g data-figma-bg-blur-radius={24}>
                                            <rect width="28" height="28" rx="14" fill="#00696E" fillOpacity="0.4" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M22.6667 13.9993C22.6667 18.6018 18.9358 22.3327 14.3333 22.3327C9.73083 22.3327 6 18.6018 6 13.9993C6 9.39685 9.73083 5.66602 14.3333 5.66602C18.9358 5.66602 22.6667 9.39685 22.6667 13.9993ZM17.6917 11.4743C17.8087 11.5915 17.8744 11.7504 17.8744 11.916C17.8744 12.0816 17.8087 12.2405 17.6917 12.3577L13.525 16.5243C13.4078 16.6414 13.249 16.7071 13.0833 16.7071C12.9177 16.7071 12.7589 16.6414 12.6417 16.5243L10.975 14.8577C10.9136 14.8005 10.8643 14.7315 10.8302 14.6548C10.796 14.5781 10.7777 14.4954 10.7762 14.4115C10.7747 14.3275 10.7901 14.2442 10.8216 14.1664C10.853 14.0885 10.8998 14.0178 10.9591 13.9585C11.0185 13.8991 11.0892 13.8523 11.167 13.8209C11.2448 13.7895 11.3282 13.774 11.4121 13.7755C11.496 13.777 11.5788 13.7954 11.6554 13.8295C11.7321 13.8637 11.8011 13.9129 11.8583 13.9743L13.0833 15.1993L14.9458 13.3368L16.8083 11.4743C16.9255 11.3573 17.0844 11.2916 17.25 11.2916C17.4156 11.2916 17.5745 11.3573 17.6917 11.4743Z"
                                                fill="#FFFBF7"
                                            />
                                        </g>
                                    </svg>
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
