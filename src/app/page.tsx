import React from 'react'
import Link from 'next/link'

export default function MainPage() {
    return (
        <div className='flex flex-col items-center justify-start h-screen'>
            <h1 className='text-4xl mt-24 font-bold'>Welcome to my website</h1>

            <div className='flex flex-row gap-4 mt-24'>
                <Link className='text-lg text-blue-500 border border-blue-500 rounded-md p-2' href='/cv'>
                    View my CV
                </Link>

                <Link className='text-lg text-blue-500 border border-blue-500 rounded-md p-2' href='/cl'>
                    View Cover Letter
                </Link>
            </div>
        </div>
    )
}
