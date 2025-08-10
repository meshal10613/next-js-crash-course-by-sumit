import { notFound } from 'next/navigation';
import React from 'react'

const blogs = [
    {
        id: 1,
        title: "Blog 1",
    },
    {
        id: 2,
        title: "Blog 2",
    }
]

export function generateMetadata({ params }) {
    const post = blogs.find((blog) => blog.id == params.id)
    return {
        title: post?.title || "no",
        description: post?.id,
    }
}

export default function Blog({params}) {
    const {id} = params;
    if(parseInt(id) > 2){
        notFound();
    }
    return (
        <div className='mt-6'>
            <h2>This is blog {id}</h2>
        </div>
    )
}
