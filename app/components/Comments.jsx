import React from 'react'

export default async function Comments({commentsPromise}) {
    const comments = await commentsPromise;
    return (
        <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5'>
            {
                comments.map((comment) => (
                    <div key={comment.id} className='border space-y-2 text-center'>
                        <h2>{comment.name}</h2>
                        <h3>{comment.email}</h3>
                        <p>{comment.body}</p>
                    </div>
                ))
            }
        </div>
    )
}
