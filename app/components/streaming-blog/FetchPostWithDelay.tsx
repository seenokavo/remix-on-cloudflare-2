interface Props {
    post: Post;
}

export default function FetchPostWithDelay({post}: Props) {
    return (
        <div className="max-w-sm max-h-60 overflow-hidden">
            <ul>
                {/*<li>{post?.id}</li>*/}
                <li>{post?.title}</li>
                <li>{post?.body}</li>
            </ul>
        </div>
    );
}