import React from 'react'
import Link from 'next/link'

export default function MainPage() {
    return (
        <main className='min-h-screen bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_42%,#ffffff_100%)] px-6 py-16 text-slate-950'>
            <div className='mx-auto flex max-w-5xl flex-col gap-10'>
                <div className='max-w-2xl'>
                    <p className='mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700'>Document exports</p>
                    <h1 className='text-5xl font-semibold tracking-tight'>Generate polished PDF outputs from this workspace</h1>
                    <p className='mt-4 text-lg leading-8 text-slate-600'>
                        Resume, cover letter, and now a dedicated ADS export flow for the new BAFI3254 assessment answers.
                    </p>
                </div>

                <div className='grid gap-5 md:grid-cols-3'>
                    <Link className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg' href='/cv'>
                        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-slate-500'>Resume</p>
                        <h2 className='mt-3 text-2xl font-semibold'>View my CV</h2>
                        <p className='mt-3 text-sm leading-6 text-slate-600'>Open the existing resume preview and export it as a PDF.</p>
                    </Link>
                </div>
            </div>
        </main>
    )
}
