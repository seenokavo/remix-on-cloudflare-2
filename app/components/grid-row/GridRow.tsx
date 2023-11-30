import React from 'react';
import styles from './GridRow.module.css';
import {CoinListEntry} from '@/model/get-coin-list';
import {ColumnName} from '~/components/grid-columns/name-column/ColumnName';
import {ColumnLastPrice} from '~/components/grid-columns/last-price-column/ColumnLastPrice';
import {ColumnPriceChange} from '~/components/grid-columns/price-change-column/ColumnPriceChange';
import {ColumnQuantity} from '~/components/grid-columns/quantity-column/ColumnQuantity';
import {ColumnSupply} from '~/components/grid-columns/supply-column/ColumnSupply';
import {ColumnChartClient} from '~/components/grid-columns/chart-column/ColumnChartClient';
import {ColumnNum} from '~/components/grid-columns/num-column/ColumnNum';
import {ColumnIcon} from '~/components/grid-columns/icon-column/ColumnIcon';

// import {ColumnChart} from '~/components/grid-columns/chart-column/ColumnChart';

interface Props {
    index: number;
    coinEntry: CoinListEntry;
    page: number;
}

export default function GridRow({coinEntry: coin, index, page}: Props) {
    return (
        <div className={styles.row}>
            <ColumnNum index={index} page={page}/>
            <ColumnIcon displaySymbol={coin.display_symbol} imageId={coin.image_id}/>
            <ColumnName symbol={coin.symbol} displaySymbol={coin.display_symbol} imageId={coin.image_id}/>
            <ColumnLastPrice lastPrice={coin.last_price_usd}/>
            <ColumnPriceChange priceChange={coin.price_change_1D_percent}/>
            <ColumnPriceChange priceChange={coin.price_change_7D_percent}/>
            <ColumnQuantity quantity={coin.last_market_cap_usd}/>
            <ColumnQuantity quantity={coin.volume_24_usd}/>
            <ColumnSupply supply1={coin.supply} supply2={coin.total_supply}/>
            <ColumnChartClient symbol={coin.symbol}/>
        </div>
    );
}