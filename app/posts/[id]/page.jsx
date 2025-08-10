import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import React, { Suspense } from 'react'

export async function generateMetadata({ params }) {
    const {id} = params;
    const post = await getPost({id});
    return {
        title: post?.title,
        description: post?.body,
    };
};

export default async function Post({params}) {
    const { id } = params;
    const postPromise = getPost({id});
    const commentsPromise = getPostComment({id});

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
    const post = await postPromise;

    return (
        <div className='mt-6'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <br /><hr /><br />
            <h2>Comments</h2>
            <Suspense fallback={<p>Loading Comments...</p>}>
                <Comments commentsPromise={commentsPromise} />
            </Suspense>
        </div>
    )
};

export async function generateStaticParams(){
    const posts = await getAllPosts();

    return posts.map((post) => ({ 
        id: post.id.toString(),
    }))
};