import styles from './ColumnIcon.module.css';
import clsx from 'clsx';

interface Props {
    displaySymbol: string;
    imageId: string;
}

export function ColumnIcon({displaySymbol, imageId}: Props) {
    const imageUrl = `https://imagedelivery.net/4-5JC1r3VHAXpnrwWHBHRQ/${imageId}/coin64`;

    return (
        <div className={clsx(styles.container, styles.sticky)}>
            <img width={30} height={30} src={imageUrl} alt={`Image of ${displaySymbol}`}/>
        </div>
    );
}