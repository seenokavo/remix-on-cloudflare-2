import {useLoaderData} from '@remix-run/react';
import {ClientOnly} from '~/lib/client-only';
import ClientSidePostFetch from '~/components/ClientSidePostFetch';
import type {LoaderFunctionArgs} from '@remix-run/node';

export default function ArticlePage() {
    const id = useLoaderData<typeof loader>();
    console.log('Article page id', id);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    This is a blog page for [{id}]
                </p>

                <ClientOnly fallback={<div>Loading</div>}>
                    {() => (<ClientSidePostFetch id={id}/>)}
                </ClientOnly>
            </div>
        </main>
    );
}

export async function loader({params}: LoaderFunctionArgs) {
    return params.blogId || 'none';
}