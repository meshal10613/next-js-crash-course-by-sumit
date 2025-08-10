"use client";

import React from 'react'

export default function Button() {
    return (
        <div className='mt-6'>
            <button onClick={() => {console.log("Clicked")}} className='bg-green-500 rounded-sm p-3 cursor-pointer'>Click me</button>
        </div>
    )
}
