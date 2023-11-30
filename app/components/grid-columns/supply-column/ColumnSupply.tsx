import styles from './ColumnSupply.module.css';
import {formatQuantity} from '~/utilities/format';

interface Props {
    supply1: number,
    supply2: number,
}

export function ColumnSupply({supply1, supply2}: Props) {

    const {quantity: formattedQuantity1, postfix: postfix1} = formatQuantity(supply1);
    const {quantity: formattedQuantity2, postfix: postfix2} = formatQuantity(supply2);

    return (
        <div className={styles.container}>
            <span className={styles.quantity}>{formattedQuantity1}{postfix1}</span>
            <span className={styles.quantity}>{formattedQuantity2}{postfix2}</span>
        </div>
    );
}