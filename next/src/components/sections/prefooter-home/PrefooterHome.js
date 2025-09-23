import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import styles from './PrefooterHome.module.scss';

export default function PrefooterHome({data}) {
    const { Title, Text} = data || {};
    return (
        <section className={styles.prefooterHome}>
            <div className={`${styles.prefooterHomeWrapper} container`}>
                <h2 className={styles.prefooterHomeTitle} dangerouslySetInnerHTML={{__html: Title}}></h2>
                <div className={styles.prefooterHomeText}>{Array.isArray(Text)  && Text.length  > 0 && <BlocksRenderer content={Text} />}</div>
            </div>
        </section>
    )
}