'use client';
import styles from './ProcessCircles.module.scss';
import { mediaUrl } from '@/lib/strapi';

const Arrow = () => (
  <svg
    width="54"
    height="15"
    viewBox="0 0 54 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.arrow}
  >
    <g clipPath="url(#clip0_608_81)">
      <path
        d="M46.8618 6.69395H0V8.3061H46.8618C48.6379 8.3061 51.5752 8.31546 51.5752 8.31546V7.95564C48.1938 9.77807 46.7252 11.8108 45.5981 13.7384L46.9301 15C48.6038 11.9159 50.5848 9.67293 54.0003 7.95564V7.07946C50.5848 5.36217 48.6038 3.08412 46.9301 0L45.5981 1.29673C46.7252 3.18926 48.1938 5.22198 51.5752 7.04441V6.69436C51.5516 6.69436 48.6379 6.69395 46.8618 6.69395Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_608_81">
        <rect width="54.0003" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function ProcessCircles({ data }) {
  const { Title, Subtitle, Process_circles } = data || {};
  
  return (
    <section className={styles.processCircles}>
      <div className={`${styles.processCirclesWrapper} container`}>
        <h2 className={styles.processCirclesTitle}>{Title}</h2>
        {Subtitle && <div className={styles.processCirclesSubtitle}>{Subtitle}</div>}

        <div className={styles.processCirclesItems}>
          {Array.isArray(Process_circles) &&
            Process_circles.map((item, index) => {
              const icon = item.Icon;
              
              const src = icon?.url ? mediaUrl(icon.url) : null;
              const isLast = index === Process_circles.length - 1;

              return (
                <div key={item.id} className={styles.itemWrapper}>
                  <div className={styles.item}>
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
                    <div className={styles.itemText}>{item.Text}</div>
                  </div>

                  {!isLast && <Arrow />}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
