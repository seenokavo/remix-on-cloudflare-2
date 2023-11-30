import styles from './ColumnNum.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

interface Props {
    index: number;
    page: number;
}

export function ColumnNum({index, page}: Props) {

    const num = index + 1 + 100 * (page - 1);

    return (
        <div className={styles.container}>
            {num}
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faCoffee}/>
            </div>
        </div>
    );
}