import type {LoaderFunctionArgs, MetaFunction} from '@remix-run/node';
import {Title} from '~/components/title/Title';
import React from 'react';
import Table from '~/components/table/Table';
import {useLoaderData} from '@remix-run/react';
import {GetCoinListResponse} from '~/model/get-coin-list';
import styles from '~/Index.module.css';
import {Paginator} from '~/components/paginator/Paginator';

export const meta: MetaFunction = () => {
    return [
        {title: 'Testing Remix'},
        {name: 'description', content: 'Enjoy free crypto prices and charts!'}
    ];
};

export default function Index() {
    const {page, response: coinsResponse} = useLoaderData<typeof loader>();
    const pageToPassDown = Number(page || 1);

    return (
        <main className={styles.container}>
            <Title/>
            <Paginator
                numOfResults={coinsResponse.meta.results}
                numOfPages={Math.ceil(coinsResponse.meta.results / 100)}
                page={pageToPassDown}/>            
            <Table coinList={coinsResponse.data} page={pageToPassDown}/>
        </main>
    );
}

export async function loader({request}: LoaderFunctionArgs): Promise<{ page: string, response: GetCoinListResponse }> {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '';
    const singlePage: string = page && typeof (page) === 'string' ? page : '';
    const res: GetCoinListResponse = await fetch(`https://coincheckup.com/api/coincheckup/get_coin_list?order_by=last_market_cap_usd&order_direction=desc&limit=100&offset=${page}`).then(request => request.json());
    return {page: singlePage, response: res};
}