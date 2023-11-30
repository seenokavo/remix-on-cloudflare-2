import styles from './ColumnPriceChange.module.css';
import clsx from 'clsx';

interface Props {
    priceChange: number;
}

export function ColumnPriceChange({priceChange}: Props) {

    return (
        <div className={styles.container}>
            <span className={clsx(styles.box, priceChange > 0 ? styles.green : styles.red)}>{priceChange}%</span>
        </div>
    );
}