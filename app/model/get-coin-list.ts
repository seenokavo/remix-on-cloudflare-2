export interface GetCoinListResponse {
    meta: Meta;
    data: CoinListEntry[];
}

export interface CoinListEntry {
    market_cap_rank: number;
    symbol: string;
    display_symbol: string;
    name: string;
    display: string;
    last_price_usd: number;
    volume_24_usd: number;
    last_market_cap_usd: number;
    price_change_1H_percent: number;
    price_change_1D_percent: number;
    price_change_7D_percent: number;
    price_change_30D_percent: number;
    price_change_90D_percent: number;
    price_change_180D_percent: number;
    price_change_YTD_percent: number;
    price_change_365D_percent: number;
    price_change_3Y_percent: number;
    price_change_5Y_percent: number;
    price_change_ALL_percent: number;
    ccu_slug: null | string;
    supply: number;
    total_supply: number;
    visits_24h_rank: number | null;
    image_id: string;
    btc_price: number;
    btc_change: number;
    shortname: string;
    include_supply: string;
    trading_since: number;
    created: number | null;
    image_t: number;
    ath_usd: number;
    ath_date: number;
    green_days: number;
    total_score: number | null;
    cmgr_3m: number | null;
    average_mktcap_all_time: number;
    growth_all_time: number;
    first_price_usd: number;
    coin_age: number;
    winning_months_trailing_12m: number;
    score: number;
}

export interface Meta {
    results: number;
    filter: Filter;
}

export interface Filter {
    type: string[];
    select_byslug: boolean;
    select_bysymbol: boolean;
    order_by: string;
    order_direction: string;
    limit: number;
    offset: number;
    slice: number;
    categories: boolean;
    exchanges: boolean;
    display: boolean;
    include: string[];
    exclude: Exclude;
    minmax: { [key: string]: boolean };
}

export interface Exclude {
    categories: boolean;
}
