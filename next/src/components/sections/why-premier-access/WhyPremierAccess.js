'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from './WhyPremierAccess.module.scss';

export default function WhyPremierAccess({ data }) {

    const container = {
        hidden: {},
        show: {
            transition: {
                delayChildren: 0.05,
                staggerChildren: 0.12,
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: (i = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, ease: 'linear' },
        }),
    };

    return (
        <motion.section className={styles.WhyPremierAccess}
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.2 }}>
            <div className={`${styles.inner} container`}>
                <motion.h2 variants={fadeUp} className={styles.title}>
                    <strong>Empowering Pharmaceutical Brands </strong><br />
                    to Optimize Patient Access and Outcomes
                </motion.h2>
                <div className={styles.list}>
                    <motion.div variants={fadeUp} custom={1} className={`${styles.item} ${styles.item1}`}>
                        <div className={styles.itemIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <path d="M33.3659 34.2166C39.2397 34.2166 44.0013 29.4549 44.0013 23.5812C44.0013 17.7074 39.2397 12.9458 33.3659 12.9458C27.4922 12.9458 22.7305 17.7074 22.7305 23.5812C22.7305 29.4549 27.4922 34.2166 33.3659 34.2166Z" fill="#E69138" />
                                <path d="M43.4673 59.4716H14.6914V54.1716C14.6914 43.8208 23.0147 35.4263 33.3656 35.4263C36.5668 35.4263 39.5547 36.2088 42.1513 37.6316V55.5588C42.1513 56.946 42.6492 58.2622 43.4673 59.4716Z" fill="#E69138" />
                                <path d="M55.3008 67.624L54.6895 68.9941L55.3008 69.2666L55.9131 68.9932L55.3008 67.624ZM55.3008 67.624C55.913 68.9934 55.9137 68.9933 55.9141 68.9932L55.915 68.9922C55.9157 68.9919 55.917 68.9916 55.918 68.9912C55.9202 68.9902 55.9232 68.9889 55.9268 68.9873C55.9343 68.9839 55.9448 68.9796 55.958 68.9736C55.9843 68.9616 56.0216 68.9441 56.0693 68.9219C56.1652 68.8773 56.3031 68.8119 56.4766 68.7275C56.8234 68.5588 57.3148 68.3119 57.9023 67.9951C59.074 67.3633 60.6457 66.4436 62.2266 65.2998C63.7992 64.162 65.4327 62.7652 66.6855 61.166C67.9332 59.5734 68.8945 57.6621 68.8945 55.5303V35.4961L67.0508 35.9297L55.3008 38.6943L43.5508 35.9297L41.707 35.4961V55.5303C41.707 57.2817 42.3354 58.8792 43.2695 60.2656V60.2666C45.0167 62.927 47.9379 65.1124 50.2871 66.5908C51.483 67.3434 52.5757 67.9403 53.3701 68.3496C53.7679 68.5546 54.0928 68.7137 54.3203 68.8223C54.4338 68.8764 54.5235 68.9175 54.5859 68.9463C54.6172 68.9607 54.6419 68.9726 54.6592 68.9805C54.6677 68.9843 54.6747 68.987 54.6797 68.9893L54.6875 68.9932H54.6885L55.3008 67.624Z" fill="#E69138" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                        <div className={styles.itemText}>
                            Designed for market access, patient services, and brand strategy teams, our platform revolutionizes three critical areas: <strong>prior authorization, access processes, and adherence support.</strong>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={2} className={`${styles.item} ${styles.item2}`}>
                        <div className={styles.itemIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M13.6016 36.4368C13.6016 23.8244 23.8259 13.6001 36.4382 13.6001C46.3345 13.6001 54.7605 19.8949 57.9306 28.699C53.9206 28.0536 49.6681 29.2766 46.5767 32.3682L32.3696 46.5752C29.2781 49.6667 28.0551 53.9191 28.7005 57.9292C19.8964 54.759 13.6016 46.333 13.6016 36.4368ZM35.6234 38.0769C36.0721 38.6901 36.8644 38.9453 37.5867 38.7092C38.309 38.4732 38.7976 37.7994 38.7976 37.0395V22.3834C38.7976 21.4132 38.0111 20.6268 37.0409 20.6268C36.0707 20.6268 35.2843 21.4133 35.2843 22.3834V31.6645L31.2684 26.177C30.6953 25.394 29.5962 25.2238 28.8133 25.7968C28.0304 26.3698 27.8602 27.4689 28.4331 28.2518L35.6234 38.0769Z" fill="#E69138" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M63.2367 34.2311C59.1506 30.145 52.5257 30.145 48.4396 34.2311L34.2325 48.4381C30.1464 52.5242 30.1464 59.1491 34.2325 63.2352C38.3186 67.3213 44.9436 67.3213 49.0297 63.2352L63.2367 49.0282C67.3228 44.9421 67.3228 38.3172 63.2367 34.2311ZM42.5782 45.061L52.4068 54.8896L46.5454 60.751C43.8312 63.465 39.4309 63.465 36.7168 60.751C34.0028 58.0369 34.0028 53.6365 36.7168 50.9224L42.5782 45.061Z" fill="#E69138" />
                            </svg>
                        </div>
                        <div className={styles.itemText}>
                            By leveraging the Cinnamon network, <strong>Premier Access accelerates approvals, enhances access, and drives patient adherence.</strong>< br />
                            Ensuring your therapies reach those who need them most, faster and more effectively.
                        </div>
                    </motion.div>
                    <motion.div variants={fadeUp} custom={3} className={`${styles.itemImage} ${styles.item} ${styles.item3}`}>
                        <Image src={"/WhyPremierAccess.png"} width={200} height={200} alt="WhyPremierAccess" />
                    </motion.div>
                    <motion.div variants={fadeUp} custom={4} className={`${styles.item} ${styles.item4}`}>
                        <div className={styles.itemIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 21.8966C14 18.0877 17.0877 15 20.8966 15H58.8276C62.6365 15 65.7241 18.0877 65.7241 21.8966V51.2069C65.7241 55.0158 62.6365 58.1034 58.8276 58.1034H45.6396L40.5536 64.3631C40.2109 64.7848 39.6895 65.0203 39.1466 64.9986C38.6035 64.9769 38.1026 64.7004 37.7947 64.2527L33.5672 58.1034H20.8966C17.0877 58.1034 14 55.0158 14 51.2069V21.8966ZM39.8903 28.2991C42.6447 25.5095 47.1197 25.5095 49.8742 28.2991C52.6166 31.0766 52.6166 35.5709 49.8742 38.3484L41.089 47.2459C40.765 47.574 40.3231 47.7586 39.8621 47.7586C39.401 47.7586 38.9591 47.574 38.6352 47.2459L29.8499 38.3484C27.1075 35.5709 27.1075 31.0766 29.8499 28.2991C32.6044 25.5095 37.0794 25.5095 39.8339 28.2991L39.8621 28.3277L39.8903 28.2991Z" fill="#E69138" />
                            </svg>
                        </div>
                        <div className={styles.itemText}>
                            <strong>Discover how Premier Access can elevate</strong> your brand’s impact while reducing operational complexities. <br />
                            <strong>Contact us today</strong> to learn more through our secure information request form below.
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={5}>
                    <a
                        href="#"
                        className={`${styles.link} button-icon`}
                    >
                        <span className='button-icon-text'>Talk to our team</span>
                        <span className='button-icon-arrow'>
                            <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                            </svg>
                            <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
                            </svg>
                        </span>
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
}
