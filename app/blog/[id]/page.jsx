import { notFound } from 'next/navigation';
import React from 'react'

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
