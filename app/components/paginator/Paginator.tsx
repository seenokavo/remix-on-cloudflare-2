import styles from './Paginator.module.css';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface Props {
    page: number;
    numOfPages: number;
    numOfResults: number;
}

export function Paginator({page, numOfPages, numOfResults}: Props) {
    const leftIcon = <FontAwesomeIcon icon={faChevronCircleLeft} size={'2xs'}/>;
    const rightIcon = <FontAwesomeIcon icon={faChevronCircleRight} size={'2xs'}/>;

    return (
        <div className={styles.container}>

            <div className={styles.left}>
                {page > 1 && <a href={`?page=${page - 1}`}>{leftIcon}</a>}
                {/*{page < 2 && numOfPages && <a>{leftIcon}</a>}*/}
            </div>

            <span className={styles.pages}>Page {page} of {numOfPages}</span>

            <div className={styles.right}>
                {page < numOfPages && <a href={`?page=${page + 1}`}>{rightIcon}</a>}
                {/*{page >= numOfPages && <a>{rightIcon}</a>}*/}
            </div>

            |

            <span className={styles.results}>{numOfResults} results</span>
        </div>
    );
}