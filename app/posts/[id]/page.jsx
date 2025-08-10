import getPost from '@/lib/getPost';
import React from 'react'

export async function generateMetadata({ params }) {
    const {id} = params;
    const post = await getPost({id});
    return {
        title: post?.name,
        description: post?.email,
    };
};

export default async function Post({params}) {
    const { id } = params;
    const post = await getPost({id});
    console.log(post)
    return (
        <div className='mt-6'>
            <h2>{post.name}</h2>
            <p>{post.email}</p>
        </div>
    )
}
