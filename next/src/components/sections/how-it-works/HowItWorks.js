"use client";
import Link from "next/link";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { mediaUrl } from "@/lib/strapi";
import { LineOne, LineTwo, LineThree } from "@/components/svg/Lines";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.scss";

export default function HowItWorks({ data }) {
    const { Title, Subtitle, main_content, items_list = [] } = data || {};


    const circleBig = {
        hidden: { scale: 0, opacity: 0 },
        show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
    };


    const iconSmall = {
        hidden: { scale: 0, opacity: 0 },
        show: (i = 0) => ({ scale: 1, opacity: 1, transition: { duration: 0.45, delay: 0.5, ease: "easeOut" } })
    };

    const textRight = {
        hidden: { x: 40, opacity: 0 },
        show: (i = 0) => ({ x: 0, opacity: 1, transition: { duration: 0.5, delay: 1, ease: "easeOut" } })
    };

    const slideUp = (delay = 0) => ({
        hidden: { y: 30, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay }
        }
    });

    return (
        <motion.section
            className={styles.howItWorks}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={`${styles.howItWorksWrapper} container`}>
                {Array.isArray(Title) && Title.length > 0 && (
                    <motion.div
                        className={styles.howItWorksTitle}
                        variants={slideUp(0)}
                    >
                        <BlocksRenderer content={Title} />
                    </motion.div>
                )}
                {Subtitle && (
                    <motion.div
                        className={styles.howItWorksSubtitle}
                        variants={slideUp(0.5)}
                    >
                        {Subtitle}
                    </motion.div>
                )}

                <div className={styles.graphicWrapper}>
                    {main_content && (
                        <motion.div
                            className={styles.mainBlock}
                            variants={circleBig}
                        >
                            {main_content.Title && <div className={styles.mainBlockTitle}>{main_content.Title}</div>}
                            {main_content.Text && <div className={styles.mainBlockText}>{main_content.Text}</div>}
                        </motion.div>
                    )}


                    {items_list.length > 0 && (
                        <div className={styles.list}>
                            {items_list.map((item, i) => {
                                const iconUrl = item?.Icon?.url ? mediaUrl(item.Icon.url) : null;
                                const alt = item?.Icon?.alternativeText || "Icon";
                                const firstLink = Array.isArray(item?.Link) ? item.Link[0] : item?.Link;
                                const linkUrl = firstLink?.Link_url || "#";
                                const linkText = firstLink?.Link_title || "";
                                const linkTarget = firstLink?.Link_target || "_self";

                                return (
                                    <div className={styles.item} key={item.id ?? i}>
                                        {i === 0 && <LineOne className={styles.lineFirst} id="first" />}
                                        {i === 1 && <LineTwo className={styles.lineSecond} id="second" />}
                                        {i === 2 && <LineThree className={styles.lineThird} id="third" />}
                                        {i === 0 && <LineThree className={styles.lineFirstMobile} id="fourth" />}
                                        {i === 2 && <LineOne className={styles.lineThirdMobile} id="fifth" />}
                                        <motion.div className={styles.itemIcon} variants={iconSmall} custom={i}>
                                            {iconUrl && <div ><Image width={50} height={50} src={iconUrl} alt={alt} /></div>}
                                        </motion.div>

                                        <motion.div className={styles.itemContent} variants={textRight} custom={i}>
                                            {item?.Title && <div className={styles.itemTitle}>{item.Title}</div>}
                                            {item?.Text && <div className={styles.itemText}>{item.Text}</div>}
                                            {linkText && linkUrl && (
                                                <div className={styles.itemLink}>
                                                    <Link href={linkUrl} target={linkTarget}>{linkText}</Link>
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
                                                        <path d="M9.65464 6.30179H0V7.69837H9.65464C11.2334 7.69837 13.8444 7.70648 13.8444 7.70648V7.39477C10.8387 8.97351 9.5332 10.7344 8.53131 12.4043L9.71537 13.4972C11.203 10.8255 12.964 8.88243 16 7.39477V6.63575C12.964 5.14809 11.203 3.17466 9.71537 0.50293L8.53131 1.62627C9.5332 3.26574 10.8387 5.02665 13.8444 6.60539V6.30214C13.8234 6.30214 11.2334 6.30179 9.65464 6.30179Z" fill="#00696E" />
                                                    </svg>
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {items_list.length > 0 && (
                        <div className={styles.listMob}>
                            {items_list.map((item, i) => {
                                const iconUrl = item?.Icon?.url ? mediaUrl(item.Icon.url) : null;
                                const alt = item?.Icon?.alternativeText || 'Icon';
                                const firstLink = Array.isArray(item?.Link) ? item.Link[0] : item?.Link;
                                const linkUrl = firstLink?.Link_url || '#';
                                const linkText = firstLink?.Link_title || '';
                                const linkTarget = firstLink?.Link_target || '_self';

                                return (
                                    <div className={styles.itemMob} key={item.id ?? i}>
                                        <motion.div className={styles.itemContentMob} variants={textRight} custom={i}>
                                            <div className={styles.itemTitleWrap}>
                                                {iconUrl && <Image width={40} height={40} src={iconUrl} alt={alt} />}
                                                {item?.Title && <div className={styles.itemTitle}>{item.Title}</div>}
                                            </div>
                                            {item?.Text && <div className={styles.itemText}>{item.Text}</div>}
                                            {linkText && linkUrl && (
                                                <div className={styles.itemLink}>
                                                    <Link href={linkUrl} target={linkTarget}>{linkText}</Link>
                                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
                                                        <path d="M9.65464 6.30179H0V7.69837H9.65464C11.2334 7.69837 13.8444 7.70648 13.8444 7.70648V7.39477C10.8387 8.97351 9.5332 10.7344 8.53131 12.4043L9.71537 13.4972C11.203 10.8255 12.964 8.88243 16 7.39477V6.63575C12.964 5.14809 11.203 3.17466 9.71537 0.50293L8.53131 1.62627C9.5332 3.26574 10.8387 5.02665 13.8444 6.60539V6.30214C13.8234 6.30214 11.2334 6.30179 9.65464 6.30179Z" fill="#00696E" />
                                                    </svg>
                                                </div>
                                            )}
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
