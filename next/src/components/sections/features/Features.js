'use client';
import { mediaUrl } from '@/lib/strapi';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import styles from './Features.module.scss';

export default function Features({ data }) {

    const { Title, Subtitle, Features_Items } = data;

    return (
        <section className={styles.featured}>
            <div className={`${styles.featuredWrapper} container`}>
                <div className={styles.featuredTitle}>{Array.isArray(Title) && Title.length > 0 && <BlocksRenderer content={Title} />}</div>
                <div className={styles.featuredSubtitle}>{Subtitle}</div>
                <div className={styles.featuredItems}>
                    {Array.isArray(Features_Items) &&
                        Features_Items.length > 0 &&
                        Features_Items.map((item) => {
                            const icon = item.Image;

                            const src = icon?.url ? mediaUrl(icon.url) : null;

                            return (
                                <div key={item.id} className={styles.item}>
                                    {src && (
                                        <div className={styles.itemIcon}>
                                            <Image
                                                src={src}
                                                alt={icon?.alternativeText || item.Title || ''}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    )}
                                    <div className={styles.itemText}>{Array.isArray(item.Text) && item.Text.length > 0 && <BlocksRenderer content={item.Text} />}</div>

                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
