import styles from './ColumnName.module.css';

interface Props {
    symbol: string;
    displaySymbol: string;
    imageId: string;
}

export function ColumnName({symbol, displaySymbol, imageId}: Props) {
    const imageUrl = `https://imagedelivery.net/4-5JC1r3VHAXpnrwWHBHRQ/${imageId}/coin64`;

    return (
        <div className={styles.container}>
            <a className={styles.anchor}>
                <span className={styles.displaySymbol}>{symbol}</span>
                <span className={styles.displayName}>{displaySymbol}</span>
            </a>
        </div>
    );
}