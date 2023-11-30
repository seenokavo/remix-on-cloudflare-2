import styles from './ColumnQuantity.module.css';
import {formatQuantity} from '~/utilities/format';

interface Props {
    quantity: number;
}

export function ColumnQuantity({quantity}: Props) {


    const {quantity: formattedQuantity, postfix} = formatQuantity(quantity);

    return (
        <div className={styles.container}>
            <span>${formattedQuantity}{postfix}</span>
        </div>
    );
}