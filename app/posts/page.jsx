import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "All Posts",
    description: "This is all posts page",
};

export default async function Posts() {
    const posts = await getAllPosts();
    return (
        <div>
            <h2>All Posts</h2>
            <div className='mt-6 flex flex-col gap-5'>
                {
                    posts.map((post) => (
                        <Link href={`/posts/${post.id}`} key={post.id} className='border w-fit'>{post.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}
