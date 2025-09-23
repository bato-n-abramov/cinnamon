'use client';
import styles from './Circles.module.scss';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { mediaUrl } from '@/lib/strapi'; 

export default function Circles({ data }) {
  const { Title, Subtitle, Circle_items } = data || {};

  return (
    <section className={styles.circles}>
      <div className={styles.circlesWrapper}>
        {Array.isArray(Title) && Title.length > 0 && (
          <div className={styles.title}>
            <BlocksRenderer content={Title} />
          </div>
        )}
        {Subtitle && <div className={styles.subtitle}>{Subtitle}</div>}

        <div className={styles.items}>
          {Array.isArray(Circle_items) &&
            Circle_items.length > 0 &&
            Circle_items.map((item) => {
              const icon = item.icon;
              const src = icon?.url ? mediaUrl(icon.url) : null;

              return (
                <div key={item.id} className={styles.item}>
                 <div className={styles.titleWrapper}>
                     {src && (
                    <div className={styles.itemIcon}>
                      <img
                        src={src}
                        alt={icon?.alternativeText || item.Title || ''}
                        width={40}
                        height={40}
                      />
                    </div>
                  )}
                  <div className={styles.itemTitle}>{item.Title}</div>
                 </div>
                  <div className={styles.itemText}>{item.Text}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
