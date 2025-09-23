'use client';
import { mediaUrl } from '@/lib/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from './Graphic.module.scss';

export default function Graphic({ data }) {

  const { Title, Subtitle, Image, mobImage } = data;

  return (
    <section className={styles.graphic}>
      <div className={`${styles.graphicWrapper} container`}>
        <div className={styles.graphicTitle}>{Array.isArray(Title) && Title.length > 0 && <BlocksRenderer content={Title} />}</div>
        <div className={styles.graphicSubtitle}>{Subtitle}</div>
      </div>
      <div className={styles.graphicImage}>
        {Image?.url && (
          <img
            src={mediaUrl(Image.url)}
            alt={Image.alternativeText || 'Image'}
            width={Image.width || 120}
            height={Image.height || 40}
            className={styles.desktop}
          />
        )}

        {mobImage?.url && (
          <img
            src={mediaUrl(mobImage.url)}
            alt={mobImage.alternativeText || 'Image'}
            width={mobImage.width || 120}
            height={mobImage.height || 40}
            className={styles.mob}
          />
        )}
      </div>
    </section>
  );
}
