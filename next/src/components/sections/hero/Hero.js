'use client';
import styles from './Hero.module.scss';

export default function Hero({ data }) {
  const { heading, text, CTA, items } = data || {};

  return (
    <section className={styles.hero}>
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />
      <div className={styles.darkGradient} aria-hidden />
      <div className={`container ${styles.heroInner}`}>
        {heading && <h1 className={styles.heroTitle} dangerouslySetInnerHTML={{ __html: heading }}></h1>}
        {/* {text && <div className={styles.heroText}>{text}</div>} */}

        {CTA?.text && (
          <a href={CTA.URL || '#'} target={CTA.target || '_self'} className={`${styles.heroCta} button-icon`}>
            <span className='button-icon-text'>{CTA.text}</span>
            <span className='button-icon-arrow'>
              <svg className='arrow-hidden' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
              </svg>
              <svg className='arrow-move' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#00696E" />
              </svg>
            </span>
          </a>
        )}

        {Array.isArray(items) && items.length > 0 && (
          <ul className={styles.items}>
            {items.map((it) => (
              <li key={it.id} className={styles.item}>
                <div className={styles.itemTitleWrapp}>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8615 7.19395H0V8.8061H10.8615C12.6375 8.8061 15.5749 8.81546 15.5749 8.81546V8.45564C12.1935 10.2781 10.7249 12.3108 9.59772 14.2384L10.9298 15.5C12.6034 12.4159 14.5845 10.1729 18 8.45564V7.57946C14.5845 5.86217 12.6034 3.58412 10.9298 0.5L9.59772 1.79673C10.7249 3.68926 12.1935 5.72198 15.5749 7.54441V7.19436C15.5513 7.19436 12.6375 7.19395 10.8615 7.19395Z" fill="#E69138" />
                  </svg>
                  <strong className={styles.itemTitle}>{it.items_title}</strong>
                </div>
                {it.items_text && <div className={styles.itemText}>{it.items_text}</div>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
