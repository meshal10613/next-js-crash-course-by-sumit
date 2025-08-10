import Button from '@/app/components/Button'
import Image from 'next/image'
import React from 'react'
import thumb from "@/public/ar-rahman.jpg"

export default function Mission() {
    return (
        <main className="mt-10">
            <h2>This is Mission page</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className='w-[400px] my-2'>
                <Image src={thumb} alt='ar-rahman' placeholder='blur'/>
            </div>
            <Button/>
        </main>
    )
}