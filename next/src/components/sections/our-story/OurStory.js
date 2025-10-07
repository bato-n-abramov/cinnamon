"use client";

import Image from "next/image";
import styles from "./OurStory.module.scss";
import { StoryLine } from "@/components/svg/StoryLine";
import { Point } from "@/components/global/icons/Point";
import { FadeIn } from "@/components/animations/ScrollAnimations";

export default function OurStory({ data }) {
    return (
        <section className={styles.ourStory}>
            <div className={`${styles.inner} container`}>
                <FadeIn>
                    <h2 className={styles.title}><strong>Our Story:</strong> From Vision to Innovation</h2>
                </FadeIn>

                <FadeIn>
                    <div className={`${styles.item} ${styles.itemFirst}`}>
                        <svg width="32" height="105" viewBox="0 0 32 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 1V73" stroke="#2AB9B2" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8" />
                            <circle cx="16" cy="89" r="12" fill="#E69138" stroke="#EBF6F6" strokeWidth="8" />
                        </svg>

                        <div className={styles.tag}>
                            How Our Mission Begins
                        </div>
                        <div className={styles.text}>
                            <strong>In March 2023</strong>, Eric Geslien and Bryan Andrade founded Cinnamon with <strong>a bold mission: to transform the healthcare industry’s transactional mindset into a collaborative ecosystem</strong> where every stakeholder: patients, providers, and pharmaceutical brands thrive. <br /><br />
                            They saw a broken system, one that taxed health systems and leaned on commissions from patient program enrollments, and envisioned a better way.<br /><br />
                            Cinnamon was born to bridge gaps, align incentives, and <strong>deliver value without compromise.</strong>
                        </div>
                    </div>
                </FadeIn>

                <div className={styles.list}>
                    <div className={styles.lineWrapper}>
                        <StoryLine />
                    </div>
                    <FadeIn>
                        <div className={`${styles.item} ${styles.itemImage}`}>
                            <div className={styles.textContent}>
                                <div className={`${styles.tag} ${styles.tagRight}`}>
                                    How a Partnership of Trust Was Built
                                    <div className={styles.point}>
                                        <Point />
                                    </div>
                                </div>
                                <div className={styles.imageMob}>
                                    <Image src="/ourStory1.png" width={700} height={700} alt="Cinnamon" />
                                </div>
                                <div className={styles.text}>
                                    The journey began with their first customer, <strong>UC Health - Cincinnati.</strong><br /> The buyer&apos;s demand was clear: a risk-free solution that worked. This partnership became the crucible for Cinnamon&apos;s product development.<br /><br />
                                    Working closely with UC Health, Eric and Bryan gathered critical marketing requirements, refining their platform into what would become the industry&apos;s gold standard. <br /><br />
                                    <strong>A solution that prioritized patient access</strong>, streamlined prior authorization, and boosted adherence, all while eliminating financial friction for health systems.
                                </div>
                            </div>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}>
                                    <Image src="/ourStory1.png" width={400} height={400} alt="Cinnamon" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className={`${styles.item} ${styles.itemImage} ${styles.reverse}`}>
                            <div className={styles.textContent}>
                                <div className={`${styles.tag} ${styles.tagLeft}`}>
                                    Where Wisdom Meets Innovation
                                    <div className={styles.point}>
                                        <Point />
                                    </div>
                                </div>
                                <div className={styles.imageMob}><Image src="/ourStory2.png" width={400} height={400} alt="Cinnamon" /></div>

                                <div className={styles.text}>
                                    <strong>In that pivotal first year</strong>, a chance meeting with Angelo Campano, a 20-year veteran in EHR-marketing, changed the game. <br /><br />
                                    Angelo&apos;s expertise in what pharmaceutical brands needed: seamless prior authorization, robust patient access, and sustained adherence guided Cinnamon&apos;s strategic evolution.  <br /><br />
                                    Recognizing his value, Eric and Bryan brought Angelo on as a strategic advisor, forging a powerful distribution partnership with his company, Flora. <strong>This collaboration unlocked new doors</strong>, aligning Cinnamon&apos;s offerings with the precise needs of pharmaceutical giants.
                                </div>
                            </div>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}><Image src="/ourStory2.png" width={400} height={400} alt="Cinnamon" /></div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn>
                        <div className={`${styles.item} ${styles.itemImage}`}>
                            <div className={styles.textContent}>
                                <div className={`${styles.tag} ${styles.tagRight}`}>
                                    How We Grew Together
                                    <div className={styles.point}>
                                        <Point />
                                    </div>
                                </div>
                                <div className={styles.imageMob}>
                                    <Image src="/ourStory3.png" width={400} height={400} alt="Cinnamon" />
                                </div>
                                <div className={styles.text}>
                                    Today, Cinnamon stands tall. Its no-cost model and unmatched value proposition have fueled rapid expansion, earning partnerships with <strong>the largest health systems across the United States.</strong><br /><br />
                                    Simultaneously, Cinnamon&apos;s Premier Access program has attracted over 54 pharmaceutical brands, with more joining as the platform&apos;s reputation grows.  <br /><br />
                                    By focusing on shared success, Cinnamon has turned a fragmented industry <strong>into a unified ecosystem.</strong>
                                </div>
                            </div>
                            <div className={styles.imageWrapper}>
                                <div className={styles.image}>
                                    <Image src="/ourStory3.png" width={400} height={400} alt="Cinnamon" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <FadeIn>
                    <div className={`${styles.item} ${styles.itemLast}`}>
                        <div className={styles.tag}>
                            A Future for Patients
                        </div>
                        <div className={styles.text}>
                            Looking ahead, Cinnamon&apos;s vision is audacious yet clear: to become the largest post-prescription patient network, <strong>driving the future of precision medicine.</strong>  <br /><br />
                            What began as a spark in March 2023 has ignited a movement, redefining healthcare delivery and putting patients at the heart of a thriving, interconnected ecosystem. <br /><br />
                            Cinnamon isn&apos;t just a company. <strong>It&apos;s a revolution in care.</strong>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}