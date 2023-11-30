import React from 'react';
import GridRow from '~/components/grid-row/GridRow';
import {CoinListEntry} from '~/model/get-coin-list';
import styles from './Table.module.css';
import HeaderRow from '~/components/grid-columns/header-row/HeaderRow';


interface Props {
    coinList: CoinListEntry[];
    page: number;
}

export default function Table(props: Props) {
    return (
        <div className={styles.container}>
            <HeaderRow/>

            {/*https://stackoverflow.com/questions/24284510/auto-adjust-perant-div-width-to-sum-of-its-children-width*/}
            <div className={styles.rowsWrapper}>
                {props.coinList.map((coin: CoinListEntry, index: number) =>
                    (<GridRow key={coin.symbol} index={index} coinEntry={coin} page={props.page}/>))}
            </div>
        </div>
    );
}