"use client";

import { mediaUrl } from "@/lib/strapi";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Features.module.scss";

export default function Features({ data }) {
    const { Title, Subtitle, Features_Items = [] } = data || {};

    const slideUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const itemsContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const itemSlide = {
        hidden: { opacity: 0, y: 36 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
    };

    return (
        <motion.section
            className={styles.featured}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={`${styles.featuredWrapper} container`}>
                <motion.div className={styles.featuredTitle} variants={slideUp}>
                    <h2 dangerouslySetInnerHTML={{ __html: Title }} ></h2>
                </motion.div>

                <motion.div className={styles.featuredSubtitle} variants={slideUp}>
                    {Subtitle}
                </motion.div>

                <motion.div className={styles.featuredItems} variants={itemsContainer}>
                    {Array.isArray(Features_Items) && Features_Items.length > 0 &&
                        Features_Items.map((item) => {
                            const icon = item?.Image;
                            const src = icon?.url ? mediaUrl(icon.url) : null;

                            return (
                                <motion.div key={item.id} className={styles.item} variants={itemSlide}>
                                    {src && (
                                        <div className={styles.itemIcon}>
                                            <Image
                                                src={src}
                                                alt={icon?.alternativeText || item?.Title || ''}
                                                width={40}
                                                height={40}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    )}
                                    <div className={styles.itemText} dangerouslySetInnerHTML={{ __html: item.Text }}>
                                    </div>
                                </motion.div>
                            );
                        })}
                </motion.div>
            </div>
        </motion.section>
    );
}
