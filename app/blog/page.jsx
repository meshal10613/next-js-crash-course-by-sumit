import Link from 'next/link'
import React from 'react'

export default function BlogPage() {
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
    return (
        <div className='mt-10'>
            <ul>
                {
                    blogs.map((blog) => (
                        <li key={blog.id} className='border w-20 mb-2'>
                            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
