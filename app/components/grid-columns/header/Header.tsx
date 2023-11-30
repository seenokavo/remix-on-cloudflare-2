import styles from './Header.module.css';

interface Props {
    title: string;
    width: number;
}

export function Header({title, width}: Props) {
    return (
        <div className={styles.container} style={{
            'flex': `0 0 ${width}px`
        }}>
            {title}
        </div>
    );
}