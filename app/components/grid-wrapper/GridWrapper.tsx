import React from 'react';
import styles from './GridWrapper.module.css';

export default function GridWrapper(props: React.PropsWithChildren) {
    return (<div className={styles.gridWrapper}>{props.children}</div>);
}