'use client';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import styles from './TitleText.module.scss';

export default function TitleText({ data }) {
  const title = data?.Title ?? [];
  const text  = data?.Text  ?? [];

  return (
    <section className={styles.titleText}>
        <div className={`${styles.titleTextWrapper} container`}>
            <div className={styles.left}>{Array.isArray(title) && title.length > 0 && <BlocksRenderer className={styles.title} content={title} />}</div>
            <div className={styles.right}>{Array.isArray(text)  && text.length  > 0 && <BlocksRenderer content={text} />}</div>
        </div>
    </section>
  );
}