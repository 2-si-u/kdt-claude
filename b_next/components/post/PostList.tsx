"use client"

import ErrorComponent from "@/components/common/ErrorComponent";
import Loading from "@/components/common/Loading";
import { usePosts } from "@/hooks/usePosts";

export default function PostList() {
    const { data: posts, status } = usePosts();

    if (status === "pending") {
        return <Loading />;
    }

    if (status === "error") {
        return <ErrorComponent />;
    }

    return (
        <ul className="flex w-full max-w-xl flex-col divide-y divide-neutral-200">
            {posts.map((post) => (
                <li key={post.id} className="py-3 text-sm text-neutral-800">
                    {post.title}
                </li>
            ))}
        </ul>
    );
}
