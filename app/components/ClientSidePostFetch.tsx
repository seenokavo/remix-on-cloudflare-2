import {useEffect, useState} from 'react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Props {
    id: string
}

export default function ClientSidePostFetch({id}: Props) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const posts: Post[] = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
            setPosts(posts);
        })();
    }, [setPosts, id])

    return (
        <div className='max-w-sm max-h-60 overflow-hidden'>
            {JSON.stringify(posts)};
        </div>
    )
}
