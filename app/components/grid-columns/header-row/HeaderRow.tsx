import React from 'react';
import styles from './HeaderRow.module.css';
import {Header} from '~/components/grid-columns/header/Header';

export default function HeaderRow() {
    return (
        <div className={styles.container}>
            <Header title="#" width={45}/>
            <Header title="Name" width={145}/>
            <Header title="Last price" width={140}/> {/*180*/}
            <Header title="24H" width={90}/>
            <Header title="7D" width={90}/>
            <Header title="Market Cap" width={145}/> {/*150*/}
            <Header title="24h Volume" width={145}/> {/*150*/}
            <Header title="Supply" width={150}/> {/*150*/}
            <Header title="7D Chart" width={141}/>
        </div>
    );
}