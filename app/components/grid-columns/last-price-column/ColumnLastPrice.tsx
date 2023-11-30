import styles from './ColumnLastPrice.module.css';
import numeral from 'numeral';

interface Props {
    lastPrice: number;
}

export function ColumnLastPrice({lastPrice}: Props) {
    function formatENotation(input: number) {
        const num = Number(input);
        if (isNaN(num)) return '0';
        return num.toFixed(8);
    }

    function getFormattedPrice(lastPrice: number): string {
        if (lastPrice === null || lastPrice === undefined) return '';
        if (lastPrice.toString().includes('e')) return formatENotation(lastPrice);
        if (lastPrice < 0.0001) return numeral(lastPrice).format('0.00000000');
        if (lastPrice < 0) return numeral(lastPrice).format('0.0000');
        return numeral(lastPrice).format('0.00');
    }

    const formattedPrice: string = getFormattedPrice(lastPrice);

    return (
        <div className={styles.container}>
            <span className={styles.price}>${formattedPrice}</span>
        </div>
    );
}