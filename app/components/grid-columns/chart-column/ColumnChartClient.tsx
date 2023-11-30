'use client';

import styles from './ColumnChart.module.css';
import {ChartData} from '~/components/grid-columns/chart-column/model';
import {ClientChart} from '~/components/grid-columns/chart-column/ClientChart';
import {useEffect, useState} from 'react';

interface Props {
    symbol: string;
}

interface State {
    series: [number, number][];
    isPositive: boolean;
}

export function ColumnChartClient({symbol}: Props) {
    const [state, setState] = useState<State>({
        series: [],
        isPositive: false
    });

    useEffect(() => {
        (async () => {
            const data: ChartData = await fetch(`https://coincheckup.com/api/coincheckup/get_coin_charts?charts=7D&samples=48&coins=${symbol}`).then(res => res.json());
            const series = data[symbol]['7D'];
            const isPositive: boolean = series[0][1] <= series[series.length - 1][1];

            setState({series, isPositive});
        })();
    }, [symbol]);

    return (
        <div className={styles.container}>
            {state.series.length > 0 && <ClientChart data={state.series} color={state.isPositive ? 'green' : 'red'}/>}
        </div>
    );
}