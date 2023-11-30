import styles from './ColumnChart.module.css';
import {ChartData} from '~/components/grid-columns/chart-column/model';
import {ClientChart} from '~/components/grid-columns/chart-column/ClientChart';

interface Props {
    symbol: string;
}

export async function ColumnChart({symbol}: Props) {
    const data: ChartData = await fetch(`https://coincheckup.com/api/coincheckup/get_coin_charts?charts=7D&samples=48&coins=${symbol}`).then(res => res.json());
    const series = data[symbol]['7D'];
    const isPositive: boolean = series[0][1] <= series[series.length - 1][1];

    return (
        <div className={styles.container}>
            <ClientChart data={series} color={isPositive ? 'green' : 'red'}/>
        </div>
    );
}