"use client";

import Image from "next/image";
import styles from "./OurTeam.module.scss";

export default function OurTeam() {
    return (
        <section className={styles.ourTeam}>
            <div className={`${styles.inner} container`}>
                <h2 className={styles.title}>Our Team & <strong>Partners</strong></h2>
                <div className={styles.list}>
                    <a href="https://www.linkedin.com/in/egeslien/" target="_blank" className={styles.item}>
                        <div className={styles.image}>
                            <Image src={"/Eric.png"} width={500} height={500} alt={"Eric"} />
                        </div>
                        <div className={styles.name}>Eric Geslien</div>
                        <div className={styles.role}>CEO</div>
                    </a>
                    <a href="https://www.linkedin.com/in/bryanandrade/" target="_blank" className={styles.item}>
                        <div className={styles.image}>
                            <Image src={"/Bryan.png"} width={500} height={500} alt={"Bryan"} />
                        </div>
                        <div className={styles.name}>Bryan Andrade</div>
                        <div className={styles.role}>CTO</div>
                    </a>
                    <a href="https://www.linkedin.com/in/angelo-joseph-campano-294b5521/" target="_blank" className={styles.item}>
                        <div className={styles.image}>
                            <Image src={"/Angelo.png"} width={500} height={500} alt={"Angelo"} />
                        </div>
                        <div className={styles.name}>Angelo Campano</div>
                        <div className={styles.role}>Pharma Strategy Advisor</div>
                    </a>
                    <a href="https://www.florahealth.io/" target="_blank" className={`${styles.item} ${styles.itemFlora}`}>
                        <div className={styles.image}>
                            <Image src={"/Flora.png"} width={500} height={500} alt={"Flora"} />
                        </div>
                        <div className={styles.name}>Flora Health</div>
                        <div className={styles.role}>Distribution Partner</div>
                    </a>
                </div>
            </div>
        </section>
    );
}