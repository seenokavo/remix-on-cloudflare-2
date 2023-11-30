import styles from './Title.module.css';
import {LinksFunction} from '@remix-run/cloudflare';

export function Title() {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h1>Stale crypto prices and charts for you, for free!</h1>
                <p>The cryptocurrency market cap is <strong>over $9000 T</strong>. In the last 24 hours, the total
                    crypto market cap exploded with a 300% gain.</p>
            </div>
            <div className={styles.empty}></div>
        </div>
    );
}