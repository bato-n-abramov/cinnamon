'use client';
import Image from 'next/image';
import { mediaUrl } from '@/lib/strapi';
import styles from './Logos.module.scss';

export default function Logos({ data, speed = 30 }) {

  const { Title, Images } = data || {};
  const hasImages = Array.isArray(Images) && Images.length > 0;
  if (!hasImages) return null;

  const styleVar = { ['--ticker-duration']: `${speed}s` };

  const RenderList = ({ duplicated = false }) => (
    <ul
      className={styles.logosTrack}
      aria-hidden={duplicated ? 'true' : undefined}
    >
      {Images.map((img) => {
        const url = mediaUrl(img.url);
        const width = img.width || 180;
        const height = img.height || 45;

        return (
          <li key={`${duplicated ? 'dup-' : ''}${img.id}`} className={styles.logosItem}>
            <Image
              src={url}
              alt={img.alternativeText || img.name || 'Logo'}
              width={width}
              height={height}
              className={styles.logoImg}
              loading="lazy"
              decoding="async"
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className={styles.logos}>
      <div className={`${styles.logosWrapper} container`}>
        {Title && <div className={styles.logosTitle}>{Title}</div>}
      </div>

      <div className={styles.ticker} style={styleVar}>
        <div className={styles.tickerInner}>
          <RenderList />
          <RenderList duplicated />
        </div>
      </div>
    </section>
  );
}
